import { state, setPopupDismissed, setExitDismissed } from './state.js';
import { ga4 } from './utils.js';

var leadModal, exitModal, activeModal;
var leadPopupShown = false;
var exitShown = false;
var pageLoadTime = Date.now();

export function openModal(modal) {
  if (!modal || activeModal) return;
  activeModal = modal;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  ga4('popup_shown', { type: modal.id });
}

export function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
  activeModal = null;
}

function canShowLeadPopup() {
  return leadModal && !state.isCustomer && !state.leadCaptured && !state.popupDismissed && !activeModal;
}

function showLeadPopup() {
  if (leadPopupShown || !canShowLeadPopup()) return;
  leadPopupShown = true;
  openModal(leadModal);
}

function canShowExitIntent() {
  return exitModal && !state.isCustomer && !state.leadCaptured && !state.exitDismissed && !activeModal && !leadPopupShown;
}

export function initModals() {
  // ---------- Modal System ----------
  leadModal = document.getElementById('leadMagnetModal');
  exitModal = document.getElementById('exitIntentModal');
  activeModal = null;

  // Close button clicks
  document.querySelectorAll('.modal-close').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var modal = this.closest('.modal-overlay');
      closeModal(modal);

      if (modal === leadModal) {
        setPopupDismissed();
      } else if (modal === exitModal) {
        setExitDismissed();
      }
    });
  });

  // Overlay click to close
  document.querySelectorAll('.modal-overlay').forEach(function(overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        closeModal(overlay);

        if (overlay === leadModal) {
          setPopupDismissed();
        } else if (overlay === exitModal) {
          setExitDismissed();
        }
      }
    });
  });

  // Escape key to close
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && activeModal) {
      if (activeModal === leadModal) {
        setPopupDismissed();
      } else if (activeModal === exitModal) {
        setExitDismissed();
      }
      closeModal(activeModal);
    }
  });

  // ---------- Lead Magnet Popup Trigger ----------
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
}
