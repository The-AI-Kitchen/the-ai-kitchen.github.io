/* Claim deadlines are Pacific dates. Existing subscriptions keep their own terms. */
(() => {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Los_Angeles', year: 'numeric', month: '2-digit', day: '2-digit'
  }).formatToParts(new Date());
  const date = Object.fromEntries(parts.map(part => [part.type, part.value]));
  const today = `${date.year}-${date.month}-${date.day}`;

  document.querySelectorAll('[data-offer-expires]').forEach(offer => {
    if (today > offer.dataset.offerExpires) offer.hidden = true;
  });
})();
