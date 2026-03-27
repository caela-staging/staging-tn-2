import { Zap } from 'lucide-react';
import { TradePage, TradePageData } from '../TradePage';

const data: TradePageData = {
  trade: 'Electrical',
  slug: 'electrical',
  tagline: 'Coaching built for electricians ready to build a business that runs without them.',
  heroHeadline: ['Electrical', 'Coaching'],
  heroImg: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop',
  icon: Zap,
  overviewTitle: 'Electrical Companies That Grow Are Built Differently',
  overviewImg: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop',
  overviewBody: [
    'Electrical is a trust-driven trade. Homeowners invite electricians into their homes because safety matters — and that trust creates an enormous opportunity to build long-term relationships if you know how to handle it. Most electrical companies don\'t.',
    'At True North, we coach electrical companies to leverage that trust at every step: from how your CSRs answer the phone to how your electricians present panel upgrades and home safety evaluations on-site. We build the sales culture and operational infrastructure that turns one-time service calls into lifetime customers.',
    'From single-truck startups to multi-location operations, our coaching is built around the unique rhythms and revenue drivers of the electrical trade.',
  ],
  steps: [
    {
      number: '01',
      title: 'Current State Analysis',
      body: 'We assess your booking conversion, average ticket, technician performance, and business operations to create a clear picture of your growth ceiling and how to break through it.',
    },
    {
      number: '02',
      title: 'Electrical Business Roadmap',
      body: 'We design a coaching plan that addresses your specific revenue mix — residential service, panel upgrades, EV chargers, generators, and commercial — with trade-specific targets.',
    },
    {
      number: '03',
      title: 'Hands-On Partnership',
      body: 'We work with your team directly — call coaching, technician field training, and leadership development — to make the changes stick and the results last.',
    },
  ],
  before: [
    'Electricians completing the minimum requested job and walking out',
    'No home safety inspection process to uncover additional work',
    'CSRs struggling to convey value on premium electrical services',
    'Panel upgrade and generator sales left entirely to chance',
    'High variability in technician performance with no training system',
    'Owner as the primary technician with no path to scale',
  ],
  after: [
    'Electricians conducting thorough home safety inspections on every visit',
    'Systematic process for identifying and presenting panel and upgrade opportunities',
    'CSRs confidently booking premium services with clear value messaging',
    'Consistent panel upgrade and generator sales process across all techs',
    'Standardized technician training with measurable performance benchmarks',
    'Owner building a scalable operation with a capable leadership team',
  ],
  benefitsTitle: 'What Electrical Coaching Covers',
  benefitsBody:
    'Electrical has some of the highest average-ticket potential in the trades. Our coaching unlocks that potential by building the skills, systems, and culture your team needs to perform consistently — on every call, in every home.',
  benefits: [
    'Home safety inspection process that creates natural upsell opportunities',
    'Panel upgrade and generator sales framework for field technicians',
    'CSR scripting for premium electrical service conversations',
    'EV charger and smart home service line development',
    'Commercial electrical sales process coaching',
    'Technician onboarding and ongoing performance training systems',
    'Pricing strategy and flat-rate menu optimization',
    'Financial reporting and KPI dashboards for electrical companies',
  ],
  coaches: [
    {
      name: 'McKena Harless',
      role: 'Founder & Lead Coach',
      bio: 'McKena has worked with electrical companies across the country, helping owners build the sales culture, operational systems, and leadership teams needed to scale beyond their own labor. Her coaching philosophy centers on honest conversations, measurable goals, and accountability structures that actually work in the trades.',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    },
    {
      name: 'Marcus Johnson',
      role: 'Business Operations Coach',
      bio: 'Marcus specializes in building the operational backbone of growing electrical companies — dispatch systems, technician performance management, hiring pipelines, and financial reporting. He works with owners who are ready to stop running every decision through themselves and start building a business that runs on systems.',
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop',
    },
  ],
  ctaHeadline: 'Let\'s Talk About Your Electrical Business',
  ctaBody:
    'The electricians who build great businesses aren\'t just technically excellent — they\'re operationally sharp. Let\'s build that sharpness into every layer of your company.',
};

export function ElectricalPage() {
  return <TradePage data={data} />;
}
