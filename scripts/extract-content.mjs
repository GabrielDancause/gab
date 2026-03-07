import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, basename } from 'path';
import * as cheerio from 'cheerio';

const SRC_DIR = join(import.meta.dirname, '..', '..', 'gab');
const OUT_DIR = join(import.meta.dirname, '..', 'src', 'content', 'pages');

// Non-Charlevoix pages to skip (will be copied as raw HTML to public/)
const SKIP_PAGES = new Set([
  'index.html', 'course.html', 'stocks.html', 'lead-magnet.html',
  'footage.html', 'hello.html', 'thank-you.html', 'footage-test.html',
  'private-footage.html',
]);

function extractGradient($) {
  const style = $('style').text();
  const match = style.match(/\.hero\s*\{[^}]*background:\s*(linear-gradient\([^;]+\))/);
  return match ? match[1].trim().replace(/;$/, '') : '';
}

function extractAccentColor($) {
  const style = $('style').text();
  // For timeline dots and rank badges
  const timelineMatch = style.match(/\.timeline-item::before\s*\{[^}]*background:\s*([^;]+)/);
  const rankMatch = style.match(/\.entry\s+\.rank\s*\{[^}]*background:\s*([^;]+)/);
  return timelineMatch ? timelineMatch[1].trim() : (rankMatch ? rankMatch[1].trim() : '#2E3E24');
}

function extractTagColor($) {
  const style = $('style').text();
  const match = style.match(/\.entry\s+\.tag\s*\{[^}]*background:\s*([^;]+)/);
  const colorMatch = style.match(/\.entry\s+\.tag\s*\{[^}]*color:\s*([^;]+)/);
  return {
    tagBg: match ? match[1].trim() : '#f0f7ed',
    tagColor: colorMatch ? colorMatch[1].trim() : '#2E3E24',
  };
}

function detectPageType($) {
  const hasTimeline = $('.timeline').length > 0;
  const hasStatsBar = $('.stats-bar').length > 0;
  const hasPoiGrid = $('.poi-grid').length > 0;
  const hasEntries = $('.entry').length > 0;
  const hasListings = $('.listing').length > 0;
  const hasQuickFacts = $('.quick-facts').length > 0;
  const hasTop10Grid = $('.top10-grid').length > 0;
  const hasDayBlock = $('.day-block').length > 0;

  if (hasTop10Grid) return 'hub';
  if (hasEntries || hasListings) return 'top-list';
  if (hasStatsBar && hasPoiGrid) return 'town';
  if (hasDayBlock) return 'guide'; // road-trip style
  if (hasQuickFacts) return 'guide'; // business or guide page (same layout)
  return 'guide'; // fallback
}

function extractTownPage($) {
  const data = {};

  // Stats bar
  data.stats = [];
  $('.stats-bar .stat').each((_, el) => {
    data.stats.push({
      icon: $(el).find('.icon').text().trim(),
      value: $(el).find('.value').text().trim(),
      label: $(el).find('.label').text().trim(),
    });
  });

  // Sections
  data.sections = [];
  $('.section').each((_, el) => {
    const section = {
      title: $(el).find('h2').first().text().trim(),
      paragraphs: [],
      cards: [],
      pois: [],
      timeline: [],
      infoCards: [],
    };

    $(el).find('p').each((_, p) => {
      const parent = $(p).parent();
      // Only direct section paragraphs, not cards/pois/info
      if (parent.hasClass('section') || parent.is(el)) {
        section.paragraphs.push($(p).html().trim());
      }
    });

    // Card grid
    $(el).find('.card-grid .card').each((_, c) => {
      const cardLink = $(c).parent('a.card-link');
      section.cards.push({
        icon: $(c).find('.c-icon').text().trim(),
        title: $(c).find('h3').text().trim(),
        description: $(c).find('p').html().trim(),
        href: cardLink.length ? cardLink.attr('href') : null,
      });
    });

    // POI grid
    $(el).find('.poi-grid .poi').each((_, p) => {
      section.pois.push({
        icon: $(p).find('.p-icon').text().trim(),
        name: $(p).find('.p-name').text().trim(),
        type: $(p).find('.p-type').text().trim(),
        href: $(p).attr('href') || null,
      });
    });

    // Timeline
    $(el).find('.timeline .timeline-item').each((_, t) => {
      section.timeline.push({
        year: $(t).find('.year').text().trim(),
        desc: $(t).find('.desc').html().trim(),
      });
    });

    // Info grid
    $(el).find('.info-grid .info-card').each((_, ic) => {
      section.infoCards.push({
        title: $(ic).find('h3').text().trim(),
        content: $(ic).find('p').html().trim(),
      });
    });

    // Clean empty arrays
    if (!section.cards.length) delete section.cards;
    if (!section.pois.length) delete section.pois;
    if (!section.timeline.length) delete section.timeline;
    if (!section.infoCards.length) delete section.infoCards;
    if (!section.paragraphs.length) delete section.paragraphs;

    data.sections.push(section);
  });

  return data;
}

