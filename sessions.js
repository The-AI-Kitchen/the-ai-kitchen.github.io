// AI Kitchen session data. Single source of truth for both the schedule page
// and the home-page spotlight. To update a session, edit this file and both
// pages will pick up the change.
window.AI_KITCHEN_SESSIONS = [
  {
    date: '2026-04-24',
    label: 'Apr 24',
    name: 'Kai Lukoff',
    title: 'Professor of Human-Computer Interaction, Santa Clara University',
    topic: 'Slide Deck Recipes with Claude Design',
    topicUrl: 'slide-recipes.html',
    url: 'https://kailukoff.com/',
    photo: 'speakers/kai-lukoff.jpeg',
    initials: 'KL',
    tools: ['Claude Pro', 'Claude Design']
  },
  {
    date: '2026-05-01',
    label: 'May 1',
    name: 'Luis Sarmenta',
    title: 'Software Engineer \u00b7 MIT PhD EECS',
    topic: 'How to Think Like an Engineer (Building a Game with AI)',
    topicUrl: 'think-like-an-engineer.html',
    url: 'https://www.linkedin.com/in/ACoAAAKXFzwByxtFT4agESe5Vbpyk1T6nGMkkbw',
    photo: 'speakers/luis-sarmenta.jpeg',
    initials: 'LS',
    tools: ['Claude']
  },
  {
    date: '2026-05-08',
    label: 'May 8',
    name: 'Cameron Behar',
    title: 'CTO & Co-founder, Sprinter Health',
    topic: 'Ralph Loops for Movie Recommendations',
    topicUrl: 'ralph-loops-movies.html',
    url: 'https://www.linkedin.com/in/cameron-behar/',
    photo: 'speakers/cameron-behar.jpeg',
    initials: 'CB',
    tools: ['Cursor', 'Claude']
  },
  {
    date: '2026-05-15',
    label: 'May 15',
    name: 'Neo Zhang',
    title: 'MSx Candidate, Stanford GSB',
    topic: 'AI Workflows for Real-World Conversations',
    topicUrl: 'conversational-workflows.html',
    url: 'https://www.linkedin.com/in/neozhang/',
    photo: 'speakers/neo-zhang.jpeg',
    initials: 'NZ',
    tools: ['Gemini', 'AI Studio']
  },
  {
    date: '2026-05-22',
    label: 'May 22',
    name: 'Zachary Schendel',
    title: 'Head of Research, Google DeepMind',
    topic: 'From Reviews to Insights: AI-Assisted UX Research',
    topicUrl: 'reviews-to-insights.html',
    url: 'https://www.linkedin.com/in/zachary-schendel-38353157/',
    photo: 'speakers/zachary-schendel.jpeg',
    initials: 'ZS',
    tools: ['Cursor Pro']
  },
  {
    date: '2026-05-29',
    label: 'May 29',
    name: 'Sanjiv Das',
    title: 'Professor of Finance, Santa Clara University',
    topic: 'Jupyter AI for Research',
    topicUrl: 'jupyter-ai-research.html',
    url: 'https://www.linkedin.com/in/sanjivd/',
    photo: 'speakers/sanjiv-das.jpeg',
    initials: 'SD',
    copresenter: {
      name: 'David Qiu',
      title: 'Creator & Lead Maintainer, Jupyter AI',
      url: 'https://www.linkedin.com/in/dlq/',
      photo: 'speakers/david-qiu.jpeg',
      initials: 'DQ'
    },
    tools: ['Jupyter AI']
  },
  {
    date: '2026-06-05',
    label: 'Jun 5',
    name: 'AI Kitchen Demo Night',
    title: '5:30\u20137:30 p.m. \u00b7 SCDI North Lobby \u00b7 Open to the public',
    topic: 'Students from across SCU showcase their AI projects. Gallery-style demos, lightning pitches, and food.',
    topicUrl: 'demo-night.html',
    featured: true,
    emoji: '\uD83C\uDF73'
  }
];

// Summer Test Kitchen sessions — smaller, workshop-style format.
window.AI_KITCHEN_SUMMER_SESSIONS = [
  {
    date: '2026-06-18',
    label: 'Jun 18',
    name: 'Xiaohan Liu',
    title: 'Autonomy Systems Engineer, DiDi Global',
    topic: 'OpenClaw for Work',
    topicUrl: 'openclaw-for-work.html',
    url: 'https://www.linkedin.com/in/xiaohan-liu-5b3914110/',
    photo: 'speakers/xiaohan-liu.jpeg',
    initials: 'XL'
  },
  {
    date: '2026-06-25',
    label: 'Jun 25',
    name: 'Sherrie Cao',
    title: 'Senior Product Manager, Electronic Arts (EA)',
    topic: 'Build a Game in an Afternoon',
    topicUrl: 'build-a-game-in-an-afternoon.html',
    url: 'https://www.linkedin.com/in/sherriecao/',
    photo: 'speakers/sherrie-cao.jpeg',
    initials: 'SC',
    tools: ['Claude Code']
  },
  {
    date: '2026-07-02',
    label: 'Jul 2',
    topic: 'Session cancelled',
    cancelled: true
  }
];

