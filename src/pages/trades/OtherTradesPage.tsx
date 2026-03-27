import { Wrench } from 'lucide-react';
import { TradePage, TradePageData } from '../TradePage';

const data: TradePageData = {
  trade: 'Other Trades',
  slug: 'other-trades',
  tagline: 'If you serve homeowners, we serve you — regardless of your trade.',
  heroHeadline: ['Your Trade,', 'Our Coaching'],
  heroImg: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop',
  icon: Wrench,
  overviewTitle: 'Home Service Is Home Service — We Adapt to Your Trade',
  overviewImg: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop',
  overviewBody: [
    'True North\'s core expertise is in HVAC, plumbing, electrical, and garage doors — but our coaching principles apply across every trade that serves homeowners. Whether you\'re in roofing, pest control, insulation, restoration, landscaping, or another home service vertical, the fundamentals are the same: better CSR conversion, stronger in-home sales, operational efficiency, and owner-level leadership.',
    'We\'ve worked with dozens of trades businesses outside our core four specialties. In every case, the same gaps appear — low booking rates, technicians not presenting options, owners trapped in day-to-day operations, and no systems to support scale.',
    'If you\'re serious about building a better home service business, we\'ll adapt our coaching frameworks to your specific trade, your specific team, and your specific market.',
  ],
  steps: [
    {
      number: '01',
      title: 'Trade Discovery',
      body: 'We start by learning your business deeply — your trade, your customer base, your revenue model, and the specific challenges that make your industry unique.',
    },
    {
      number: '02',
      title: 'Adapted Coaching Plan',
      body: 'We take our proven home service frameworks and tailor them to your trade — building a roadmap with milestones that make sense for how your business actually works.',
    },
    {
      number: '03',
      title: 'Partnership & Progress',
      body: 'Regular coaching sessions, team training, and accountability structures keep you moving forward — with adjustments made in real time as your business evolves.',
    },
  ],
  before: [
    'Relying on referrals and seasonality without a repeatable growth system',
    'Customer experience that\'s inconsistent from technician to technician',
    'No formal sales process — jobs are won or lost by chance',
    'Owner doing the work of five people with no delegation system',
    'Revenue growth stalling because the business can\'t scale past the owner',
    'No way to measure what\'s working and what isn\'t',
  ],
  after: [
    'A repeatable lead conversion system that works regardless of season',
    'Consistent customer experience driven by scripts and training',
    'A defined in-home sales process with measurable conversion rates',
    'Owner operating in their zone of genius with a capable team beneath them',
    'Systems and structure that allow the business to scale beyond its people',
    'Clear KPIs and dashboards that show exactly where the business stands',
  ],
  benefitsTitle: 'What Our Coaching Adapts To Your Trade',
  benefitsBody:
    'Every home service company shares more than it differs. Our coaching addresses the universal growth levers — customer conversion, technician sales, operational efficiency, and leadership — adapted to the specific language, rhythm, and expectations of your trade.',
  benefits: [
    'CSR training adapted to your specific service type and customer profile',
    'In-home sales process development for your trade\'s unique sales cycle',
    'Technician performance coaching tailored to your service delivery model',
    'Pricing strategy and flat-rate menu design for your trade',
    'Operational systems to support growth without chaos',
    'Hiring and onboarding frameworks for your labor market',
    'Owner and leadership development regardless of trade category',
    'KPI framework built around metrics that matter in your specific industry',
  ],
  coaches: [
    {
      name: 'McKena Harless',
      role: 'Founder & Lead Coach',
      bio: 'McKena has spent over a decade inside home service businesses of all types — and she\'s learned that the best coaching transcends any single trade. Her ability to quickly understand a new business, identify its leverage points, and build a practical plan is what sets True North apart from coaches who only know one vertical.',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    },
    {
      name: 'Marcus Johnson',
      role: 'Business Operations Coach',
      bio: 'Marcus has built operational systems for home service companies across a wide range of trades. His focus is on the universal infrastructure that every growing service business needs: dispatch efficiency, hiring pipelines, performance management, and financial reporting. He works with business owners who are ready to build a company, not just a job.',
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop',
    },
  ],
  ctaHeadline: 'Your Trade Is Our Next Challenge',
  ctaBody:
    'We\'ve helped home service businesses grow across dozens of trades. Tell us about yours and let\'s figure out where the biggest opportunities are hiding.',
};

export function OtherTradesPage() {
  return <TradePage data={data} />;
}
