/**
 * @jest-environment jsdom
 */

describe('Blog Filter Functionality', () => {
  let domLoadedCallback;

  beforeEach(() => {
    // Reset modules to ensure the script is re-executed cleanly for each test
    jest.resetModules();

    // Set up the mock DOM structure
    document.body.innerHTML = `
      <div class="blog-filters">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="Category1">Category1</button>
        <button class="filter-btn" data-filter="Tool1">Tool1</button>
        <button class="filter-btn" data-filter="Tool2">Tool2</button>
      </div>
      <div id="blog-count"></div>
      <div class="blog-posts">
        <!-- Post 1: Matches Category1 and Tool2 -->
        <div class="post-card" data-tag="Category1" data-tools="Tool2">Post 1</div>
        <!-- Post 2: Matches Category2 and Tool1, Tool2 (comma separated) -->
        <div class="post-card" data-tag="Category2" data-tools="Tool1,Tool2">Post 2</div>
        <!-- Post 3: Matches Category1 only (no tools) -->
        <div class="post-card" data-tag="Category1">Post 3</div>
      </div>
    `;

    // Mock document.addEventListener to capture the DOMContentLoaded callback
    // This prevents multiple listeners from accumulating across tests
    jest.spyOn(document, 'addEventListener').mockImplementation((event, callback) => {
      if (event === 'DOMContentLoaded') {
        domLoadedCallback = callback;
      }
    });

    // Load the blog-filter script
    // This will register the DOMContentLoaded listener
    require('../blog-filter.js');

    // Manually trigger the DOMContentLoaded callback to initialize the script logic
    if (domLoadedCallback) {
      domLoadedCallback();
    }
  });

  afterEach(() => {
    // Restore mocks
    jest.restoreAllMocks();
  });

  test('Initial load should display total post count', () => {
    const counter = document.getElementById('blog-count');
    // We have 3 posts in the mock DOM
    expect(counter.textContent).toBe('3 posts');
  });

  test('Filter by Category should show only matching posts', () => {
    const btn = document.querySelector('button[data-filter="Category1"]');
    btn.click();

    const posts = document.querySelectorAll('.post-card');

    // Post 1 (Category1) -> Visible
    expect(posts[0].style.display).toBe('block');
    // Post 2 (Category2) -> Hidden
    expect(posts[1].style.display).toBe('none');
    // Post 3 (Category1) -> Visible
    expect(posts[2].style.display).toBe('block');

    const counter = document.getElementById('blog-count');
    expect(counter.textContent).toBe('2 posts');
  });

  test('Filter by Tool should show posts with matching tool', () => {
    const btn = document.querySelector('button[data-filter="Tool1"]');
    btn.click();

    const posts = document.querySelectorAll('.post-card');

    // Post 1 (Tool2) -> Hidden
    expect(posts[0].style.display).toBe('none');
    // Post 2 (Tool1,Tool2) -> Visible
    expect(posts[1].style.display).toBe('block');
    // Post 3 (No tools) -> Hidden
    expect(posts[2].style.display).toBe('none');

    const counter = document.getElementById('blog-count');
    expect(counter.textContent).toBe('1 post');
  });

  test('Filter by Tool should handle comma-separated values', () => {
    // Filter by "Tool2", which is present in Post 1 ("Tool2") and Post 2 ("Tool1,Tool2")
    const btn = document.querySelector('button[data-filter="Tool2"]');
    btn.click();

    const posts = document.querySelectorAll('.post-card');

    // Post 1 (Tool2) -> Visible
    expect(posts[0].style.display).toBe('block');
    // Post 2 (Tool1,Tool2) -> Visible
    expect(posts[1].style.display).toBe('block');
    // Post 3 (No tools) -> Hidden
    expect(posts[2].style.display).toBe('none');

    const counter = document.getElementById('blog-count');
    expect(counter.textContent).toBe('2 posts');
  });

  test('Reset to All should show all posts', () => {
    // First apply a filter
    const catBtn = document.querySelector('button[data-filter="Category1"]');
    catBtn.click();

    // Then click "All"
    const allBtn = document.querySelector('button[data-filter="all"]');
    allBtn.click();

    const posts = document.querySelectorAll('.post-card');

    // All should be visible
    expect(posts[0].style.display).toBe('block');
    expect(posts[1].style.display).toBe('block');
    expect(posts[2].style.display).toBe('block');

    const counter = document.getElementById('blog-count');
    expect(counter.textContent).toBe('3 posts');
  });

  test('Active class should update on button click', () => {
    const allBtn = document.querySelector('button[data-filter="all"]');
    const catBtn = document.querySelector('button[data-filter="Category1"]');

    // Initially "All" is active
    expect(allBtn.classList.contains('active')).toBe(true);
    expect(catBtn.classList.contains('active')).toBe(false);

    // Click Category1
    catBtn.click();

    // "All" should lose active, Category1 should gain active
    expect(allBtn.classList.contains('active')).toBe(false);
    expect(catBtn.classList.contains('active')).toBe(true);
  });
});
