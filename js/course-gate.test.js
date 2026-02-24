/**
 * @jest-environment jsdom
 */

const courseGate = require('./course-gate.js');

describe('Course Gate', () => {
  const { hasAccess, grantAccess, init, ACCESS_KEY, LS_KEY } = courseGate;

  beforeEach(() => {
    // Clear localStorage
    localStorage.clear();

    // Reset document state
    document.documentElement.style.visibility = '';
    document.body.innerHTML = '';

    // Reset URL to base state
    window.history.pushState({}, '', '/');

    // Restore any mocks
    jest.restoreAllMocks();
  });

  describe('hasAccess', () => {
    test('returns false when no key in localStorage', () => {
      expect(hasAccess()).toBe(false);
    });

    test('returns false when incorrect key in localStorage', () => {
      localStorage.setItem(LS_KEY, 'wrong_key');
      expect(hasAccess()).toBe(false);
    });

    test('returns true when correct key in localStorage', () => {
      localStorage.setItem(LS_KEY, ACCESS_KEY);
      expect(hasAccess()).toBe(true);
    });
  });

  describe('grantAccess', () => {
    test('sets correct key in localStorage', () => {
      grantAccess();
      expect(localStorage.getItem(LS_KEY)).toBe(ACCESS_KEY);
      expect(localStorage.getItem('gab_customer')).toBe('1');
    });

    test('cleans the URL', () => {
      // Setup URL with query params
      window.history.pushState({}, '', '/course.html?key=' + ACCESS_KEY);

      // Spy on replaceState
      const replaceStateSpy = jest.spyOn(window.history, 'replaceState');

      grantAccess();

      // Expect replaceState to be called with clean path
      expect(replaceStateSpy).toHaveBeenCalledWith({}, '', '/course.html');
    });
  });

  describe('init integration', () => {
    test('hides content initially (transient state)', () => {
       // To verify this, we need to interrupt init() before it shows page/gate.
       // We can mock grantAccess, hasAccess, and showGate to do nothing?
       // But init defines them internally or uses closure.
       // Actually, we can just ensure that if we are in a state where neither access nor gate is shown immediately, it is hidden.
       // But init ALWAYS shows one or the other eventually.
       // Let's mock showPage (which we can't easily because it's internal).
       // However, we can rely on the fact that if we don't have access, showGate is called,
       // which waits for DOMContentLoaded.
       // So if we run init() without access, and BEFORE DOMContentLoaded, visibility should be hidden.

       // Ensure no access
       window.history.pushState({}, '', '/');

       init();

       // Before DOMContentLoaded, it should be hidden
       expect(document.documentElement.style.visibility).toBe('hidden');
    });

    test('grants access and shows page if URL key is valid', () => {
      window.history.pushState({}, '', '/?key=' + ACCESS_KEY);

      const replaceStateSpy = jest.spyOn(window.history, 'replaceState');

      init();

      expect(localStorage.getItem(LS_KEY)).toBe(ACCESS_KEY);
      expect(document.documentElement.style.visibility).toBe('visible');
      expect(replaceStateSpy).toHaveBeenCalled();
    });

    test('shows page if access already granted in localStorage', () => {
      localStorage.setItem(LS_KEY, ACCESS_KEY);

      init();

      expect(document.documentElement.style.visibility).toBe('visible');
    });

    test('shows gate if no access', () => {
      // Ensure clean state
      window.history.pushState({}, '', '/');

      // init() adds event listener for DOMContentLoaded
      init();

      // Dispatch DOMContentLoaded
      const event = new Event('DOMContentLoaded');
      document.dispatchEvent(event);

      // Expect gate HTML to be injected
      expect(document.body.innerHTML).toContain('Course Access Required');
      expect(document.documentElement.style.visibility).toBe('visible');
    });

    test('handles exception in localStorage access gracefully', () => {
       // Mock localStorage.getItem to throw
       // Note: JSDOM localStorage is not easily mockable directly if it's native implementation?
       // But we can try spyOn Storage.prototype.getItem
       const getItemSpy = jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
         throw new Error('Access denied');
       });

       const result = hasAccess();
       expect(result).toBe(false);
    });
  });
});
