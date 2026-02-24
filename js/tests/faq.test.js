/**
 * @jest-environment jsdom
 */

describe('FAQ Accordion', () => {
  beforeEach(() => {
    // Reset DOM
    document.body.innerHTML = `
      <div class="faq-list">
        <div class="faq-item" id="item1">
          <button class="faq-question">Question 1</button>
          <div class="faq-answer">Answer 1</div>
        </div>
        <div class="faq-item" id="item2">
          <button class="faq-question">Question 2</button>
          <div class="faq-answer">Answer 2</div>
        </div>
        <div class="faq-item" id="item3">
          <button class="faq-question">Question 3</button>
          <div class="faq-answer">Answer 3</div>
        </div>
      </div>
    `;

    // Mock globals
    window.scrollTo = jest.fn();
    window.requestAnimationFrame = jest.fn(cb => cb());
    window.IntersectionObserver = jest.fn(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
    global.fetch = jest.fn();
    window.gtag = jest.fn();

    // Reset modules to allow re-execution of main.js
    jest.resetModules();
  });

  function loadMainScript() {
      // Re-require main.js to execute IIFE
      require('../main.js');
  }

  test('clicking a closed FAQ item opens it', () => {
    loadMainScript();

    const item1 = document.getElementById('item1');
    const btn1 = item1.querySelector('.faq-question');

    // Initial state check
    expect(item1.classList.contains('open')).toBe(false);

    // Simulate click
    btn1.click();

    // Verify open class added
    expect(item1.classList.contains('open')).toBe(true);
    // Verify aria-expanded updated
    expect(btn1.getAttribute('aria-expanded')).toBe('true');
  });

  test('clicking an open FAQ item closes it', () => {
    loadMainScript();

    const item1 = document.getElementById('item1');
    const btn1 = item1.querySelector('.faq-question');

    // Open it first
    btn1.click();
    expect(item1.classList.contains('open')).toBe(true);

    // Click again to close
    btn1.click();

    expect(item1.classList.contains('open')).toBe(false);
    expect(btn1.getAttribute('aria-expanded')).toBe('false');
  });

  test('clicking a closed FAQ item closes other open items', () => {
    loadMainScript();

    const item1 = document.getElementById('item1');
    const btn1 = item1.querySelector('.faq-question');
    const item2 = document.getElementById('item2');
    const btn2 = item2.querySelector('.faq-question');

    // Open item 1
    btn1.click();
    expect(item1.classList.contains('open')).toBe(true);
    expect(item2.classList.contains('open')).toBe(false);

    // Click item 2
    btn2.click();

    // Verify item 1 closed
    expect(item1.classList.contains('open')).toBe(false);
    expect(btn1.getAttribute('aria-expanded')).toBe('false');

    // Verify item 2 open
    expect(item2.classList.contains('open')).toBe(true);
    expect(btn2.getAttribute('aria-expanded')).toBe('true');
  });
});
