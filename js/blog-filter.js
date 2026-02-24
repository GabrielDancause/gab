'use strict';

document.addEventListener('DOMContentLoaded', function() {
  var filterBtns = document.querySelectorAll('.filter-btn');
  var posts = document.querySelectorAll('.post-card');
  var counter = document.getElementById('blog-count');

  if (filterBtns.length === 0 || posts.length === 0) return;

  function updateCounter(count) {
    if (counter) {
      counter.textContent = count + (count === 1 ? ' post' : ' posts');
    }
  }

  // Initial count
  updateCounter(posts.length);

  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      // Remove active class from all buttons
      filterBtns.forEach(function(b) {
        b.classList.remove('active');
      });

      // Add active class to clicked button
      this.classList.add('active');

      var filterValue = this.getAttribute('data-filter');
      var visibleCount = 0;

      posts.forEach(function(post) {
        if (filterValue === 'all') {
          post.style.display = 'block';
          visibleCount++;
          return;
        }

        var postTag = post.getAttribute('data-tag');
        var postTools = post.getAttribute('data-tools'); // e.g., "Python,Claude"

        var matchesTag = postTag === filterValue;
        var matchesTool = postTools && postTools.split(',').includes(filterValue);

        if (matchesTag || matchesTool) {
          post.style.display = 'block';
          visibleCount++;
        } else {
          post.style.display = 'none';
        }
      });

      updateCounter(visibleCount);
    });
  });
});
