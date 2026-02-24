const GabUtils = require('../utils.js');

describe('GabUtils', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    jest.restoreAllMocks();
  });

  describe('getLS', () => {
    test('returns value from localStorage', () => {
      localStorage.setItem('test_key', 'test_value');
      expect(GabUtils.getLS('test_key')).toBe('test_value');
    });

    test('returns null if key does not exist', () => {
      expect(GabUtils.getLS('non_existent')).toBeNull();
    });

    test('returns null if localStorage.getItem throws', () => {
      jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
        throw new Error('Access denied');
      });
      expect(GabUtils.getLS('test_key')).toBeNull();
    });
  });

  describe('setLS', () => {
    test('sets value in localStorage', () => {
      GabUtils.setLS('test_key', 'new_value');
      expect(localStorage.getItem('test_key')).toBe('new_value');
    });

    test('sets default value "1" if value is falsy', () => {
      GabUtils.setLS('test_key_null', null);
      expect(localStorage.getItem('test_key_null')).toBe('1');

      GabUtils.setLS('test_key_undefined', undefined);
      expect(localStorage.getItem('test_key_undefined')).toBe('1');

      GabUtils.setLS('test_key_empty', '');
      expect(localStorage.getItem('test_key_empty')).toBe('1');
    });

    test('does not throw if localStorage.setItem throws', () => {
      jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
        throw new Error('Quota exceeded');
      });
      expect(() => GabUtils.setLS('test_key', 'val')).not.toThrow();
    });
  });
});
