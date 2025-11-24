export type EventItem= {
 title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time:string;
}

export const events: EventItem[] = [
  { 
    image: '/images/event1.png', 
    title: 'React Summit 2025',
    slug: 'react-summit-2025',
    location: 'Amsterdam, NL', 
    date: '14 maart 2025',
    time: '10:00 AM',
  },

  { 
    image: '/images/event2.png', 
    title: 'Next.js World Conference',
    slug: 'nextjs-world-2025',
    location: 'London, UK', 
    date: '2 april 2025',
    time: '09:30 AM',
  },

  { 
    image: '/images/event3.png', 
    title: 'Women in Tech Hackathon',
    slug: 'women-in-tech-hackathon-2025',
    location: 'Berlin, Germany', 
    date: '20 mei 2025',
    time: '12:00 PM',
  },

  { 
    image: '/images/event4.png', 
    title: 'AI & Machine Learning Expo',
    slug: 'ai-ml-expo-2025',
    location: 'San Francisco, USA', 
    date: '5 juni 2025',
    time: '11:00 AM',
  },

  { 
    image: '/images/event5.png', 
    title: 'Cloud Computing Conference',
    slug: 'cloud-conference-2025',
    location: 'Dubai, UAE', 
    date: '10 juli 2025',
    time: '02:00 PM',
  },

  { 
    image: '/images/event6.png', 
    title: 'Cybersecurity Bootcamp',
    slug: 'cybersecurity-bootcamp-2025',
    location: 'Paris, France', 
    date: '18 augustus 2025',
    time: '09:00 AM',
  },

  { 
    image: '/images/event-full.png', 
    title: 'Open Source Summit North America 2026',
    slug: 'oss-na-2026',
    location: 'Vancouver, Canada', 
    date: '12 oktober 2026',
    time: '09:00 AM',
  },
];
