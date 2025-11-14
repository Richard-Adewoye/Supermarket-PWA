// blogMock.ts
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
    tag: 'Tips',
    id: 'p6',
    title: 'How to Save Money While Grocery Shopping',
    excerpt: 'Proven strategies to reduce your weekly supermarket bill without sacrificing quality.',
    image: '/images/bg-4.jpg',
    author: 'Rita Chukwu',
    readTime: '5 min',
    date: 'Nov 10, 2025',
  },
  {
    tag: 'Product',
    id: 'p7',
    title: 'Top 10 Must-Have Pantry Essentials',
    excerpt: 'A guide to stocking your kitchen with items that make meal prep fast and easy.',
    image: '/images/bgp-2.jfif',
    author: 'Simon Bello',
    readTime: '4 min',
    date: 'Nov 8, 2025',
  },
  {
    tag: 'Nutrition',
    id: 'p8',
    title: 'Choosing Healthy Snacks for the Family',
    excerpt: 'Tips on picking snacks that are tasty but also nutritious for kids and adults.',
    image: '/images/blog/post-8.jpg',
    author: 'Amina Yusuf',
    readTime: '6 min',
    date: 'Nov 5, 2025',
  },
  {
    tag: 'Lifestyle',
    id: 'p9',
    title: 'Meal Planning Tips to Reduce Food Waste',
    excerpt: 'How planning your weekly meals can save money and keep your fridge organized.',
    image: '/images/blog/post-9.jpg',
    author: 'Kelechi Okafor',
    readTime: '5 min',
    date: 'Nov 2, 2025',
  },
];

// Use the same FeaturedPostData type for recent posts
export const recentPosts: FeaturedPostData[] = [
  {
    tag: 'Deals',
    id: 'r1',
    title: 'Best Weekly Supermarket Deals You Can’t Miss',
    excerpt: 'Check out the top discounted items this week to get the most value for your money.',
    image: '/images/bg-2.jpg',
    author: 'Ngozi Adedeji',
    readTime: '4 min',
    date: 'Nov 6, 2025',
  },
  {
    tag: 'Guides',
    id: 'r2',
    title: 'How to Read Food Labels Effectively',
    excerpt: 'Understand what’s really in your groceries and make healthier choices.',
    image: '/images/bg-3.jpg',
    author: 'David Ojo',
    readTime: '5 min',
    date: 'Nov 3, 2025',
  },
  {
    tag: 'Tips',
    id: 'r3',
    title: 'Smart Ways to Store Fresh Produce',
    excerpt: 'Keep your fruits and vegetables fresher for longer with these simple storage hacks.',
    image: '/images/bg-4.jpg',
    author: 'Amara Okonkwo',
    readTime: '4 min',
    date: 'Oct 29, 2025',
  },
  {
    tag: 'Recipes',
    id: 'r4',
    title: 'Quick Meals Using Common Supermarket Staples',
    excerpt: 'Easy, fast recipes that turn everyday grocery items into delicious meals.',
    image: '/images/bg-5.jpg',
    author: 'Tunde Adebayo',
    readTime: '6 min',
    date: 'Oct 25, 2025',
  },
  {
    tag: 'Lifestyle',
    id: 'r5',
    title: 'Eco-Friendly Shopping Habits',
    excerpt: 'Simple changes you can make to reduce plastic waste and shop sustainably.',
    image: '/images/bg-2.jpg',
    author: 'Chioma Nwosu',
    readTime: '5 min',
    date: 'Oct 20, 2025',
  },
  {
    tag: 'Nutrition',
    id: 'r6',
    title: 'Top 5 Healthy Beverages at the Supermarket',
    excerpt: 'A quick guide to choosing drinks that are tasty, refreshing, and low in sugar.',
    image: '/images/bg-1.jpg',
    author: 'Emeka Obi',
    readTime: '4 min',
    date: 'Oct 15, 2025',
  },
];
