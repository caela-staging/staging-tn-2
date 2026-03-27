import { DoorOpen } from 'lucide-react';
import { TradePage, TradePageData } from '../TradePage';

const data: TradePageData = {
  trade: 'Garage Doors',
  slug: 'garage-doors',
  tagline: 'Coaching built for garage door companies with big volume and bigger opportunity.',
  heroHeadline: ['Garage Door', 'Coaching'],
  heroImg: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop',
  icon: DoorOpen,
  overviewTitle: 'High Volume. High Frequency. High Opportunity.',
  overviewImg: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop',
  overviewBody: [
    'The garage door industry runs on volume — and that high call frequency creates an enormous opportunity that most companies fail to fully capture. When a homeowner calls for a broken spring, that\'s not just a $200 repair. That\'s a relationship waiting to happen, an upgrade conversation to be had, and a referral network to be built.',
    'True North coaches garage door companies to extract the full value from every call — through better CSR conversion, stronger technician presentation skills, and operational systems that let you scale without losing quality.',
    'Whether you\'re running a lean two-truck operation or managing a fleet across multiple territories, we build the structure and skills that turn your call volume into compounding revenue.',
  ],
  steps: [
    {
      number: '01',
      title: 'Volume & Conversion Audit',
      body: 'We analyze your call volume, booking rates, and average revenue per call to identify where the biggest revenue gaps exist in your current operation.',
    },
    {
      number: '02',
      title: 'Garage Door Growth Plan',
      body: 'We design a coaching program around your specific service mix — spring repair, opener replacement, full door installation, and commercial — with clear conversion targets for each.',
    },
    {
      number: '03',
      title: 'Team Coaching & Systems',
      body: 'We coach your CSRs on booking and upsell scripts, train your technicians on presenting upgrade options, and build the operational systems that let you handle more volume profitably.',
    },
  ],
  before: [
    'High call volume converting to low average revenue per job',
    'Technicians fixing the minimum and leaving without presenting upgrade options',
    'No process for converting repair calls into door replacement opportunities',
    'CSRs booking jobs but losing customers to competitors on price alone',
    'Rapid growth creating chaos without the systems to support it',
    'Commercial opportunity not being pursued alongside residential',
  ],
  after: [
    'Every service call treated as a full revenue opportunity',
    'Technicians presenting opener upgrades and full door replacements with confidence',
    'Systematic repair-to-replacement conversion process on aged equipment',
    'CSRs booking on value rather than competing on price',
    'Scalable operational systems that handle volume without breaking down',
    'Commercial sales track running alongside residential for diversified revenue',
  ],
  benefitsTitle: 'What Garage Door Coaching Covers',
  benefitsBody:
    'Garage door companies have a natural advantage: repeat exposure. The same homeowners call multiple times over years of ownership. Our coaching is designed to turn those repeat touchpoints into lifetime customer value.',
  benefits: [
    'CSR booking and upsell scripting for high-volume inbound calls',
    'Technician training on presenting full-door replacement from repair calls',
    'Opener and smart home integration sales coaching',
    'Repair-to-replacement conversion framework for aged equipment',
    'Commercial garage door sales process development',
    'Dispatch efficiency coaching for high-volume operations',
    'Seasonal demand planning and marketing calendar',
    'KPI dashboards calibrated to garage door industry benchmarks',
  ],
  coaches: [
    {
      name: 'McKena Harless',
      role: 'Founder & Lead Coach',
      bio: 'McKena has worked with garage door companies ranging from owner-operators to regional multi-location operations. Her coaching focuses on building the revenue-per-call discipline and operational structure that allows high-volume trades businesses to scale profitably without losing the customer experience that built their reputation.',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    },
    {
      name: 'David Chen',
      role: 'Sales & CSR Coach',
      bio: 'David specializes in high-volume service company sales coaching — building the scripts, training systems, and accountability structures that help CSRs and technicians consistently capture more revenue from every customer interaction. His garage door coaching clients regularly see 30–60% improvements in average ticket within the first 90 days.',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    },
  ],
  ctaHeadline: 'More Calls Should Mean More Revenue',
  ctaBody:
    'You\'re already generating the volume. Let\'s build the skills and systems that turn that volume into the revenue your business deserves.',
};

export function GarageDoorsPage() {
  return <TradePage data={data} />;
}
