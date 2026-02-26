(function() {
  'use strict';

  // ---------- Sticky Nav ----------
  var nav = document.querySelector('.site-nav');
  if (nav) {
    var ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          if (window.pageYOffset > 40) {
            nav.classList.add('scrolled');
          } else {
            nav.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // ---------- Mobile Hamburger ----------
  var hamburger = document.querySelector('.nav-hamburger');
  var navCta = document.querySelector('.nav-cta');
  if (hamburger && navCta) {
    hamburger.addEventListener('click', function() {
      var open = navCta.classList.toggle('nav-open');
      hamburger.classList.toggle('active', open);
      hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close on link click
    navCta.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navCta.classList.remove('nav-open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---------- Smooth Scroll for Anchor Links ----------
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var offset = 80;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ---------- FAQ Accordion (for sub-pages) ----------
  document.querySelectorAll('.faq-question').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var item = this.parentElement;
      var isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item.open').forEach(function(openItem) {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
      });

      item.classList.toggle('open', !isOpen);
      this.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
    });
  });

  // ---------- Scroll Animations (IntersectionObserver) ----------
  var fadeElements = document.querySelectorAll('.fade-up');

  function handleScrollAnimation(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }

  if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(handleScrollAnimation, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach(function(el) {
      observer.observe(el);
    });
  } else {
    fadeElements.forEach(function(el) {
      el.classList.add('visible');
    });
  }

  // ---------- GA4 Helper ----------
  function ga4(event, params) {
    if (typeof gtag === 'function') {
      gtag('event', event, params || {});
    }
  }

  // ---------- Scroll Depth Tracking ----------
  (function() {
    var milestones = { 25: false, 50: false, 75: false, 100: false };
    var ticking = false;

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          var scrollPercent = Math.round(
            ((window.pageYOffset + window.innerHeight) / document.documentElement.scrollHeight) * 100
          );

          var allMet = true;
          [25, 50, 75, 100].forEach(function(mark) {
            if (!milestones[mark]) {
              if (scrollPercent >= mark) {
                milestones[mark] = true;
                ga4('scroll_depth', { percent: mark });
              } else {
                allMet = false;
              }
            }
          });

          if (allMet) {
            window.removeEventListener('scroll', onScroll);
          }

          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll);
  })();

})();
