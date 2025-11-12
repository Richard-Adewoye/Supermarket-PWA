// blogMock.ts - Remove RecentPostData type entirely
export type FeaturedPostData = {
  tag: string;
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  readTime: string;
  date: string;
};

export const mockPosts: FeaturedPostData[] = [
  {
    tag: 'Career',
    id: 'p6',
    title: 'Breaking Into Product Design',
    excerpt: 'How to transition into a product design role in 2025.',
    image: '/images/blog/post-6.jpg',
    author: 'Rita Chukwu',
    readTime: '6 min',
    date: 'Oct 12, 2025',
  },
  {
    tag: 'Product',
    id: 'p7',
    title: 'Prototyping for Product Managers',
    excerpt: 'Fast ways PMs can prototype to validate assumptions.',
    image: '/images/blog/post-7.jpg',
    author: 'Simon Bello',
    readTime: '5 min',
    date: 'Oct 8, 2025',
  },
  {
    tag: 'Design',
    id: 'p8',
    title: 'Writing Design Docs That Dont Suck',
    excerpt: 'Structure, examples, and a tiny template to get started.',
    image: '/images/blog/post-8.jpg',
    author: 'Amina Yusuf',
    readTime: '8 min',
    date: 'Oct 4, 2025',
  },
  {
    tag: 'UX',
    id: 'p9',
    title: 'Building Inclusive Onboarding Flows',
    excerpt: 'How to make first-time experiences feel personal and helpful.',
    image: '/images/blog/post-9.jpg',
    author: 'Kelechi Okafor',
    readTime: '6 min',
    date: 'Oct 1, 2025',
  },
];

// Use the same FeaturedPostData type for recent posts
export const recentPosts: FeaturedPostData[] = [
  {
    tag: 'Accessibility',
    id: 'r1',
    title: 'Designing for Accessibility in 2025',
    excerpt: 'Why inclusive design isnt optional anymore — and how to actually implement it.',
    image: '/images/blog/recent-1.jpg',
    author: 'Ngozi Adedeji',
    readTime: '7 min',
    date: 'Nov 6, 2025',
  },
  {
    tag: 'Technology',
    id: 'r2',
    title: 'AI Tools That Will Define the Next Decade',
    excerpt: 'From co-designing with AI to automated user research — heres whats next.',
    image: '/images/blog/recent-2.jpg',
    author: 'David Ojo',
    readTime: '5 min',
    date: 'Nov 3, 2025',
  },
  {
    tag: 'Branding',
    id: 'r3',
    title: 'The Psychology of Minimalist Branding',
    excerpt: 'How simplicity builds stronger emotional connections with your audience.',
    image: '/images/blog/recent-3.jpg',
    author: 'Amara Okonkwo',
    readTime: '6 min',
    date: 'Oct 29, 2025',
  },
  {
    tag: 'Team',
    id: 'r4',
    title: 'Building Cross-Functional Design Teams',
    excerpt: 'How great companies align product, design, and engineering under one vision.',
    image: '/images/blog/recent-4.jpg',
    author: 'Tunde Adebayo',
    readTime: '8 min',
    date: 'Oct 25, 2025',
  },
  {
    tag: 'Design',
    id: 'r5',
    title: 'Mobile-First Design Principles',
    excerpt: 'Essential strategies for creating responsive experiences that work everywhere.',
    image: '/images/blog/recent-5.jpg',
    author: 'Chioma Nwosu',
    readTime: '6 min',
    date: 'Oct 20, 2025',
  },
  {
    tag: 'Product',
    id: 'r6',
    title: 'User Research on a Budget',
    excerpt: 'How to gather meaningful insights without breaking the bank.',
    image: '/images/blog/recent-6.jpg',
    author: 'Emeka Obi',
    readTime: '7 min',
    date: 'Oct 15, 2025',
  },
];