function extractTopListPage($) {
  const data = {};

  // Intro
  const intro = $('.intro');
  data.intro = intro.length ? intro.html().trim() : null;

  // Entries (supports both .entry and .listing formats)
  data.entries = [];
  const entrySelector = $('.entry').length ? '.entry' : '.listing';
  $(entrySelector).each((_, el) => {
    const isListing = entrySelector === '.listing';
    const entry = {
      rank: parseInt($(el).find(isListing ? '.listing-rank' : '.rank').text().trim(), 10),
      emoji: isListing ? null : $(el).find('.emoji').text().trim(),
      title: $(el).find('h2').text().trim(),
      location: isListing
        ? $(el).find('.listing-meta').text().trim()
        : $(el).find('.location').text().trim(),
      description: $(el).find(isListing ? '> p' : '.desc').html()?.trim() || '',
      tags: [],
      href: null,
      meta: isListing ? [] : null,
    };

    $(el).find('.tag').each((_, t) => {
      entry.tags.push($(t).text().trim());
    });

    // Meta items for listing format
    if (isListing) {
      $(el).find('.listing-meta span').each((_, m) => {
        entry.meta.push($(m).text().trim());
      });
    }

    // Check for links
    const link = $(el).find('a.entry-link');
    if (link.length) {
      entry.href = link.attr('href');
    }
    // Listing format: link in h2 > a
    const h2Link = $(el).find('h2 a');
    if (h2Link.length && !entry.href) {
      entry.href = h2Link.attr('href');
      entry.title = h2Link.text().trim();
    }

    if (!entry.meta || !entry.meta.length) delete entry.meta;
    if (!entry.emoji) delete entry.emoji;

    data.entries.push(entry);
  });

  data.listingFormat = entrySelector === '.listing';

  // Accent/tag colors
  const { tagBg, tagColor } = extractTagColor($);
  data.tagBg = tagBg;
  data.tagColor = tagColor;

  return data;
}

function extractGuidePage($) {
  const data = {};

  // Quick facts
  data.quickFacts = [];
  $('.quick-facts .fact').each((_, el) => {
    data.quickFacts.push({
      icon: $(el).find('.icon').text().trim(),
      value: $(el).find('.value').text().trim(),
      label: $(el).find('.label').text().trim(),
    });
  });

  // Hero CTA
  const heroCta = $('.hero .cta');
  if (heroCta.length) {
    data.heroCta = {
      text: heroCta.text().trim(),
      href: heroCta.attr('href'),
      external: heroCta.attr('target') === '_blank',
    };
  }

  // Sections
  data.sections = [];
  $('.container > .section').each((_, el) => {
    const section = {
      title: $(el).find('h2').first().text().trim(),
      paragraphs: [],
      highlightCards: [],
      infoCards: [],
      timeline: [],
      dayBlocks: [],
    };

    // Direct paragraphs (not inside cards)
    $(el).children('p').each((_, p) => {
      section.paragraphs.push($(p).html().trim());
    });
    // Also paragraphs that are direct children of section but after h2
    if (!section.paragraphs.length) {
      $(el).find('> p, > h2 ~ p').each((_, p) => {
        // Exclude paragraphs inside highlight-grid etc.
        if (!$(p).closest('.highlight-grid, .info-grid, .highlight-card, .info-card, .day-block, .timeline').length) {
          section.paragraphs.push($(p).html().trim());
        }
      });
    }

    // Highlight cards
    $(el).find('.highlight-grid .highlight-card').each((_, c) => {
      section.highlightCards.push({
        icon: $(c).find('.h-icon').text().trim(),
        title: $(c).find('h3').text().trim(),
        description: $(c).find('p').html().trim(),
      });
    });

    // Info cards
    $(el).find('.info-grid .info-card').each((_, ic) => {
      section.infoCards.push({
        title: $(ic).find('h3').text().trim(),
        content: $(ic).find('p').html().trim(),
      });
    });

    // Timeline
    $(el).find('.timeline .timeline-item').each((_, t) => {
      section.timeline.push({
        year: $(t).find('.year').text().trim(),
        desc: $(t).find('.desc').html().trim(),
      });
    });

    // Day blocks (road-trip style)
    $(el).find('.day-block').each((_, d) => {
      section.dayBlocks.push({
        label: $(d).find('.day-label').text().trim(),
        title: $(d).find('h3').text().trim(),
        distance: $(d).find('.distance').text().trim() || null,
        paragraphs: $(d).find('p').map((_, p) => $(p).html().trim()).get(),
      });
    });

    // Clean empty arrays
    if (!section.highlightCards.length) delete section.highlightCards;
    if (!section.infoCards.length) delete section.infoCards;
    if (!section.timeline.length) delete section.timeline;
    if (!section.dayBlocks.length) delete section.dayBlocks;
    if (!section.paragraphs.length) delete section.paragraphs;

    data.sections.push(section);
  });

  return data;
}

