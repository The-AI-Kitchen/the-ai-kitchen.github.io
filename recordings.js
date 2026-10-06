/* Enhance the static archive from the same session data used by the schedule. */
(function () {
  var grid = document.getElementById('recordings-grid');
  if (!grid) return;

  function esc(value) {
    return String(value == null ? '' : value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function card(session) {
    var date = new Date(session.date + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
    var presenters = session.name + (session.copresenter ? ' & ' + session.copresenter.name : '');
    var watchUrl = 'https://www.youtube.com/watch?v=' + encodeURIComponent(session.youtubeId);
    return '<article class="recording-card">' +
      '<a class="recording-thumbnail" href="' + esc(watchUrl) + '" target="_blank" rel="noopener noreferrer" aria-label="Watch recording: ' + esc(session.topic) + '">' +
        '<img src="https://i.ytimg.com/vi/' + encodeURIComponent(session.youtubeId) + '/hqdefault.jpg" alt="" width="480" height="360" loading="lazy">' +
        '<span class="recording-play" aria-hidden="true">▶</span>' +
      '</a>' +
      '<div class="recording-content">' +
        '<time datetime="' + esc(session.date) + '">' + esc(date) + '</time>' +
        '<h2>' + esc(session.topic) + '</h2>' +
        '<p class="recording-presenter">' + esc(presenters) + '</p>' +
        '<div class="recording-links">' +
          '<a class="recording-watch" href="' + esc(watchUrl) + '" target="_blank" rel="noopener noreferrer">Watch recording <span aria-hidden="true">↗</span></a>' +
          '<a href="' + esc(session.topicUrl) + '">Session materials <span aria-hidden="true">→</span></a>' +
        '</div>' +
      '</div>' +
    '</article>';
  }

  var sessions = [].concat(window.AI_KITCHEN_FALL_SESSIONS || [], window.AI_KITCHEN_SUMMER_SESSIONS || [], window.AI_KITCHEN_SESSIONS || [])
    .filter(function (session) { return session.youtubeId && session.topicUrl; })
    .sort(function (a, b) { return b.date.localeCompare(a.date); });
  if (sessions.length) grid.innerHTML = sessions.map(card).join('\n');
})();
