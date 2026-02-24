import { ga4 } from './utils.js';
import { setLeadCaptured } from './state.js';
import { closeModal } from './modals.js';

export function initForms() {
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
          setLeadCaptured();
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
}
