import { Megaphone } from 'lucide-react';
import { CoachingSubPage, CoachingSubPageData } from './CoachingSubPage';

const data: CoachingSubPageData = {
  slug: 'marketing',
  category: 'Marketing Coaching',
  heroHeadline: ['Marketing', 'Coaching'],
  heroTagline: 'Stop guessing at marketing. Start investing in what actually drives calls.',
  heroImg: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2073&auto=format&fit=crop',
  metaDescription: 'True North marketing coaching helps home service companies build demand-generation strategies, optimize ad spend, and create brand consistency that drives consistent call volume year-round.',
  introTitle: 'Your Marketing Should Be Working as Hard as You Are.',
  introBody: [
    'Most home service companies spend on marketing without a strategy — boosting posts, running ads with no tracking, and changing direction every quarter based on gut feel. The result is unpredictable call volume, wasted budget, and no clear picture of what\'s actually working.',
    'True North marketing coaching helps you build a demand-generation strategy that\'s grounded in data, aligned to your trade\'s seasonal demand cycles, and designed to fill your board — not just generate impressions. We work directly with owners and marketing managers to build the campaigns, brand standards, and measurement systems that create consistent, profitable call volume.',
    'We don\'t run your marketing for you. We coach you to understand it, manage it, and make smart decisions with your budget — so you\'re never again at the mercy of a vendor who can\'t explain what they\'re doing or why.',
  ],
  introImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  introImgAlt: 'Marketing strategy session for a home service company',
  whatWeCover: [
    'Local SEO strategy: Google Business Profile optimization and map pack ranking',
    'Google LSA and paid search: structure, bidding, and conversion tracking',
    'Seasonal marketing calendars aligned to your trade\'s demand patterns',
    'Brand consistency: messaging, visual identity, and tone across all channels',
    'Review generation systems and reputation management',
    'Email and SMS marketing for existing customer retention',
    'Social media strategy for brand awareness and community trust',
    'Marketing budget allocation and ROI measurement frameworks',
    'Referral programs and neighborhood marketing tactics',
    'Marketing vendor management: how to hire, evaluate, and hold agencies accountable',
  ],
  coaches: [
    {
      name: 'McKena Harless',
      role: 'Founder & Marketing Strategy Coach',
      bio: [
        'McKena has helped dozens of home service companies untangle their marketing spend and build demand-generation systems that actually work. Her approach starts with one question: what does a booked job cost you, and how do we lower that number?',
        'From there, she builds marketing strategies that are trade-specific, seasonally calibrated, and measurable — so you always know where your calls are coming from and what they\'re worth. No more guessing, no more agency dependency, no more wasted budget.',
      ],
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    },
    {
      name: 'Rachel Torres',
      role: 'Digital Marketing & Brand Coach',
      bio: [
        'Rachel spent eight years managing digital marketing for home service brands before moving into coaching. She specializes in the full demand-generation stack — paid search, local SEO, reputation management, and the brand positioning that makes customers choose you over the competitor above you in the results.',
        'Her coaching is data-driven, jargon-free, and focused on the metrics that actually matter to a service business. Rachel makes marketing make sense — for owners who want to understand their numbers, not just hand them off and hope for the best.',
      ],
      img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1974&auto=format&fit=crop',
    },
  ],
  ctaHeadline: 'Ready to Make Every Marketing Dollar Count?',
  ctaBody: 'You shouldn\'t need a marketing degree to know if your campaigns are working. Let\'s build a strategy you understand, control, and can actually measure.',
  icon: Megaphone,
};

export function MarketingCoachingPage() {
  return <CoachingSubPage data={data} />;
}
