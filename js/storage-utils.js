(function(root) {
  'use strict';

  var StorageUtils = {
    get: function(key) {
      try {
        return localStorage.getItem(key);
      } catch(e) {
        console.warn('StorageUtils: get failed for key "' + key + '"', e);
        return null;
      }
    },
    set: function(key, val) {
      try {
        localStorage.setItem(key, val);
      } catch(e) {
        console.warn('StorageUtils: set failed for key "' + key + '"', e);
      }
    },
    remove: function(key) {
      try {
        localStorage.removeItem(key);
      } catch(e) {
        console.warn('StorageUtils: remove failed for key "' + key + '"', e);
      }
    }
  };

  root.StorageUtils = StorageUtils;

})(window);
