// AI Kitchen news and announcements. Shown in the "Latest News" section on
// index.html, sorted newest first. To add an item, copy one of the objects
// below and edit the fields. To make an item auto-hide after a certain date,
// set "expires" to YYYY-MM-DD (the item stays visible through that whole day).
// Optional "summary" is the listing teaser. Each item has one preview "image".
// "url" links the headline and image to a story; use "external" for press links.
// Give an item an "id" to link directly to it with news.html#the-id.
window.AI_KITCHEN_NEWS = [
  {
    id: 'atxpo-2026',
    date: '2026-10-08',
    headline: 'AI Kitchen gives a plenary talk at Stanford\'s ATXpo',
    url: 'atxpo-2026.html',
    summary: 'Tiffany Le and Kai Lukoff shared AI Kitchen\'s approach to hands-on AI learning at Stanford University on October 5. <a href="atxpo-2026.html">Read the update and see photos</a>.',
    image: { src: 'assets/news/atxpo-2026/plenary.webp', width: 1600, height: 834, alt: 'Tiffany Le and Kai Lukoff give the AI Kitchen plenary talk at Stanford University.' }
  },
  {
    date: '2026-09-18',
    headline: 'AI Kitchen returns Friday, September 25',
    url: 'schedule.html',
    image: { src: 'assets/news/fall-2026.webp', width: 1000, height: 750, alt: 'Participants gather at tables for the September 25 AI Kitchen session in Benson.' },
    body: 'Fall quarter opens with <a href="https://kailukoff.com/" target="_blank" rel="noopener noreferrer">Kai Lukoff</a> on <i>Interview Me First: Rebuilding My Website Live with AI</i>. Fridays at 1:00 p.m. in Benson 036, the California Mission Room. <a href="schedule.html">See the fall schedule</a>.'
  },
  {
    date: '2026-06-30',
    headline: 'Featured in Inside Higher Ed',
    url: 'https://www.insidehighered.com/news/student-success/college-experience/2026/06/30/inside-universitys-ai-kitchen',
    external: true,
    image: { src: 'assets/news/inside-higher-ed.svg', width: 405, height: 200, alt: 'Inside Higher Ed', kind: 'logo', dark: true },
    body: 'Inside Higher Ed published a feature on AI Kitchen: <a href="https://www.insidehighered.com/news/student-success/college-experience/2026/06/30/inside-universitys-ai-kitchen" target="_blank" rel="noopener noreferrer"><i>Inside a University\'s &lsquo;AI Kitchen&rsquo;</i></a>.'
  },
  {
    date: '2026-06-05',
    headline: 'AI Demo Night: see the winners',
    url: 'demo-night-recap.html',
    image: { src: 'assets/news/demo-night-2026.webp', width: 1000, height: 541, alt: 'AI Demo Night award winners gather for a group photo.' },
    body: 'Fifteen student teams showed a full quarter of work at AI Demo Night. <a href="demo-night-recap.html">See the recap and the award winners</a>.'
  },
  {
    date: '2026-05-08',
    headline: 'Featured in SCU News',
    url: 'https://www.scu.edu/news-and-events/feature-stories/2026/stories/not-sure-where-you-fit-into-a-future-driven-by-ai-this-kitchen-will-give-you-a-first-taste.html',
    external: true,
    image: { src: 'assets/news/scu-logo.png', width: 800, height: 308, alt: 'Santa Clara University', kind: 'logo' },
    body: 'SCU News published a feature on AI Kitchen: <a href="https://www.scu.edu/news-and-events/feature-stories/2026/stories/not-sure-where-you-fit-into-a-future-driven-by-ai-this-kitchen-will-give-you-a-first-taste.html" target="_blank" rel="noopener noreferrer"><i>Not Sure Where You Fit Into a Future Driven by AI? This Kitchen Will Give You a First Taste</i></a>.'
  },
  {
    date: '2026-04-22',
    headline: 'Launching Friday, April 24',
    url: 'schedule.html',
    image: { src: 'assets/design/ai-kitchen-mark.svg', width: 80, height: 88, alt: 'AI Kitchen', kind: 'logo' },
    body: 'Our first Taste Test kicks off this Friday at 1:30 p.m. in Lucas 306. Come cook with us!',
    expires: '2026-04-24'
  },
  {
    date: '2026-04-20',
    headline: 'Funded by the Regents Experiential Learning Initiative',
    url: 'https://www.scu.edu/aboutscu/leadership/board-of-regents/regents-experiential-learning-initiative-reli/',
    external: true,
    image: { src: 'assets/news/scu-logo.png', width: 800, height: 308, alt: 'Santa Clara University', kind: 'logo' },
    body: 'We\'re grateful to the <a href="https://www.scu.edu/aboutscu/leadership/board-of-regents/regents-experiential-learning-initiative-reli/" target="_blank" rel="noopener noreferrer">Regents Experiential Learning Initiative (RELI)</a> for the support that makes this program possible. We\'re also excited to welcome SCU Regents as mentors and guest speakers in the kitchen!'
  }
];
