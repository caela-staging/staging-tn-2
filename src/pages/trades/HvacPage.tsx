import { Wind } from 'lucide-react';
import { TradePage, TradePageData } from '../TradePage';

const data: TradePageData = {
  trade: 'HVAC',
  slug: 'hvac',
  tagline: 'Coaching built for heating, cooling, and the people who keep homes comfortable.',
  heroHeadline: ['HVAC', 'Coaching'],
  heroImg: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop',
  icon: Wind,
  overviewTitle: 'HVAC Companies Deserve Better Than Generic Coaching',
  overviewImg: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop',
  overviewBody: [
    'The HVAC industry operates in peaks and valleys — scorching summers, freezing winters, and slow shoulder seasons that can wreck your cash flow if you\'re not prepared. Generic business coaching doesn\'t account for any of that.',
    'True North works exclusively with HVAC companies. We understand your dispatch windows, your service agreement conversion rates, your seasonal hiring challenges, and the pressure your CSRs face when call volume spikes. Our coaches have been in this business — and they build plans that reflect how HVAC actually works.',
    'Whether you\'re a single-truck owner-operator looking to scale or a multi-location operation trying to sharpen your margins, we have a coaching track designed for exactly where you are.',
  ],
  steps: [
    {
      number: '01',
      title: 'Business Assessment',
      body: 'We dig into your current numbers — booking rates, close rates, average tickets, and seasonal patterns — to identify where you\'re leaving money on the table.',
    },
    {
      number: '02',
      title: 'Custom HVAC Plan',
      body: 'We build a coaching roadmap around your specific mix of residential, commercial, installation, and service revenue — with milestones tied to real HVAC KPIs.',
    },
    {
      number: '03',
      title: 'Execution & Accountability',
      body: 'Weekly coaching sessions, call reviews, technician ride-alongs, and leadership check-ins keep your team moving toward the targets we set together.',
    },
  ],
  before: [
    'CSRs booking jobs at 40–50% when they should be hitting 80%+',
    'Technicians leaving money on the table by not presenting full options',
    'Shoulder season cash flow crunches with no plan to offset them',
    'High employee turnover eating into margins and morale',
    'No service agreement program driving recurring revenue',
    'Owner stuck in the business instead of working on it',
  ],
  after: [
    'CSR booking rates consistently above 80% with proven call scripts',
    'Technicians confidently presenting good-better-best options on every visit',
    'Seasonal revenue strategies that smooth out cash flow year-round',
    'Lower turnover through better onboarding and culture systems',
    'Active service agreement program building a stable revenue base',
    'Owner focused on growth while the business runs the day-to-day',
  ],
  benefitsTitle: 'What HVAC Coaching Covers',
  benefitsBody:
    'Every HVAC coaching engagement is built around the full revenue cycle — from the first phone call to the service agreement renewal. We coach every role that touches your customer experience.',
  benefits: [
    'CSR training: inbound call handling, booking scripts, and escalation protocols',
    'Technician sales coaching: options presentation, agreement sales, and trust-building',
    'Service agreement program design and conversion rate optimization',
    'Seasonal marketing calendar aligned to your trade\'s demand cycles',
    'Dispatch efficiency and call capacity planning',
    'Owner and GM leadership development',
    'Hiring systems to attract and retain top-tier HVAC talent',
    'Financial KPI dashboards built around HVAC industry benchmarks',
  ],
  coaches: [
    {
      name: 'McKena Harless',
      role: 'Founder & Lead HVAC Coach',
      bio: 'McKena built her coaching methodology inside real HVAC companies over more than a decade. She\'s helped dozens of owner-operators transition from doing the work to running a business — with a focus on building teams, systems, and cultures that actually hold up under pressure. Her approach is direct, honest, and grounded in what actually works in the trades.',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    },
    {
      name: 'David Chen',
      role: 'HVAC Sales & CSR Coach',
      bio: 'David spent years on the front lines of HVAC customer experience — from the dispatch board to the sales floor. He brings a practical, no-nonsense approach to CSR coaching and technician sales training, with a track record of driving measurable booking and conversion improvements in residential and commercial HVAC operations.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    },
  ],
  ctaHeadline: 'Ready to Build a Better HVAC Business?',
  ctaBody:
    'Stop leaving revenue on the table every call, every visit, every season. Let\'s talk about what\'s holding your HVAC company back and build a plan to fix it.',
};

export function HvacPage() {
  return <TradePage data={data} />;
}
