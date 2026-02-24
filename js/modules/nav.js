export function initNav() {
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
}
