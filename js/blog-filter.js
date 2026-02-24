document.addEventListener('DOMContentLoaded', function() {
  var filterBtns = document.querySelectorAll('.filter-btn');
  var posts = document.querySelectorAll('.post-card');
  var counter = document.getElementById('blog-count');

  if (filterBtns.length === 0 || posts.length === 0) return;

  // Pre-calculate data to avoid DOM access during filtering
  var postData = Array.from(posts).map(function(post) {
    var toolsAttr = post.getAttribute('data-tools');
    return {
      element: post,
      tag: post.getAttribute('data-tag'),
      tools: toolsAttr ? toolsAttr.split(',') : [],
      isVisible: post.style.display !== 'none'
    };
  });

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

      // Batch DOM updates
      postData.forEach(function(post) {
        var shouldShow = false;

        if (filterValue === 'all') {
          shouldShow = true;
        } else {
          var matchesTag = post.tag === filterValue;
          var matchesTool = post.tools.includes(filterValue);
          shouldShow = matchesTag || matchesTool;
        }

        if (shouldShow) {
          visibleCount++;
          if (!post.isVisible) {
            post.element.style.display = 'block';
            post.isVisible = true;
          }
        } else {
          if (post.isVisible) {
            post.element.style.display = 'none';
            post.isVisible = false;
          }
        }
      });

      updateCounter(visibleCount);
    });
  });
});
