import { ga4 } from './utils.js';

export function initStripe() {
  // ---------- Stripe CTA Tracking ----------
  document.querySelectorAll('.btn-stripe').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var eventName = this.getAttribute('data-event') || 'cta_click';
      ga4(eventName, { currency: 'USD', value: 39 });
    });
  });

  // ---------- Stripe Cancel Detection ----------
  var params = new URLSearchParams(window.location.search);
  if (params.get('cancelled') === 'true') {
    ga4('checkout_cancelled');
    // Clean URL without reload
    var clean = window.location.pathname + window.location.hash;
    window.history.replaceState({}, '', clean);
  }
}
