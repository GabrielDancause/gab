export function ga4(event, params) {
  if (typeof gtag === 'function') {
    gtag('event', event, params || {});
  }
}

export function getLS(key) {
  try { return localStorage.getItem(key); } catch(e) { return null; }
}

export function setLS(key, val) {
  try { localStorage.setItem(key, val || '1'); } catch(e) {}
}
