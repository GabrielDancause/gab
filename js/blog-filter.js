document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  const filterBtns = document.querySelectorAll('.filter-btn');
  const posts = Array.from(document.querySelectorAll('.post-card'));
  const counter = document.getElementById('blog-count');
  const postsContainer = document.querySelector('.blog-posts');

  if (filterBtns.length === 0 || posts.length === 0) return;

  // Configuration
  const POSTS_PER_PAGE = 6;

  // State
  let state = {
    filter: 'all',
    visibleLimit: POSTS_PER_PAGE
  };

  function updateCounter(count) {
    if (counter) {
      counter.textContent = count + (count === 1 ? ' post' : ' posts');
    }
  }

  // Create Load More button if it doesn't exist
  let loadMoreBtn = document.getElementById('load-more-btn');
  let loadMoreContainer = null;

  if (!loadMoreBtn && postsContainer) {
    loadMoreContainer = document.createElement('div');
    loadMoreContainer.className = 'blog-load-more';

    loadMoreBtn = document.createElement('button');
    loadMoreBtn.id = 'load-more-btn';
    loadMoreBtn.className = 'btn btn-outline';
    loadMoreBtn.textContent = 'Load More';

    loadMoreContainer.appendChild(loadMoreBtn);
    // Insert after blog-posts container
    postsContainer.parentNode.insertBefore(loadMoreContainer, postsContainer.nextSibling);

    loadMoreBtn.addEventListener('click', () => {
      state.visibleLimit += POSTS_PER_PAGE;
      render();
    });
  } else if (loadMoreBtn) {
    loadMoreContainer = loadMoreBtn.parentNode;
    // Add listener if existing button found (though unlikely given clean slate)
    loadMoreBtn.addEventListener('click', () => {
        state.visibleLimit += POSTS_PER_PAGE;
        render();
    });
  }

  function render() {
    // 1. Filter posts
    const filteredPosts = posts.filter(post => {
      if (state.filter === 'all') return true;

      const postTag = post.getAttribute('data-tag');
      const postTools = post.getAttribute('data-tools'); // e.g., "Python,Claude"

      const matchesTag = postTag === state.filter;
      const matchesTool = postTools && postTools.split(',').includes(state.filter);

      return matchesTag || matchesTool;
    });

    // 2. Determine visibility based on pagination
    const visiblePosts = filteredPosts.slice(0, state.visibleLimit);

    // 3. Update DOM
    posts.forEach(post => {
      if (visiblePosts.includes(post)) {
        post.style.display = 'block';
      } else {
        post.style.display = 'none';
      }
    });

    // 4. Update UI elements
    updateCounter(filteredPosts.length); // Show total matching count

    if (loadMoreContainer) {
      if (state.visibleLimit >= filteredPosts.length) {
        loadMoreContainer.style.display = 'none';
      } else {
        loadMoreContainer.style.display = 'block';
      }
    }
  }

  // Event Listeners for Filters
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      this.classList.add('active');

      // Update state
      state.filter = this.getAttribute('data-filter');
      state.visibleLimit = POSTS_PER_PAGE; // Reset pagination on filter change

      render();
    });
  });

  // Initial Render
  render();
});