function extractHubPage($) {
  const data = {};

  // Intro
  data.intro = $('.intro').html()?.trim() || null;

  // Stats bar
  data.stats = [];
  $('.stats-bar .stat-item').each((_, el) => {
    data.stats.push({
      num: $(el).find('.s-num').text().trim(),
      label: $(el).find('.s-label').text().trim(),
    });
  });

  // Top 10 cards
  data.top10Cards = [];
  $('.top10-grid .top10-card').each((_, el) => {
    const heroDiv = $(el).find('.card-hero');
    // Check for inline style override
    const inlineStyle = heroDiv.attr('style') || '';
    const bgMatch = inlineStyle.match(/background:\s*(linear-gradient\([^)]+\))/);

    // Determine gradient from class or inline style
    let gradient = '';
    if (bgMatch) {
      gradient = bgMatch[1];
    } else {
      const classes = $(el).attr('class') || '';
      if (classes.includes('card-auberges')) gradient = 'linear-gradient(135deg, #2E3E24, #1a2e1a)';
      else if (classes.includes('card-fermes')) gradient = 'linear-gradient(135deg, #5a3e1b, #2E3E24)';
      else if (classes.includes('card-activites')) gradient = 'linear-gradient(135deg, #8b2e2e, #2E3E24)';
      else if (classes.includes('card-villages')) gradient = 'linear-gradient(135deg, #3a5a2e, #2E3E24)';
    }

    data.top10Cards.push({
      href: $(el).attr('href'),
      emoji: heroDiv.find('.emoji').text().trim(),
      title: heroDiv.find('h2').text().trim(),
      count: heroDiv.find('.count').text().trim(),
      description: $(el).find('.card-body p').text().trim(),
      gradient,
    });
  });

  // Page sections
  data.pageSections = [];
  $('.pages-section').each((_, el) => {
    const section = {
      title: $(el).find('h3').text().trim(),
      links: [],
    };
    $(el).find('.page-link').each((_, link) => {
      section.links.push({
        emoji: $(link).find('.pl-emoji').text().trim(),
        text: $(link).text().replace($(link).find('.pl-emoji').text(), '').trim(),
        href: $(link).attr('href'),
      });
    });
    data.pageSections.push(section);
  });

  return data;
}

function extractPage(filePath) {
  const html = readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(html);
  const slug = basename(filePath, '.html');

  // Common metadata
  const page = {
    slug,
    title: $('title').text().trim(),
    description: $('meta[name="description"]').attr('content') || '',
    ogTitle: $('meta[property="og:title"]').attr('content') || '',
    ogDescription: $('meta[property="og:description"]').attr('content') || '',
    heroGradient: extractGradient($),
    accentColor: extractAccentColor($),
  };

  // Hero content
  const hero = $('.hero');
  page.badge = hero.find('.badge').text().trim() || null;
  page.heroLocation = hero.find('.location').text().trim() || null;
  page.h1 = hero.find('h1').html().trim();
  page.tagline = hero.find('.tagline').text().trim() || null;
  page.heroSub = hero.find('.sub').text().trim() || null;

  // Back link
  const backLink = hero.find('.back-link a');
  if (backLink.length) {
    page.backLink = {
      text: backLink.text().trim(),
      href: backLink.attr('href'),
    };
  }

  // Detect page type
  page.pageType = detectPageType($);

  // Extract type-specific data
  switch (page.pageType) {
    case 'town':
      Object.assign(page, extractTownPage($));
      break;
    case 'top-list':
      Object.assign(page, extractTopListPage($));
      break;
    case 'hub':
      Object.assign(page, extractHubPage($));
      break;
    case 'guide':
      Object.assign(page, extractGuidePage($));
      break;
  }

  // CTA banner
  const cta = $('.cta-banner');
  if (cta.length) {
    page.ctaBanner = {
      title: cta.find('h2').text().trim(),
      text: cta.find('p').text().trim(),
      links: [],
    };
    cta.find('a').each((_, a) => {
      page.ctaBanner.links.push({
        text: $(a).text().trim(),
        href: $(a).attr('href'),
      });
    });
  }

  // Footer
  const footer = $('.footer');
  if (footer.length) {
    page.footer = footer.find('p').html().trim();
  }

  return page;
}

// Main
const files = readdirSync(SRC_DIR).filter(f => f.endsWith('.html'));
let extracted = 0;
let skipped = 0;

for (const file of files) {
  if (SKIP_PAGES.has(file)) {
    skipped++;
    continue;
  }

  try {
    const data = extractPage(join(SRC_DIR, file));
    const outPath = join(OUT_DIR, `${data.slug}.json`);
    writeFileSync(outPath, JSON.stringify(data, null, 2));
    extracted++;
    console.log(`✓ ${file} → ${data.pageType}`);
  } catch (err) {
    console.error(`✗ ${file}: ${err.message}`);
  }
}

console.log(`\nDone: ${extracted} extracted, ${skipped} skipped`);
