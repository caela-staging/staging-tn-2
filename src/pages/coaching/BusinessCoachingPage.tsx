import { Briefcase } from 'lucide-react';
import { CoachingSubPage, CoachingSubPageData } from './CoachingSubPage';

const data: CoachingSubPageData = {
  slug: 'business',
  category: 'Business Coaching',
  heroHeadline: ['Business', 'Coaching'],
  heroTagline: 'Build the business you started — not just the job you gave yourself.',
  heroImg: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
  metaDescription: 'True North business coaching helps home service contractors build scalable operations, improve profitability, and transition from technician to owner — with systems built for the trades.',
  introTitle: 'Most Trade Contractors Are Great at the Work. Fewer Are Great at the Business.',
  introBody: [
    'You got into this trade because you were good at it. But growing a business requires a completely different skill set — one that nobody hands you when you start. Financial management, team structure, hiring, delegation, pricing strategy — every one of these is a discipline on its own, and most contractors are learning them the hard way.',
    'True North business coaching gives you the frameworks, accountability, and trade-specific expertise to run your company like a business — not a series of crises. We work alongside owners and general managers to build the systems, processes, and leadership habits that create consistent, scalable growth.',
    'This isn\'t generic small-business advice. Everything we teach is calibrated to how home service companies actually operate: seasonality, dispatch, service agreements, technician performance, and the reality of running a field-based team.',
  ],
  introImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
  introImgAlt: 'Business owner reviewing strategy with a coach',
  whatWeCover: [
    'P&L literacy and financial KPI dashboards built for the trades',
    'Pricing strategy, markup, and gross margin optimization',
    'Organizational structure and role clarity as you scale',
    'Owner transition: moving from technician to true business operator',
    'Hiring systems and interview frameworks for field and office roles',
    'Performance management and accountability structures',
    'Vendor and supplier negotiation strategies',
    'Budgeting, cash flow forecasting, and seasonal planning',
    'Goal-setting frameworks and quarterly business reviews',
    'Exit planning and business valuation readiness',
  ],
  coaches: [
    {
      name: 'McKena Harless',
      role: 'Founder & Lead Business Coach',
      bio: [
        'McKena has spent over a decade working inside home service companies at the ownership and leadership level. She understands the isolation that comes with running a trade business — the pressure of payroll, the weight of growth decisions, and the challenge of building a team you can actually trust.',
        'Her business coaching approach is honest, structured, and built on the conviction that trade contractors deserve the same strategic support as any other business. She works alongside owners to build the systems and leadership habits that create consistent, scalable growth.',
      ],
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    },
    {
      name: 'James Whitfield',
      role: 'Operations & Scaling Strategist',
      bio: [
        'James spent 15 years building and scaling service businesses before transitioning into coaching. He\'s been through three major growth inflection points — from solo operator to multi-truck, from regional to multi-market — and he coaches from that lived experience.',
        'His specialty is building the operational infrastructure that lets a business grow without breaking: SOPs, management layers, and the financial discipline to sustain it. If you\'re hitting a ceiling and can\'t figure out why, James finds the bottleneck and builds the system to break through it.',
      ],
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop',
    },
  ],
  ctaHeadline: 'Ready to Run Your Business Like One?',
  ctaBody: 'Stop reacting and start leading. Let\'s build the structure, strategy, and habits that turn your trade company into a scalable business.',
  icon: Briefcase,
};

export function BusinessCoachingPage() {
  return <CoachingSubPage data={data} />;
}
