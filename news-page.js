
    (function() {
      var list = document.getElementById('news-list');
      var section = document.querySelector('main');
      if (!list || !section) return;
      var items = window.AI_KITCHEN_NEWS || [];

      var today = new Date();
      today.setHours(0, 0, 0, 0);

      var visible = items.filter(function(n) {
        if (!n.expires) return true;
        var exp = new Date(n.expires + 'T23:59:59');
        return exp >= today;
      }).sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
      });

      if (visible.length === 0) return; // Keep the update-list invitation available.

      function esc(s) { return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }
      function fmtDate(s) {
        var d = new Date(s + 'T12:00:00');
        return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      }

      list.innerHTML = visible.map(function(n) {
        // body is allowed to contain HTML (e.g., links) since news.js is
        // an author-controlled file. Headline and date are still escaped.
        return '<li class="news-item reveal">' +
          '<div class="news-date">' + esc(fmtDate(n.date)) + '</div>' +
          '<div class="news-headline">' + esc(n.headline) + '</div>' +
          '<div class="news-body">' + (n.body || '') + '</div>' +
        '</li>';
      }).join('');
      document.getElementById('news-fallback').hidden = true;
      section.hidden = false;
      section.style.display = '';
    })();

document.querySelectorAll(".reveal").forEach(function(el){el.classList.add("visible")});
