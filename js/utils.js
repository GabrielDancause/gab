(function(global) {
  'use strict';

  var GabUtils = global.GabUtils || {};

  GabUtils.getLS = function(key) {
    try { return localStorage.getItem(key); } catch(e) { return null; }
  };

  GabUtils.setLS = function(key, val) {
    try { localStorage.setItem(key, val || '1'); } catch(e) {}
  };

  global.GabUtils = GabUtils;

  // For CommonJS (Node.js/Jest)
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = GabUtils;
  }

})(typeof window !== 'undefined' ? window : this);
