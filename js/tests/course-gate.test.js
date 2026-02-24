/**
 * @jest-environment jsdom
 */

describe('Course Gate - getParam', () => {
  let getParam;

  beforeAll(() => {
    // Load the module
    // The IIFE will run immediately.
    // Initially window.location.search is empty, so no side effects related to access granting should occur.
    const module = require('../course-gate.js');
    getParam = module.getParam;
  });

  beforeEach(() => {
    // Reset URL to clean state
    window.history.pushState({}, '', '/course.html');
  });

  test('should return null when parameter is missing', () => {
    window.history.pushState({}, '', '?other=value');
    expect(getParam('key')).toBeNull();
  });

  test('should return correct value when parameter exists', () => {
    window.history.pushState({}, '', '?key=secret');
    expect(getParam('key')).toBe('secret');
  });

  test('should return empty string when parameter has no value', () => {
    window.history.pushState({}, '', '?key=');
    expect(getParam('key')).toBe('');
  });

  test('should handle URL encoded characters', () => {
    window.history.pushState({}, '', '?key=hello%20world');
    expect(getParam('key')).toBe('hello world');
  });

  test('should handle multiple parameters', () => {
      window.history.pushState({}, '', '?a=1&key=value&b=2');
      expect(getParam('key')).toBe('value');
  });

  test('should return the first value when multiple parameters have the same name', () => {
      window.history.pushState({}, '', '?key=first&key=second');
      expect(getParam('key')).toBe('first');
  });

  test('should return null if URLSearchParams throws error', () => {
      const originalURLSearchParams = window.URLSearchParams;
      // Mock the constructor to throw
      window.URLSearchParams = jest.fn(() => {
          throw new Error('Parsing error');
      });

      expect(getParam('key')).toBeNull();

      // Restore
      window.URLSearchParams = originalURLSearchParams;
  });
});
