
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

      function storyLink(n) {
        return ' href="' + esc(n.url) + '"' + (n.external ? ' target="_blank" rel="noopener noreferrer"' : '');
      }
      function thumbnail(n) {
        if (!n.image) return '';
        var photo = n.image;
        return '<a class="news-thumbnail' + (photo.kind === 'logo' ? ' news-thumbnail--logo' : '') + (photo.dark ? ' news-thumbnail--dark' : '') + '"' + storyLink(n) + ' aria-label="' + esc('Read: ' + n.headline) + '">' +
          '<img src="' + esc(photo.src) + '" alt="' + esc(photo.alt) + '" width="' + esc(photo.width) + '" height="' + esc(photo.height) + '" loading="lazy" decoding="async">' +
        '</a>';
      }

      list.innerHTML = visible.map(function(n) {
        // body is allowed to contain HTML (e.g., links) since news.js is
        // an author-controlled file. Headline and date are still escaped.
        return '<li class="news-item reveal"' + (n.id ? ' id="' + esc(n.id) + '"' : '') + '>' +
          '<div class="news-date">' + esc(fmtDate(n.date)) + '</div>' +
          '<h2 class="news-headline">' + (n.url ? '<a' + storyLink(n) + '>' + esc(n.headline) + '</a>' : esc(n.headline)) + '</h2>' +
          '<div class="news-body">' + (n.summary || n.body || '') + '</div>' +
          thumbnail(n) +
        '</li>';
      }).join('');
      document.getElementById('news-fallback').hidden = true;
      section.hidden = false;
      section.style.display = '';
    })();

document.querySelectorAll(".reveal").forEach(function(el){el.classList.add("visible")});

// News items are inserted after the browser initially looks for a URL fragment.
// Wait for fonts so a heading above the item cannot move the scroll position.
function scrollToNewsItem() {
  var newsTarget = window.location.hash && document.getElementById(window.location.hash.slice(1));
  if (newsTarget && newsTarget.classList.contains('news-item')) newsTarget.scrollIntoView();
}
if (document.fonts) document.fonts.ready.then(scrollToNewsItem);
else scrollToNewsItem();
