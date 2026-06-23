// Renders a "Meet the speaker" block on a session detail page, pulling the
// speaker's photo, name, title, and link straight from sessions.js so it always
// matches the schedule/home cards (single source of truth, no data drift).
//
// To show it on a session page, include this after sessions.js:
//   <script src="sessions.js"></script>
//   <script src="speaker-block.js"></script>
// It finds the session whose topicUrl matches the current file, then inserts the
// block right after the hero. Pages with no speaker (e.g. Demo Night) are skipped.
// An optional per-speaker `bio` string in sessions.js is rendered if present.
(function () {
  function esc(t) {
    return (t == null ? '' : String(t))
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function render() {
    var all = (window.AI_KITCHEN_SESSIONS || []).concat(window.AI_KITCHEN_SUMMER_SESSIONS || []);
    var file = (location.pathname.split('/').pop() || '').toLowerCase();
    var s = null;
    for (var i = 0; i < all.length; i++) {
      if (all[i].topicUrl && all[i].topicUrl.toLowerCase() === file) { s = all[i]; break; }
    }
    if (!s || !s.photo) return;                       // event page / no speaker
    if (document.getElementById('speaker-block-section')) return;  // idempotent

    var hero = document.querySelector('.session-hero');
    var anchor = hero ? (hero.closest('section') || hero)
                      : (document.querySelector('main > section') || document.querySelector('main'));
    if (!anchor || !anchor.parentNode) return;

    if (!document.getElementById('speaker-block-style')) {
      var css =
        '.sb-card{display:flex;align-items:center;gap:18px;background:#fff;border:1px solid var(--bg-alt,#efe9e0);border-radius:12px;padding:16px 20px;box-shadow:0 1px 2px rgba(40,32,24,.06);}' +
        '.sb-card + .sb-card{margin-top:12px;}' +
        '.sb-card .speaker-avatar{margin-left:0;align-self:center;}' +
        '.sb-info{min-width:0;}' +
        '.sb-name{font-weight:700;font-size:1.125rem;color:var(--text-primary,#2a2118);line-height:1.25;}' +
        '.sb-title{color:var(--text-secondary,#58504a);font-size:.9375rem;line-height:1.45;margin-top:3px;}' +
        '.sb-bio{color:var(--text-secondary,#58504a);font-size:.9375rem;line-height:1.5;margin-top:7px;}' +
        '.sb-link{display:inline-block;margin-top:8px;font-size:.875rem;font-weight:600;color:var(--coral,#c4884a);text-decoration:none;}' +
        '.sb-link:hover{text-decoration:underline;}' +
        '@media(max-width:520px){.sb-card{flex-direction:column;text-align:center;}.sb-card .speaker-avatar{margin:0 auto;}}';
      var st = document.createElement('style');
      st.id = 'speaker-block-style';
      st.textContent = css;
      document.head.appendChild(st);
    }

    function card(p) {
      var label = (p.url && /linkedin\.com/i.test(p.url)) ? 'Connect on LinkedIn →'
                : (p.url ? 'Visit website →' : '');
      var photo = p.photo ? "background-image:url('" + esc(p.photo) + "');" : '';
      return '<div class="sb-card">' +
        '<div class="speaker-avatar" style="' + photo + '" aria-hidden="true">' + esc(p.initials || '') + '</div>' +
        '<div class="sb-info">' +
        '<div class="sb-name">' + esc(p.name) + '</div>' +
        (p.title ? '<div class="sb-title">' + esc(p.title) + '</div>' : '') +
        (p.bio ? '<div class="sb-bio">' + esc(p.bio) + '</div>' : '') +
        (p.url ? '<a class="sb-link" href="' + esc(p.url) + '" target="_blank" rel="noopener noreferrer">' + label + '</a>' : '') +
        '</div></div>';
    }

    var sec = document.createElement('section');
    sec.id = 'speaker-block-section';
    sec.className = 'section';
    sec.style.paddingTop = '0';
    sec.innerHTML = '<div class="session-container">' +
      '<h2 class="session-heading">Meet the <em>' + (s.copresenter ? 'speakers' : 'speaker') + '</em></h2>' +
      card(s) + (s.copresenter ? card(s.copresenter) : '') +
      '</div>';

    anchor.parentNode.insertBefore(sec, anchor.nextSibling);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
