const fs = require('fs');
const path = require('path');

describe('Lead Capture Form Submission', () => {
  let mainJsContent;
  let fetchMock;
  let gtagMock;

  beforeAll(() => {
    // Read main.js content once
    mainJsContent = fs.readFileSync(path.resolve(__dirname, '../js/main.js'), 'utf8');
  });

  beforeEach(() => {
    // Reset DOM with the form structure from index.html
    document.body.innerHTML = `
      <div class="lead-magnet-inner">
        <form action="https://app.kit.com/forms/9113620/subscriptions" method="POST" class="email-capture-form" data-form="lead-magnet-inline">
          <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off" value="">
          <input type="hidden" name="source" value="inline">
          <div class="form-group">
            <input type="text" name="first_name" placeholder="First name" required class="form-input">
          </div>
          <div class="form-group">
            <input type="email" name="email_address" placeholder="Your email" required class="form-input">
          </div>
          <button type="submit" class="btn btn-primary btn-large form-submit-btn">Send Me the Guide</button>
        </form>
        <div class="form-success" style="display:none;">
          <p>Success!</p>
        </div>
      </div>
      <!-- Modal structure placeholders to prevent main.js errors -->
      <div id="leadMagnetModal" class="modal-overlay"></div>
      <div id="exitIntentModal" class="modal-overlay"></div>
      <div id="socialProofToast"></div>
      <div class="site-nav"></div>
      <div class="nav-hamburger"></div>
      <div class="nav-cta"></div>
    `;

    // Mock fetch
    fetchMock = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      })
    );
    global.fetch = fetchMock;

    // Mock localStorage
    const localStorageMock = (function() {
      let store = {};
      return {
        getItem: jest.fn(key => store[key] || null),
        setItem: jest.fn((key, value) => { store[key] = value.toString(); }),
        clear: jest.fn(() => { store = {}; }),
        removeItem: jest.fn(key => { delete store[key]; })
      };
    })();
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });

    // Mock GA4/gtag
    gtagMock = jest.fn();
    window.gtag = gtagMock;

    // Mock IntersectionObserver
    window.IntersectionObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));

    // Mock scrollTo
    window.scrollTo = jest.fn();

    // Execute main.js to attach event listeners
    // We use new Function instead of eval to slightly isolate, but main.js relies on closure variables
    // so executing it in global context via eval is closest to browser behavior
    jest.resetModules();
    try {
      // Use eval to execute the script in the current JSDOM window context
      // Note: JSDOM window is global in jest-environment-jsdom
      eval(mainJsContent);
    } catch (e) {
      console.error('Error executing main.js:', e);
    }
  });

  afterEach(() => {
    jest.restoreAllMocks();
    document.body.innerHTML = '';
  });

  test('submits form successfully with valid data', async () => {
    const form = document.querySelector('.email-capture-form');
    const emailInput = form.querySelector('input[name="email_address"]');
    const nameInput = form.querySelector('input[name="first_name"]');
    const button = form.querySelector('button[type="submit"]');
    const successMsg = document.querySelector('.form-success');

    // Fill inputs
    emailInput.value = 'test@example.com';
    nameInput.value = 'Test User';

    // Submit form
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
    form.dispatchEvent(submitEvent);

    // Check button disabled state immediately
    expect(button.disabled).toBe(true);
    expect(button.textContent).toBe('Sending…');

    // Wait for promise resolution (microtasks)
    await new Promise(resolve => process.nextTick(resolve));

    // Verify fetch call
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, options] = fetchMock.mock.calls[0];
    expect(url).toBe('https://app.kit.com/forms/9113620/subscriptions');
    expect(options.method).toBe('POST');
    expect(JSON.parse(options.body)).toEqual({
      email_address: 'test@example.com',
      first_name: 'Test User',
      fields: { source: 'inline' }
    });

    // Verify UI updates
    expect(form.style.display).toBe('none');
    expect(successMsg.style.display).toBe('block');

    // Verify tracking
    expect(window.localStorage.setItem).toHaveBeenCalledWith('gab_lead_captured', '1');
    expect(gtagMock).toHaveBeenCalledWith('event', 'lead_magnet_signup', { source: 'lead-magnet-inline' });
  });

  test('blocks spam submission (honeypot)', async () => {
    const form = document.querySelector('.email-capture-form');
    const honeypotInput = form.querySelector('input[name="_gotcha"]');

    // Fill honeypot
    honeypotInput.value = 'spam-bot-value';

    // Submit form
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
    form.dispatchEvent(submitEvent);

    // Wait for potential async ops
    await new Promise(resolve => process.nextTick(resolve));

    // Verify fetch was NOT called
    expect(fetchMock).not.toHaveBeenCalled();
  });

  test('handles API errors gracefully', async () => {
    // Setup fetch to fail
    fetchMock.mockImplementationOnce(() => Promise.reject(new Error('Network error')));

    const form = document.querySelector('.email-capture-form');
    const button = form.querySelector('button[type="submit"]');

    // Fill inputs
    const emailInput = form.querySelector('input[name="email_address"]');
    emailInput.value = 'test@example.com';

    // Submit form
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
    form.dispatchEvent(submitEvent);

    // Initial state check
    expect(button.disabled).toBe(true);

    // Wait for async error handling
    await new Promise(resolve => setTimeout(resolve, 0));

    // Verify button reset
    expect(button.disabled).toBe(false);
    expect(button.textContent).toBe('Try Again');
    expect(button.style.background).toBe('rgb(231, 76, 60)'); // #e74c3c
  });
});
