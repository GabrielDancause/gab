import { state } from './state.js';

export function initSocialProof() {
  // ---------- Social Proof Toast ----------
  var toast = document.getElementById('socialProofToast');
  if (!toast || state.isCustomer) return;

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
}
