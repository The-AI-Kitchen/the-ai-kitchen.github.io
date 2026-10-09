/* Session metadata stays in sessions.js. This file only renders the homepage. */
(function () {
  var spring = window.AI_KITCHEN_SESSIONS || [];
  var summer = window.AI_KITCHEN_SUMMER_SESSIONS || [];
  var fall = window.AI_KITCHEN_FALL_SESSIONS || [];
  var parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Los_Angeles', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date());
  var calendar = {};
  parts.forEach(function (part) { calendar[part.type] = part.value; });
  var today = calendar.year + '-' + calendar.month + '-' + calendar.day;
  var candidates = spring.concat(summer, fall).filter(function (session) { return !session.tbd && !session.cancelled && session.date >= today; }).sort(function (a, b) { return a.date.localeCompare(b.date); });
  var next = candidates[0];
  if (!next) return;
  var card = document.getElementById('spotlight-card');
  var date = new Date(next.date + 'T12:00:00-07:00');
  var stamp = document.getElementById('spotlight-date');
  stamp.setAttribute('datetime', next.date);
  var spokenDate = document.createElement('span'); spokenDate.className = 'visually-hidden';
  spokenDate.textContent = date.toLocaleDateString('en-US', { timeZone: 'America/Los_Angeles', weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  stamp.appendChild(spokenDate);
  var visualDate = document.createElement('span'); visualDate.setAttribute('aria-hidden', 'true');
  visualDate.appendChild(document.createTextNode(date.toLocaleDateString('en-US', { timeZone: 'America/Los_Angeles', month: 'short' })));
  var number = document.createElement('b'); number.textContent = next.date.slice(8); visualDate.appendChild(number);
  visualDate.appendChild(document.createTextNode(date.toLocaleDateString('en-US', { timeZone: 'America/Los_Angeles', weekday: 'long' })));
  stamp.appendChild(visualDate);
  document.getElementById('spotlight-eyebrow').textContent = next.featured ? 'Up next in the Kitchen' : (next.date === today ? 'Today in the Kitchen' : 'Next in the Kitchen') + (summer.indexOf(next) !== -1 ? ' · Summer Test Kitchen' : ' · Taste Test');
  var topic = document.getElementById('spotlight-topic');
  if (next.topicUrl) {
    var link = document.createElement('a'); link.href = next.topicUrl; link.textContent = next.featured ? next.name : next.topic; topic.appendChild(link);
  } else { topic.textContent = next.featured ? next.name : next.topic; }
  function speaker(person) {
    var link = document.createElement(person.url ? 'a' : 'span');
    link.textContent = person.name;
    if (person.url) { link.href = person.url; link.target = '_blank'; link.rel = 'noopener noreferrer'; }
    return link;
  }
  var speakers = document.getElementById('spotlight-speakers');
  if (!next.featured) {
    var photos = document.getElementById('spotlight-photos');
    [next, next.copresenter].forEach(function (person) {
      if (!person || !person.photo) return;
      var photo = document.createElement('img');
      photo.src = person.photo; photo.alt = person.name;
      photo.width = 64; photo.height = 64; photo.loading = 'lazy'; photo.decoding = 'async';
      photos.appendChild(photo); photos.hidden = false;
    });
    speakers.appendChild(document.createTextNode('With ')); speakers.appendChild(speaker(next));
    if (next.copresenter) { speakers.appendChild(document.createTextNode(' & ')); speakers.appendChild(speaker(next.copresenter)); }
    document.getElementById('spotlight-title').textContent = (next.title || '') + (next.copresenter && next.copresenter.title ? ' · ' + next.copresenter.title : '');
  }
  var description = next.featured ? next.topic : next.description;
  if (description) { document.getElementById('spotlight-description').textContent = description; document.getElementById('spotlight-description').hidden = false; }
  if (next.studentHost && next.studentHost.name) {
    var host = document.getElementById('spotlight-host'); host.appendChild(document.createTextNode('Student host: ')); host.appendChild(speaker(next.studentHost)); host.hidden = false;
  }
  var note = next.note || (next.featured ? (next.title || '').split(' · ')[0] : (spring.indexOf(next) !== -1 ? '1:30–5:00 p.m.' : '1:00 p.m.'));
  document.getElementById('spotlight-time').textContent = note.split(' · ')[0];
  document.getElementById('spotlight-finish').textContent = /soft finish/i.test(note) ? 'Soft finish · stay to experiment' : '';
  var location = document.getElementById('spotlight-location');
  if (next.roomChange) { location.textContent = next.roomChange; location.classList.add('home-room-alert'); }
  else if (next.featured) { location.textContent = (next.title || '').split(' · ').slice(1).join(' · '); }
  else if (spring.indexOf(next) !== -1) { location.textContent = 'Lucas 306 · Santa Clara University'; }
  else { location.appendChild(document.createTextNode('Benson 036')); location.appendChild(document.createElement('br')); location.appendChild(document.createTextNode('California Mission Room')); }
  if (next.roomChange || next.featured || spring.indexOf(next) !== -1) {
    document.getElementById('spotlight-directions').hidden = true; document.getElementById('spotlight-directions-divider').hidden = true;
  }
  card.hidden = false;
  document.getElementById('spotlight-fallback').hidden = true;
})();

/* Old homepage question links now lead to the full FAQ. */
(function () {
  var legacy = ['friday-session','is-this-a-course','ai-fluency','engineering-student','industry-demo','ai-expert','weekly-commitment','hci-lab','ai-collaborate','responsible-ai','ai-tools','no-code','kitchen-theme','bridge-academia-industry'];
  function questionFromHash() {
    var id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch (e) { return; }
    if (legacy.indexOf(id) !== -1) { location.replace('faq.html#' + encodeURIComponent(id)); return; }
    var question = id && document.getElementById(id);
    if (question && question.tagName === 'DETAILS') { question.open = true; question.scrollIntoView({ block: 'start' }); }
  }
  questionFromHash(); window.addEventListener('hashchange', questionFromHash);
})();

    (function() {
      var list = document.getElementById('news-list');
      var section = document.getElementById('news');
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

      if (visible.length === 0) return; // section stays hidden

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
        return '<li class="news-item reveal">' +
          '<div class="news-date">' + esc(fmtDate(n.date)) + '</div>' +
          '<h3 class="news-headline">' + (n.url ? '<a' + storyLink(n) + '>' + esc(n.headline) + '</a>' : esc(n.headline)) + '</h3>' +
          '<div class="news-body">' + (n.summary || n.body || '') + '</div>' +
          thumbnail(n) +
        '</li>';
      }).join('');
      section.hidden = false;
      section.style.display = '';
    })();


    (function() {
      var grid = document.getElementById('press-grid');
      var section = document.getElementById('press');
      if (!grid || !section) return;
      var items = (window.AI_KITCHEN_PRESS || []).slice().sort(function(a, b) {
        // Featured story leads, then newest first.
        if (!!a.featured !== !!b.featured) return a.featured ? -1 : 1;
        return new Date(b.date) - new Date(a.date);
      });
      if (items.length === 0) return; // section stays hidden

      function esc(s) { return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }
      function fmtDate(s) {
        var d = new Date(s + 'T12:00:00');
        return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      }

      grid.innerHTML = items.map(function(p) {
        var quote = p.excerpt
          ? '<blockquote class="press-quote">&ldquo;' + esc(p.excerpt) + '&rdquo;' +
            (p.speaker ? '<cite class="press-cite">&mdash; ' + esc(p.speaker) + '</cite>' : '') +
            '</blockquote>'
          : '';
        return '<li class="press-card reveal' + (p.featured ? ' press-card--featured' : '') + '">' +
          '<div class="press-meta">' +
            '<span class="press-outlet">' + esc(p.outlet) + '</span>' +
            '<span class="press-date">' + esc(fmtDate(p.date)) + '</span>' +
          '</div>' +
          '<h3 class="press-title">' +
            '<a href="' + esc(p.url) + '" target="_blank" rel="noopener noreferrer">' + esc(p.title) +
            '<span class="press-arrow" aria-hidden="true">&#8599;</span></a>' +
          '</h3>' +
          quote +
        '</li>';
      }).join('');
      section.hidden = false;
      section.style.display = '';
    })();
