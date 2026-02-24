/**
 * Course Access Gate
 * Protects course.html and all module pages behind a magic link.
 *
 * How it works:
 * 1. Customer buys → Stripe redirects to thank-you.html → localStorage grants access
 * 2. Kit sends welcome email with magic link: course.html?key=ACCESS_KEY
 * 3. Clicking the link stores the key in localStorage, cleans the URL
 * 4. Future visits check localStorage — no key needed in URL
 * 5. No valid access → page content hidden, "purchase required" message shown
 */
(async function() {
  'use strict';

  // SHA-256 hash of the access key
  var ACCESS_HASH = 'a9f1a37eb869ddc620d0b1c729c984ae4bb3f72cbc795c83abc8d92b74b9a3fc';
  var LS_KEY = 'gab_course_access';
  var LANDING_URL = 'https://gab.ae/';

  // Hide page immediately to prevent content flash
  document.documentElement.style.visibility = 'hidden';

  async function sha256(message) {
    if (!message) return '';
    try {
      const msgBuffer = new TextEncoder().encode(message);
      const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      return hashHex;
    } catch(e) {
      console.error('Crypto error', e);
      return '';
    }
  }

  function getParam(name) {
    try {
      return new URLSearchParams(window.location.search).get(name);
    } catch(e) {
      return null;
    }
  }

  async function hasAccess() {
    try {
      var storedKey = localStorage.getItem(LS_KEY);
      if (!storedKey) return false;
      var hash = await sha256(storedKey);
      return hash === ACCESS_HASH;
    } catch(e) {
      return false;
    }
  }

  function grantAccess(key) {
    try {
      localStorage.setItem(LS_KEY, key);
      localStorage.setItem('gab_customer', '1');
    } catch(e) {}
    // Clean the key from URL
    var clean = window.location.pathname + window.location.hash;
    window.history.replaceState({}, '', clean);
  }

  function showPage() {
    document.documentElement.style.visibility = 'visible';
  }

  function renderGate() {
    document.body.innerHTML = '' +
      '<div style="max-width:480px;margin:120px auto;text-align:center;padding:24px;font-family:Inter,-apple-system,sans-serif;color:#F5F5F7;">' +
        '<div style="font-size:3rem;margin-bottom:20px;">🔒</div>' +
        '<h1 style="font-size:1.6rem;font-weight:700;margin-bottom:12px;">Course Access Required</h1>' +
        '<p style="color:#8E8E93;margin-bottom:28px;line-height:1.6;">This content is for enrolled students. If you purchased the tutorial, check your email for the access link.</p>' +
        '<a href="' + LANDING_URL + '" style="display:inline-block;background:#6C5CE7;color:white;padding:14px 32px;border-radius:10px;text-decoration:none;font-weight:600;font-size:1rem;">Get the Tutorial &mdash; $39</a>' +
        '<p style="margin-top:24px;font-size:0.85rem;color:#636366;">Already purchased? Check your email for the magic link or contact <a href="mailto:gab@gab.ae" style="color:#A29BFE;">gab@gab.ae</a></p>' +
      '</div>';
    showPage();
  }

  function showGate() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', renderGate);
    } else {
      renderGate();
    }
  }

  try {
    // 1. Check for key in URL
    var urlKey = getParam('key');
    if (urlKey) {
      var hash = await sha256(urlKey);
      if (hash === ACCESS_HASH) {
        grantAccess(urlKey);
        showPage();
        return;
      }
    }

    // 2. Check localStorage
    if (await hasAccess()) {
      showPage();
      return;
    }
  } catch(e) {
    console.error('Access check failed', e);
  }

  // 3. No access — show gate
  showGate();

})();
