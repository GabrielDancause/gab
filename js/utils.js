(function(window) {
  'use strict';

  var GabUtils = {
    KEYS: {
      CUSTOMER: 'gab_customer',
      LEAD_CAPTURED: 'gab_lead_captured',
      POPUP_DISMISSED: 'gab_lead_popup_dismissed',
      EXIT_DISMISSED: 'gab_exit_dismissed',
      COURSE_ACCESS: 'gab_course_access'
    },

    getLS: function(key) {
      try {
        return localStorage.getItem(key);
      } catch(e) {
        return null;
      }
    },

    setLS: function(key, val) {
      try {
        localStorage.setItem(key, val);
      } catch(e) {
        // Silent fail
      }
    }
  };

  window.GabUtils = GabUtils;

})(window);
