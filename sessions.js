// AI Kitchen session data. Single source of truth for both the schedule page
// and the home-page spotlight. To update a session, edit this file and both
// pages will pick up the change. The recordings archive also uses this data.
// Add youtubeId only after a recording is available, then refresh its static
// HTML with: node scripts/build-recordings.mjs
window.AI_KITCHEN_SESSIONS = [
  {
    date: '2026-04-24',
    label: 'Apr 24',
    name: 'Kai Lukoff',
    title: 'Professor of Human-Computer Interaction, Santa Clara University',
    topic: 'Slide Deck Recipes with Claude Design',
    topicUrl: 'slide-recipes.html',
    youtubeId: 'rI36pT6fzkw',
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
    youtubeId: '7ue9g8IWmMg',
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
    youtubeId: '25oosZptkOc',
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
    youtubeId: 'G06usEhVS5w',
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
    youtubeId: '-WCGuJZ2gWs',
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
    youtubeId: 'Wb5wpjvbNwM',
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
    youtubeId: 'i55sVcSs23w',
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
// Student hosts come from the Fall 2026 sign-up sheet; profile links match
// the public leadership page. Omit studentHost until a week is claimed.
window.AI_KITCHEN_FALL_SESSIONS = [
  {
    date: '2026-09-25',
    label: 'Sep 25',
    studentHost: { name: 'Tiffany Le', url: 'https://www.linkedin.com/in/tiffle/' },
    name: 'Kai Lukoff',
    title: 'Professor of Human-Computer Interaction, Santa Clara University',
    topic: 'Interview Me First: Rebuilding My Website Live with AI',
    topicUrl: 'interview-me-first.html',
    youtubeId: 'TFI572seIT0',
    url: 'https://kailukoff.com/',
    photo: 'speakers/kai-lukoff.jpeg',
    initials: 'KL',
    note: '1:00\u20133:00 p.m.'
  },
  {
    date: '2026-10-02',
    label: 'Oct 2',
    studentHost: { name: 'Bridget Hestad', url: 'https://www.linkedin.com/in/bridget-hestad/' },
    name: 'Jeremy Kemp',
    title: 'Online and Hybrid Learning Specialist, Academic Technology, Santa Clara University',
    topic: 'Vibe Coding Canvas: Claude Cowork as a Recipe for Students and Teachers',
    topicUrl: 'https://theaikitchen.org/vibe-coding-canvas.html',
    youtubeId: 'O6OWtft8iOw',
    thumbnail: 'assets/design/vibe-coding-canvas-thumbnail.png',
    description: 'Use an Air Gap to work locally with a Camino data package, write a Policy as Code for your agent, and install an Agent designer to build teaching and learning content directly in Camino.',
    url: 'https://www.scu.edu/is/academic-technology/about-us/staff-profiles/kemp.html',
    photo: 'speakers/jeremy-kemp.jpeg',
    initials: 'JK',
    tools: ['Claude Cowork'],
    note: '1:00\u20134:00 p.m. \u00b7 soft finish'
  },
  {
    date: '2026-10-09',
    label: 'Oct 9',
    studentHost: { name: 'Sandy Cai', url: 'https://www.linkedin.com/in/sc098/' },
    name: 'Rishan Mohamed',
    title: 'Founder, HiringCoach.ai',
    topic: 'Building an AI Chief of Staff',
    topicUrl: 'https://hiringcoach.ai/talks/ai-kitchen',
    description: 'Build a personal AI chief of staff in ChatGPT with Rishan Mohamed. Design a morning briefing, connect approved information sources, and save reusable instructions for daily priorities, schedules, and relevant SCU events.',
    url: 'https://www.linkedin.com/in/rishanmohamed/',
    photo: 'speakers/rishan-mohamed.jpeg',
    initials: 'RM',
    note: '1:00\u20133:00 p.m.'
  },
  {
    date: '2026-10-16',
    label: 'Oct 16',
    studentHost: { name: 'Misa Truong', url: 'https://www.linkedin.com/in/misa-truong/' },
    name: 'David Coad',
    title: 'Assistant Teaching Professor of English, Santa Clara University',
    topic: 'Judgment Calls While Building a Keynote with AI',
    topicUrl: 'judgment-calls-keynote-ai.html',
    url: 'https://www.linkedin.com/in/davidcoad/',
    photo: 'speakers/david-coad.jpeg',
    initials: 'DC',
    tools: ['Perplexity', 'Claude'],
    note: '1:00\u20133:00 p.m.'
  },
  {
    date: '2026-10-23',
    label: 'Oct 23',
    studentHost: { name: 'Sandy Cai', url: 'https://www.linkedin.com/in/sc098/' },
    name: 'Dan Barahona',
    title: 'Founder, AI Security University',
    topic: 'Make Great Videos with Claude',
    description: 'Turn slides, recordings, and webinar replays into course videos and Instagram reels with Claude Code and HyperFrames. Try the workflow yourself while learning what to share with AI, which permissions to give it, and how to check its work.',
    topicUrl: 'make-great-videos-with-claude.html',
    url: 'https://www.linkedin.com/in/rdbarahona/',
    photo: 'speakers/dan-barahona.png',
    initials: 'DB',
    tools: ['Claude Code', 'HyperFrames'],
    note: '1:30\u20134:00 p.m. \u00b7 soft finish',
    timeChange: 'Special start time this week: 1:30 p.m., following Sherry Turkle. Dan\u2019s demo begins around 1:50 p.m.',
    roomChange: 'Sobrato Hall 024BC'
  },
  {
    date: '2026-10-30',
    label: 'Oct 30',
    studentHost: { name: 'Misa Truong', url: 'https://www.linkedin.com/in/misa-truong/' },
    name: 'AJ Gauravdeep',
    title: 'Interim Chief Marketing Officer, Joolian',
    // Session details are based on the guest outline.
    topic: 'AI for Family Activity Planning',
    topicUrl: 'ai-for-family-activity-planning.html',
    description: 'Explore how an AI activity planner uses family interests, calendars, and location to suggest activities and resolve scheduling conflicts, and how better context leads to more useful recommendations.',
    url: 'https://www.linkedin.com/in/ajdeep/',
    photo: 'speakers/aj-gauravdeep.jpeg',
    initials: 'AJ',
    note: '1:00\u20134:00 p.m. \u00b7 soft finish'
  },
  {
    date: '2026-11-06',
    label: 'Nov 6',
    studentHost: { name: 'Tripti Agrawal', url: 'https://www.linkedin.com/in/tripti-agrawal/' },
    name: 'Bani Malhotra',
    title: 'Founding Head of Product, Peggy',
    topic: 'Build a Family Travel Agent, No Terminal Required',
    url: 'https://www.linkedin.com/in/bani-malhotra-07615615/',
    photo: 'speakers/bani-malhotra.jpeg',
    initials: 'BM',
    tools: ['Claude'],
    note: '1:00\u20134:00 p.m. \u00b7 soft finish'
  },
  {
    date: '2026-11-13',
    label: 'Nov 13',
    studentHost: { name: 'Bridget Hestad', url: 'https://www.linkedin.com/in/bridget-hestad/' },
    name: 'Adam Smith',
    title: 'OpenAI \u00b7 CEO, Bear Valley National Ski Patrol',
    topic: 'Beyond the Prompt: Getting Real Work Done with AI Agents',
    description: 'See how Adam Smith collaborates with his AI assistant, Kepler, on volunteer leadership, community responsibilities, and home projects, then practice deciding what to delegate, verify, and handle yourself.',
    topicUrl: 'beyond-the-prompt.html',
    url: 'https://www.linkedin.com/in/a16h/',
    photo: 'speakers/adam-smith.jpeg',
    initials: 'AS',
    note: '1:00\u20133:00 p.m.'
  },
  {
    date: '2026-11-20',
    label: 'Nov 20',
    studentHost: { name: 'Linus Wong', url: 'https://www.linkedin.com/in/linus-e-wong/' },
    name: 'To be confirmed',
    tbd: true,
    note: '1:00\u20134:00 p.m. \u00b7 soft finish'
  },
  { date: '2026-11-27', label: 'Nov 27', cancelled: true, topic: 'No session \u00b7 Thanksgiving break' },
  {
    date: '2026-12-04',
    label: 'Dec 4',
    studentHost: { name: 'Alex Lee', url: 'https://www.linkedin.com/in/alee23/' },
    name: 'Aria Shi',
    title: 'SCU PhD Student; GTM Lead, AdaL',
    // Working title and summary based on the proposed workflow; final guest copy pending.
    topic: 'From Data to a Chart and Narrated Video with AI',
    description: 'Use AdaL Desktop to turn a small dataset into a visualization and a short narrated video, checking calculations and refining the explanation along the way. Full session details coming soon.',
    tools: ['AdaL Desktop'],
    initials: 'AS',
    note: '1:00\u20134:00 p.m. \u00b7 soft finish'
  }
];

// Winter Quarter 2027. Session rooms and final activities are still being set.
// Tentative sessions appear on the schedule with an explicit status, but are
// excluded from the home-page next-session spotlight until confirmed.
window.AI_KITCHEN_WINTER_SESSIONS = [
  {
    date: '2027-01-08',
    label: 'Jan 8',
    name: 'Shriya Garg',
    url: 'https://www.linkedin.com/in/gargshriya/',
    photo: 'speakers/shriya-garg.png',
    topic: 'Creating Your Personal AI Agent',
    subtitle: 'Everyday workflows with Instinct and Muse.',
    description: 'See how Shriya uses personal AI agents to support everyday tasks and get time back in her day. Explore her workflow with Instinct and Muse; the hands-on activity and preparation details will follow.',
    initials: 'SG',
    note: '1:00\u20133:00 p.m. Pacific',
    location: 'Room to be announced \u00b7 Santa Clara University'
  },
  {
    date: '2027-02-05',
    label: 'Feb 5',
    name: 'Rabindra \u201cRobby\u201d Ratan',
    url: 'https://www.linkedin.com/in/robbyratan/',
    photo: 'speakers/rabindra-ratan.jpeg',
    title: 'Professor, Michigan State University \u00b7 Visiting Scholar, Stanford University',
    topic: 'AI Avatars That Strengthen Human Connection',
    description: 'How can AI avatars and XR strengthen relationships between people? Explore ways to support human interconnectedness while preserving human values and agency. The session concept and hands-on activity are still being developed.',
    initials: 'RR',
    tentative: true,
    note: '1:00\u20133:00 p.m. Pacific',
    location: 'Room to be announced \u00b7 Santa Clara University'
  },
  {
    date: '2027-02-26',
    label: 'Feb 26',
    name: 'Danielle Heitmuller',
    title: 'Professor of Art and Art History, Santa Clara University',
    topic: 'AI in the Art Studio: Where It Helps and Where It Doesn\u2019t',
    url: 'https://www.scu.edu/cas/art/faculty-and-staff/danielle-heitmuller/',
    photo: 'speakers/danielle-heitmuller.jpeg',
    initials: 'DH',
    note: '1:00\u20133:00 p.m.',
    location: 'Room to be announced \u00b7 Santa Clara University'
  }
];
