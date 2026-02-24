import { ga4 } from './utils.js';

export function initScroll() {
  // ---------- Smooth Scroll for Anchor Links ----------
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var offset = 80; // account for fixed nav
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ---------- Scroll Animations (IntersectionObserver) ----------
  var fadeElements = document.querySelectorAll('.fade-up');
  if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach(function(el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all elements if IntersectionObserver not supported
    fadeElements.forEach(function(el) {
      el.classList.add('visible');
    });
  }

  // ---------- Scroll Depth Tracking ----------
  var milestones = { 25: false, 50: false, 75: false, 100: false };

  window.addEventListener('scroll', function() {
    var scrollPercent = Math.round(
      ((window.pageYOffset + window.innerHeight) / document.documentElement.scrollHeight) * 100
    );

    [25, 50, 75, 100].forEach(function(mark) {
      if (!milestones[mark] && scrollPercent >= mark) {
        milestones[mark] = true;
        ga4('scroll_depth', { percent: mark });
      }
    });
  });
}
