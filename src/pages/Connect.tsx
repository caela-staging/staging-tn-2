import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { motion } from 'motion/react';
import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { CompassButton } from '@/components/ui/compass-button';
import { Compass, Phone, Mail, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import stackedLogo from '/Images/True North_stacked full logo grey.svg';
import { FaqSection } from '@/components/FaqSection';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const trustPoints = [
  'Response within one business day — no automated runaround',
  'A real conversation with a coach, not a sales pitch',
  'No pressure, no obligation — just clarity on what\'s possible',
  'Specific feedback on your business from someone who knows your trade',
];

export function Connect() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grain">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-[100px] animate-pulse-glow z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-amber-500/10 rounded-full filter blur-[120px] animate-pulse-glow z-0" style={{ animationDelay: '2s' }} />

        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
            alt="Connect with True North"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-background/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-xs font-bold uppercase tracking-widest text-primary mb-6 flex items-center justify-center gap-3"
          >
            <span className="w-8 h-px bg-primary" />
            Let's Talk
            <span className="w-8 h-px bg-primary" />
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-heading text-6xl md:text-8xl uppercase text-foreground mb-6 leading-[0.85]"
          >
            Book a <br />
            <AnimatedGradientText>Discovery Call</AnimatedGradientText>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-2xl font-script text-primary max-w-2xl mx-auto"
          >
            One honest conversation can change the direction of your business.
          </motion.p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <FaqSection
        heading="Before You"
        headingHighlight="Reach Out"
        subheading="Honest answers to the questions we get most."
        items={[
          {
            question: 'What happens after I submit this form?',
            answer: 'A True North coach — not a salesperson — will reach out within one business day to schedule a 30-minute discovery call. You\'ll talk directly with someone who knows your trade.',
          },
          {
            question: 'Is the discovery call free?',
            answer: 'Yes. There\'s no charge and no obligation. It\'s a real conversation about your business, not a sales pitch. If we\'re not the right fit, we\'ll tell you.',
          },
          {
            question: 'How much does coaching cost?',
            answer: 'Pricing varies based on the scope of engagement and departments involved. We\'ll discuss options that make sense for your business size and goals on the discovery call — no surprises.',
          },
          {
            question: 'Do I need to be a certain size to work with you?',
            answer: 'We work with companies ranging from $500K to $10M+ in annual revenue. If you\'re serious about growth and willing to do the work, we want to talk.',
          },
          {
            question: 'What if I\'m not sure coaching is right for me?',
            answer: 'That\'s exactly what the discovery call is for. We\'ll give you honest feedback — even if that means telling you it\'s not the right time. We\'d rather build trust than push a bad fit.',
          },
        ]}
      />

      {/* ── MAIN CONTENT: FORM + SIDEBAR ─────────────────────────── */}
      <section className="py-24 bg-background bg-topography relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50rem] h-[25rem] bg-primary/8 rounded-full filter blur-[120px] z-0" />

        <div className="container relative z-10 mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 xl:gap-20 items-start">

            {/* ── FORM ── */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
              <img src={stackedLogo} alt="" className="absolute right-0 top-1/2 -translate-y-1/2 h-[85%] w-auto opacity-[0.12] pointer-events-none select-none" />

              <div className="mb-10">
                <h2 className="font-heading text-3xl md:text-4xl uppercase text-foreground mb-3 leading-none">
                  Tell Us About Your Business
                </h2>
                <p className="text-muted-foreground text-sm">
                  Fill out the form below and a True North coach will reach out within one business day to schedule your call.
                </p>
              </div>

              <form className="space-y-7 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div className="space-y-3">
                    <Label htmlFor="firstName" className="text-foreground uppercase tracking-wider text-xs font-bold">First Name</Label>
                    <Input id="firstName" placeholder="John" className="bg-background/50 border-border/50 text-foreground rounded-none focus-visible:ring-primary focus-visible:border-primary h-12 transition-colors" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="lastName" className="text-foreground uppercase tracking-wider text-xs font-bold">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="bg-background/50 border-border/50 text-foreground rounded-none focus-visible:ring-primary focus-visible:border-primary h-12 transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-foreground uppercase tracking-wider text-xs font-bold">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-background/50 border-border/50 text-foreground rounded-none focus-visible:ring-primary focus-visible:border-primary h-12 transition-colors" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="phone" className="text-foreground uppercase tracking-wider text-xs font-bold">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" className="bg-background/50 border-border/50 text-foreground rounded-none focus-visible:ring-primary focus-visible:border-primary h-12 transition-colors" />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="company" className="text-foreground uppercase tracking-wider text-xs font-bold">Company Name</Label>
                  <Input id="company" placeholder="Acme HVAC Co." className="bg-background/50 border-border/50 text-foreground rounded-none focus-visible:ring-primary focus-visible:border-primary h-12 transition-colors" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div className="space-y-3">
                    <Label htmlFor="trade" className="text-foreground uppercase tracking-wider text-xs font-bold">Primary Trade</Label>
                    <select
                      id="trade"
                      className="flex h-12 w-full bg-background/50 border border-border/50 px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary rounded-none transition-colors"
                    >
                      <option value="">Select your trade...</option>
                      <option value="hvac">HVAC</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="electrical">Electrical</option>
                      <option value="garage">Garage Doors</option>
                      <option value="other">Other Home Service</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="revenue" className="text-foreground uppercase tracking-wider text-xs font-bold">Annual Revenue</Label>
                    <select
                      id="revenue"
                      className="flex h-12 w-full bg-background/50 border border-border/50 px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary rounded-none transition-colors"
                    >
                      <option value="">Select a range...</option>
                      <option value="under500k">Under $500K</option>
                      <option value="500k-1m">$500K – $1M</option>
                      <option value="1m-3m">$1M – $3M</option>
                      <option value="3m-10m">$3M – $10M</option>
                      <option value="10m+">$10M+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="challenge" className="text-foreground uppercase tracking-wider text-xs font-bold">What's your biggest challenge right now?</Label>
                  <Textarea
                    id="challenge"
                    placeholder="Tell us what's holding your business back — the more specific, the better..."
                    className="bg-background/50 border-border/50 text-foreground rounded-none focus-visible:ring-primary focus-visible:border-primary min-h-[140px] resize-none transition-colors"
                  />
                </div>

                <CompassButton type="submit" className="w-full">Book a Discovery Call</CompassButton>
              </form>
            </motion.div>

            {/* ── SIDEBAR ── */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={stagger}
              viewport={{ once: true }}
              className="space-y-10 lg:sticky lg:top-32"
            >
              {/* What to expect */}
              <motion.div variants={fadeUp}>
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-5 flex items-center gap-3">
                  <span className="w-8 h-px bg-primary" />
                  What to Expect
                </p>
                <ul className="space-y-4">
                  {trustPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/80 text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Divider */}
              <motion.div variants={fadeUp} className="h-px bg-border/50" />

              {/* Contact info */}
              <motion.div variants={fadeUp} className="space-y-5">
                <p className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-3">
                  <span className="w-8 h-px bg-primary" />
                  Reach Us Directly
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-card border border-border/50 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">Phone</p>
                    <p className="text-foreground font-semibold">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-card border border-border/50 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">Email</p>
                    <p className="text-foreground font-semibold">hello@truenorthstrategies.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-card border border-border/50 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">Serving</p>
                    <p className="text-foreground font-semibold">Home Service Companies Nationwide</p>
                  </div>
                </div>
              </motion.div>

              {/* Divider */}
              <motion.div variants={fadeUp} className="h-px bg-border/50" />

              {/* Logo stamp */}
              <motion.div variants={fadeUp} className="flex items-center gap-5">
                <div className="w-16 h-16 border-2 border-primary/40 flex items-center justify-center shrink-0">
                  <Compass className="w-8 h-8 text-primary drop-shadow-[0_0_8px_rgba(254,101,42,0.5)]" />
                </div>
                <div>
                  <p className="font-heading text-lg uppercase text-foreground leading-none tracking-wide">True North</p>
                  <p className="font-heading text-xs uppercase text-primary tracking-widest">Strategies</p>
                  <p className="text-muted-foreground text-xs mt-1">Guiding Your Business The Authentic Way</p>
                </div>
              </motion.div>

              {/* Explore links */}
              <motion.div variants={fadeUp} className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Not ready yet? Explore first:</p>
                {[
                  { label: 'How Coaching Works', to: '/coaching' },
                  { label: 'HVAC Coaching', to: '/who-we-serve/hvac' },
                  { label: 'Plumbing Coaching', to: '/who-we-serve/plumbing' },
                  { label: 'Electrical Coaching', to: '/who-we-serve/electrical' },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors duration-200 group"
                  >
                    <ArrowRight className="w-3 h-3 text-primary group-hover:translate-x-1 transition-transform duration-200" />
                    {link.label}
                  </Link>
                ))}
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
