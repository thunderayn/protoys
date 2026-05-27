// ---------------------------------------------------------------------------
// Article data layer
// ---------------------------------------------------------------------------
// All article data flows through this file.
// To integrate Sanity CMS later:
//   1. Install @sanity/client + groq
//   2. Replace MOCK_ARTICLES with a Sanity fetch:
//      export async function fetchArticles(page, perPage, search, category)
//      using GROQ: *[_type == "post"] | order(publishedAt desc) { ... }
//   3. Update NewsListSection to call the async function (e.g. with useEffect)
// ---------------------------------------------------------------------------

export interface Article {
  _id: string
  slug: string
  /** Display label shown on the card, e.g. "COMPANY NEWS" */
  category: string
  /** URL-safe key used for filtering, e.g. "company-news" */
  categoryKey: string
  title: string
  excerpt: string
  /** ISO date string, e.g. "2024-05-15" */
  publishedAt: string
  /** Formatted for display, e.g. "May 15, 2024" */
  displayDate: string
  author: string
  mainImage: string
}

const BEAR   = 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1779272808/raccoon3_l74cyj.jpg'
const GROUP  = 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1779272808/raccoon2_qn55fi.jpg'
const PANDA  = 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1779272808/panda1_cat0ay.jpg'
const FACTORY1 = 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1779265055/factory1_pn5awr.png'
const FACTORY4 = 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1779265056/factory4_jrcxct.png'

export const ARTICLES_PER_PAGE = 6

export const MOCK_ARTICLES: Article[] = [
  {
    _id: '1',
    slug: 'pro-toys-attends-2024-hong-kong-toys-games-fair',
    category: 'COMPANY NEWS',
    categoryKey: 'company-news',
    title: 'Pro Toys Attends 2024 Hong Kong Toys & Games Fair',
    excerpt:
      'We are excited to announce that Pro Toys will be participating in the 2024 Hong Kong Toys & Games Fair.',
    publishedAt: '2024-05-15',
    displayDate: 'May 15, 2024',
    author: 'Pro Toys',
    mainImage: BEAR,
  },
  {
    _id: '2',
    slug: 'how-we-design-safe-and-loved-plush-toys',
    category: 'DESIGN & DEVELOPMENT',
    categoryKey: 'design-development',
    title: 'How We Design Safe and Loved Plush Toys',
    excerpt:
      'From concept to creation, discover our design process focused on safety, quality and creativity.',
    publishedAt: '2024-04-28',
    displayDate: 'Apr 28, 2024',
    author: 'Pro Toys',
    mainImage: FACTORY4,
  },
  {
    _id: '3',
    slug: 'choosing-the-best-materials-for-plush-toys',
    category: 'MATERIALS & QUALITY',
    categoryKey: 'materials-quality',
    title: 'Choosing the Best Materials for Plush Toys',
    excerpt:
      'We carefully select premium materials to ensure every plush toy is soft, durable and safe for all ages.',
    publishedAt: '2024-04-10',
    displayDate: 'Apr 10, 2024',
    author: 'Pro Toys',
    mainImage: GROUP,
  },
  {
    _id: '4',
    slug: 'inside-our-factory-quality-in-every-step',
    category: 'PRODUCTION',
    categoryKey: 'production',
    title: 'Inside Our Factory: Quality in Every Step',
    excerpt:
      'Take a look behind the scenes and see how our skilled team brings each plush toy to life.',
    publishedAt: '2024-03-22',
    displayDate: 'Mar 22, 2024',
    author: 'Pro Toys',
    mainImage: FACTORY1,
  },
  {
    _id: '5',
    slug: 'plush-toy-trends-2024-whats-popular',
    category: 'INDUSTRY INSIGHTS',
    categoryKey: 'industry-insights',
    title: "Plush Toy Trends in 2024: What's Popular?",
    excerpt:
      'Explore the latest trends in the plush toy industry and what children and parents love this year.',
    publishedAt: '2024-03-05',
    displayDate: 'Mar 05, 2024',
    author: 'Pro Toys',
    mainImage: GROUP,
  },
  {
    _id: '6',
    slug: 'our-commitment-to-safety-and-quality',
    category: 'QUALITY ASSURANCE',
    categoryKey: 'quality-assurance',
    title: 'Our Commitment to Safety and Quality',
    excerpt:
      'Safety is our top priority. Learn how we ensure every product meets international safety standards.',
    publishedAt: '2024-02-15',
    displayDate: 'Feb 15, 2024',
    author: 'Pro Toys',
    mainImage: FACTORY4,
  },
  {
    _id: '7',
    slug: 'spring-2024-new-collection-launch',
    category: 'COMPANY NEWS',
    categoryKey: 'company-news',
    title: 'New Collection Launch: Spring 2024 Plush Toys',
    excerpt:
      'Discover our newest Spring 2024 collection featuring fresh designs, vibrant colors and premium materials.',
    publishedAt: '2024-02-01',
    displayDate: 'Feb 01, 2024',
    author: 'Pro Toys',
    mainImage: BEAR,
  },
  {
    _id: '8',
    slug: 'oem-odm-success-story-custom-plush-toys',
    category: 'DESIGN & DEVELOPMENT',
    categoryKey: 'design-development',
    title: 'OEM/ODM Success Story: Custom Plush Toys for Leading Brands',
    excerpt:
      'Learn how we helped global brands bring their custom plush toy concepts to life with our OEM/ODM service.',
    publishedAt: '2024-01-20',
    displayDate: 'Jan 20, 2024',
    author: 'Pro Toys',
    mainImage: PANDA,
  },
  {
    _id: '9',
    slug: 'behind-the-scenes-custom-design-process',
    category: 'PRODUCTION',
    categoryKey: 'production',
    title: 'Behind the Scenes: How We Create Custom Designs',
    excerpt:
      'A step-by-step look at our custom design workflow, from initial sketch to final production sample.',
    publishedAt: '2024-01-08',
    displayDate: 'Jan 08, 2024',
    author: 'Pro Toys',
    mainImage: FACTORY4,
  },
  {
    _id: '10',
    slug: 'global-shipping-logistics-wholesale-orders',
    category: 'INDUSTRY INSIGHTS',
    categoryKey: 'industry-insights',
    title: 'Global Shipping & Logistics for Wholesale Orders',
    excerpt:
      'How Pro Toys ensures on-time delivery to customers worldwide with reliable logistics partnerships.',
    publishedAt: '2023-12-18',
    displayDate: 'Dec 18, 2023',
    author: 'Pro Toys',
    mainImage: FACTORY1,
  },
  {
    _id: '11',
    slug: 'meet-the-team-designers-and-craftspeople',
    category: 'COMPANY NEWS',
    categoryKey: 'company-news',
    title: 'Meet the Team: Our Designers and Craftspeople',
    excerpt:
      'Get to know the talented people behind every Pro Toys creation — from lead designers to master seamstresses.',
    publishedAt: '2023-12-05',
    displayDate: 'Dec 05, 2023',
    author: 'Pro Toys',
    mainImage: GROUP,
  },
  {
    _id: '12',
    slug: 'sustainability-in-toy-manufacturing',
    category: 'MATERIALS & QUALITY',
    categoryKey: 'materials-quality',
    title: 'Sustainability in Toy Manufacturing: Our Approach',
    excerpt:
      'Discover how Pro Toys is working to reduce environmental impact through sustainable materials and production.',
    publishedAt: '2023-11-20',
    displayDate: 'Nov 20, 2023',
    author: 'Pro Toys',
    mainImage: PANDA,
  },
]