// Fall Quarter 2026 sessions. Fridays at 1:00 p.m., Benson Memorial Center 036
// (California Mission Room). A one-off room change sets "roomChange", which
// renders as an alert on that card rather than in the quarter intro.
// "Soft finish" dates wrap around 4:00 p.m. with open project time after;
// the others end at 3:00 p.m. sharp so the room can turn over.
window.AI_KITCHEN_FALL_SESSIONS = [
  {
    date: '2026-09-25',
    label: 'Sep 25',
    name: 'Kai Lukoff',
    title: 'Professor of Human-Computer Interaction, Santa Clara University',
    topic: 'Interview Me First: Rebuilding My Website Live with AI',
    tools: ['Claude', 'Claude Code'],
    url: 'https://kailukoff.com/',
    photo: 'speakers/kai-lukoff.jpeg',
    initials: 'KL',
    note: '1:00\u20133:00 p.m.',
    flex: 'Date open to a guest chef: Kai will move to a later Friday'
  },
  {
    date: '2026-10-02',
    label: 'Oct 2',
    name: 'Jeremy Kemp',
    title: 'Online and Hybrid Learning Specialist, Academic Technology, Santa Clara University',
    topic: 'Vibe Coding Camino: Claude Cowork as a Recipe for Students and Teachers',
    url: 'https://www.scu.edu/is/academic-technology/about-us/staff-profiles/kemp.html',
    photo: 'speakers/jeremy-kemp.jpeg',
    initials: 'JK',
    tools: ['Claude Cowork'],
    note: '1:00\u20134:00 p.m. \u00b7 soft finish'
  },
  {
    date: '2026-10-09',
    label: 'Oct 9',
    name: 'Rishan Mohamed',
    title: 'Founder, HiringCoach.ai',
    topic: 'Building an AI Chief of Staff',
    url: 'https://www.linkedin.com/in/rishanmohamed/',
    photo: 'speakers/rishan-mohamed.jpeg',
    initials: 'RM',
    note: '1:00\u20133:00 p.m.'
  },
  {
    date: '2026-10-16',
    label: 'Oct 16',
    name: 'David Coad',
    title: 'Professor of English, Santa Clara University',
    topic: 'Judgment Calls While Building a Keynote with AI',
    url: 'https://www.linkedin.com/in/davidcoad/',
    photo: 'speakers/david-coad.jpeg',
    initials: 'DC',
    tools: ['Perplexity', 'Claude'],
    note: '1:00\u20133:00 p.m.'
  },
  { date: '2026-10-23', label: 'Oct 23', tbd: true, name: 'Speaker to be announced', note: '1:00\u20134:00 p.m. \u00b7 soft finish', roomChange: 'Sobrato Hall 024BC' },
  { date: '2026-10-30', label: 'Oct 30', tbd: true, name: 'Speaker to be announced', note: '1:00\u20134:00 p.m. \u00b7 soft finish' },
  {
    date: '2026-11-06',
    label: 'Nov 6',
    name: 'Bani Malhotra',
    title: 'Founding Head of Product, Peggy',
    topic: 'Build a Family Travel Agent, No Terminal Required',
    url: 'https://www.linkedin.com/in/bani-malhotra-07615615/',
    photo: 'speakers/bani-malhotra.jpeg',
    initials: 'BM',
    tools: ['Claude'],
    note: '1:00\u20134:00 p.m. \u00b7 soft finish'
  },
  { date: '2026-11-13', label: 'Nov 13', tbd: true, name: 'Speaker to be announced', note: '1:00\u20133:00 p.m.' },
  {
    date: '2026-11-20',
    label: 'Nov 20',
    name: 'Danielle Heitmuller',
    title: 'Professor of Art and Art History, Santa Clara University',
    topic: 'AI in the Art Studio: Where It Helps and Where It Doesn\u2019t',
    url: 'https://www.scu.edu/cas/art/faculty-and-staff/danielle-heitmuller/',
    photo: 'speakers/danielle-heitmuller.jpeg',
    initials: 'DH',
    note: '1:00\u20134:00 p.m. \u00b7 soft finish'
  },
  { date: '2026-11-27', label: 'Nov 27', cancelled: true, topic: 'No session \u00b7 Thanksgiving break' },
  { date: '2026-12-04', label: 'Dec 4', tbd: true, name: 'Speaker to be announced', note: '1:00\u20134:00 p.m. \u00b7 soft finish' }
];
