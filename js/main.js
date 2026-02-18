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
        var offset = 80; // account for fixed nav
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ---------- FAQ Accordion ----------
  document.querySelectorAll('.faq-question').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var item = this.parentElement;
      var isOpen = item.classList.contains('open');

      // Close all other items
      document.querySelectorAll('.faq-item.open').forEach(function(openItem) {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current item
      item.classList.toggle('open', !isOpen);
      this.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
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

  // ============================================
  // SALES FUNNEL
  // ============================================

  // ---------- Helpers ----------
  function ga4(event, params) {
    if (typeof gtag === 'function') {
      gtag('event', event, params || {});
    }
  }

  function getLS(key) {
    try { return localStorage.getItem(key); } catch(e) { return null; }
  }

  function setLS(key, val) {
    try { localStorage.setItem(key, val || '1'); } catch(e) {}
  }

  var isCustomer = getLS('gab_customer') === '1';
  var leadCaptured = getLS('gab_lead_captured') === '1';
  var popupDismissed = getLS('gab_lead_popup_dismissed') === '1';
  var exitDismissed = getLS('gab_exit_dismissed') === '1';

  // ---------- Stripe CTA Tracking ----------
  document.querySelectorAll('.btn-stripe').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var eventName = this.getAttribute('data-event') || 'cta_click';
      ga4(eventName, { currency: 'USD', value: 39 });
    });
  });

  // ---------- Stripe Cancel Detection ----------
  (function() {
    var params = new URLSearchParams(window.location.search);
    if (params.get('cancelled') === 'true') {
      ga4('checkout_cancelled');
      // Clean URL without reload
      var clean = window.location.pathname + window.location.hash;
      window.history.replaceState({}, '', clean);
    }
  })();

  // ---------- AJAX Email Form Handler ----------
  document.querySelectorAll('.email-capture-form').forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      var formEl = this;
      var submitBtn = formEl.querySelector('button[type="submit"]');
      var successEl = formEl.parentElement.querySelector('.form-success');
      var source = formEl.getAttribute('data-form') || 'inline';

      // Honeypot check
      var honeypot = formEl.querySelector('input[name="_gotcha"]');
      if (honeypot && honeypot.value) return;

      // Disable button
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';
      }

      // Build JSON body for Kit API
      var emailInput = formEl.querySelector('input[name="email_address"]');
      var nameInput = formEl.querySelector('input[name="first_name"]');
      var sourceInput = formEl.querySelector('input[name="source"]');

      var body = { email_address: emailInput ? emailInput.value : '' };
      if (nameInput && nameInput.value) body.first_name = nameInput.value;
      if (sourceInput && sourceInput.value) body.fields = { source: sourceInput.value };

      fetch(formEl.action, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
      })
      .then(function(response) {
        if (response.ok) {
          // Show success state
          formEl.style.display = 'none';
          if (successEl) successEl.style.display = 'block';

          // Track
          setLS('gab_lead_captured');
          leadCaptured = true;
          ga4('lead_magnet_signup', { source: source });

          // Close modal if inside one
          var modal = formEl.closest('.modal-overlay');
          if (modal) {
            setTimeout(function() {
              closeModal(modal);
            }, 2500);
          }
        } else {
          throw new Error('Form submission failed');
        }
      })
      .catch(function() {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Try Again';
          submitBtn.style.background = '#e74c3c';
        }
      });
    });
  });

  // ---------- Modal System ----------
  var leadModal = document.getElementById('leadMagnetModal');
  var exitModal = document.getElementById('exitIntentModal');
  var activeModal = null;

  function openModal(modal) {
    if (!modal || activeModal) return;
    activeModal = modal;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    ga4('popup_shown', { type: modal.id });
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
    activeModal = null;
  }

  // Close button clicks
  document.querySelectorAll('.modal-close').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var modal = this.closest('.modal-overlay');
      closeModal(modal);

      if (modal === leadModal) {
        setLS('gab_lead_popup_dismissed');
        popupDismissed = true;
      } else if (modal === exitModal) {
        setLS('gab_exit_dismissed');
        exitDismissed = true;
      }
    });
  });

  // Overlay click to close
  document.querySelectorAll('.modal-overlay').forEach(function(overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        closeModal(overlay);

        if (overlay === leadModal) {
          setLS('gab_lead_popup_dismissed');
          popupDismissed = true;
        } else if (overlay === exitModal) {
          setLS('gab_exit_dismissed');
          exitDismissed = true;
        }
      }
    });
  });

  // Escape key to close
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && activeModal) {
      if (activeModal === leadModal) {
        setLS('gab_lead_popup_dismissed');
        popupDismissed = true;
      } else if (activeModal === exitModal) {
        setLS('gab_exit_dismissed');
        exitDismissed = true;
      }
      closeModal(activeModal);
    }
  });

  // ---------- Lead Magnet Popup Trigger ----------
  // Shows after 45 seconds OR 60% scroll, whichever comes first
  function canShowLeadPopup() {
    return leadModal && !isCustomer && !leadCaptured && !popupDismissed && !activeModal;
  }

  var leadPopupShown = false;

  function showLeadPopup() {
    if (leadPopupShown || !canShowLeadPopup()) return;
    leadPopupShown = true;
    openModal(leadModal);
  }

  // Timer trigger: 45 seconds
  if (canShowLeadPopup()) {
    setTimeout(function() {
      showLeadPopup();
    }, 45000);
  }

  // Scroll trigger: 60% page scroll
  if (canShowLeadPopup()) {
    var scrollTriggered = false;
    window.addEventListener('scroll', function() {
      if (scrollTriggered || leadPopupShown) return;
      var scrollPercent = (window.pageYOffset + window.innerHeight) / document.documentElement.scrollHeight;
      if (scrollPercent >= 0.60) {
        scrollTriggered = true;
        showLeadPopup();
      }
    });
  }

  // ---------- Exit Intent Trigger ----------
  function canShowExitIntent() {
    return exitModal && !isCustomer && !leadCaptured && !exitDismissed && !activeModal && !leadPopupShown;
  }

  var exitShown = false;
  var pageLoadTime = Date.now();

  // Desktop: mouse leaves viewport (after 15s minimum)
  if ('ontouchstart' in window === false) {
    document.addEventListener('mouseout', function(e) {
      if (exitShown || !canShowExitIntent()) return;
      if (Date.now() - pageLoadTime < 15000) return;

      if (e.clientY <= 0 && e.relatedTarget === null) {
        exitShown = true;
        openModal(exitModal);
      }
    });
  }

  // Mobile: trigger after 90 seconds
  if ('ontouchstart' in window) {
    setTimeout(function() {
      if (!exitShown && canShowExitIntent()) {
        exitShown = true;
        openModal(exitModal);
      }
    }, 90000);
  }

  // ---------- Scroll Depth Tracking ----------
  (function() {
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
  })();

  // ---------- Social Proof Toast ----------
  (function() {
    var toast = document.getElementById('socialProofToast');
    if (!toast || isCustomer) return;

    var messages = [
      'Someone from Montreal just enrolled! 🎉',
      '3 people signed up this week',
      'A student just built their first site! 🚀',
      'New enrollment from Toronto 🇨🇦',
      'Someone just completed Module 3!'
    ];

    var textEl = toast.querySelector('.toast-text');
    if (!textEl) return;

    var index = 0;

    function showToast() {
      textEl.textContent = messages[index];
      toast.classList.add('active');

      setTimeout(function() {
        toast.classList.remove('active');
      }, 4000);

      index = (index + 1) % messages.length;
    }

    // First show after 20 seconds
    setTimeout(function() {
      showToast();
      // Then every 45 seconds
      setInterval(showToast, 45000);
    }, 20000);
  })();

})();
