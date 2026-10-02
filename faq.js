/* Keep direct question links useful across the concise homepage and full FAQ. */
(function () {
  function openFromHash() {
    var id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch (e) { return; }
    var question = id && document.getElementById(id);
    if (question && question.tagName === 'DETAILS') {
      question.open = true;
      requestAnimationFrame(function () { question.scrollIntoView({ block: 'start' }); });
    }
  }
  openFromHash();
  window.addEventListener('hashchange', openFromHash);
  var copyStatus = document.getElementById('faq-copy-status');
  function announce(message) {
    if (!copyStatus) return;
    copyStatus.textContent = '';
    requestAnimationFrame(function () { copyStatus.textContent = message; });
  }
  document.querySelectorAll('.faq-link').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.stopPropagation();
      var question = link.closest('details');
      if (question) question.open = true;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(location.origin + location.pathname + link.getAttribute('href')).then(function () {
          var label = question && question.querySelector('.faq-question > span');
          announce('Link copied for: ' + (label ? label.textContent : 'this question'));
        }).catch(function () {
          announce('The link could not be copied. You can copy the page address instead.');
        });
      } else {
        announce('You can copy the page address to share this question.');
      }
    });
  });
})();
