import { TrendingUp } from 'lucide-react';
import { CoachingSubPage, CoachingSubPageData } from './CoachingSubPage';

const data: CoachingSubPageData = {
  slug: 'sales',
  category: 'Sales Coaching',
  heroHeadline: ['Sales', 'Coaching'],
  heroTagline: 'Close more jobs. Raise your tickets. Build a team that sells with confidence.',
  heroImg: 'https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=2070&auto=format&fit=crop',
  metaDescription: 'True North sales coaching trains home service technicians and comfort advisors to present options confidently, overcome objections, and close higher-ticket jobs — without pressure tactics.',
  introTitle: 'Your Technicians Are Your Best Salespeople. Are They Trained Like It?',
  introBody: [
    'In home service, every job is a sales opportunity. A technician who only does what they\'re dispatched to do and leaves is costing your company real money — not because they\'re bad at their work, but because nobody ever taught them how to present options, build trust, and let the customer make an informed decision.',
    'True North sales coaching teaches your techs and comfort advisors the skills that lead to higher average tickets, more agreements sold, and better customer satisfaction — all without pressure tactics or scripts that feel fake. We build real sales ability based on honest conversation, complete option presentation, and genuine confidence.',
    'We also work with your leadership team on the sales management side: tracking close rates, reviewing calls, and building the culture of accountability that keeps performance high long after the coaching ends.',
  ],
  introImg: 'https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=2070&auto=format&fit=crop',
  introImgAlt: 'Technician presenting options to a homeowner',
  whatWeCover: [
    'Good-better-best options presentation for service and installation jobs',
    'Building trust and rapport during the in-home visit',
    'Overcoming price objections without discounting',
    'Service agreement sales on every visit — residential and commercial',
    'Comfort advisor training for replacement and installation sales',
    'Ride-along coaching and real-job feedback sessions',
    'Sales KPI tracking: close rate, average ticket, agreement attach rate',
    'Managing a sales team: pipeline reviews, scorecards, and accountability',
    'Digital tools and financing presentation techniques',
    'Follow-up strategies for unsold estimates',
  ],
  coaches: [
    {
      name: 'McKena Harless',
      role: 'Founder & Lead Sales Coach',
      bio: [
        'McKena has coached hundreds of technicians and comfort advisors across the home service industry. Her approach to sales training is centered on one idea: you don\'t have to be a "salesperson" to sell well. The most effective technician-salespeople are the ones who genuinely help customers make the right decision.',
        'McKena\'s training builds exactly that kind of confident, ethical selling — rooted in honesty, complete options presentation, and the trust that comes from being straightforward with a homeowner. Her techs don\'t feel like they\'re selling. Their customers don\'t feel sold to.',
      ],
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
    },
    {
      name: 'David Chen',
      role: 'In-Field Sales & Technician Coach',
      bio: [
        'David brings a rare combination to sales coaching: he\'s been a top-performing technician, a sales manager, and a trainer. He knows what it feels like to be in a crawl space and then have to transition into a kitchen table conversation with a homeowner.',
        'His coaching is practical, non-intimidating, and built around the real scenarios your techs face every day — because he\'s been there himself. David\'s ride-along sessions are where the biggest breakthroughs happen, turning reluctant techs into confident, high-performing salespeople.',
      ],
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1974&auto=format&fit=crop',
    },
  ],
  ctaHeadline: 'Ready to Raise Your Average Ticket?',
  ctaBody: 'Better sales training doesn\'t just increase revenue — it improves customer satisfaction and builds a team your business can depend on. Let\'s talk.',
  icon: TrendingUp,
};

export function SalesCoachingPage() {
  return <CoachingSubPage data={data} />;
}
