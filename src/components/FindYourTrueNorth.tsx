import { motion } from 'motion/react';
import stackedLogo from '/Images/True North_stacked full logo grey.svg';
import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { StepContactForm } from '@/components/StepContactForm';

export function FindYourTrueNorth() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-primary/10 rounded-full filter blur-[100px] z-0" />

      <div className="container relative z-10 mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Left: pitch text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-6 leading-none">
              Ready to Find Your <AnimatedGradientText>True North?</AnimatedGradientText>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Stop guessing and start scaling. Our discovery call is 30 minutes of honest conversation about where your business is and where it needs to go.
            </p>
            <ul className="space-y-4">
              {[
                'No sales pitch — just real strategy',
                'Built for trades businesses doing $1M+',
                'Limited spots available each quarter',
                '100% free discovery call',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="text-primary font-bold flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: form card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            <img src={stackedLogo} alt="" className="absolute right-0 top-1/2 -translate-y-1/2 h-[85%] w-auto opacity-[0.12] pointer-events-none select-none" />
            <StepContactForm
              buttonLabel="Connect Today"
              showCoachingArea
              coachingOptions={[
                { value: 'csr',       label: 'CSR Coaching' },
                { value: 'business',  label: 'Business Coaching' },
                { value: 'sales',     label: 'Sales Coaching' },
                { value: 'training',  label: 'Training Coaching' },
                { value: 'marketing', label: 'Marketing Coaching' },
                { value: 'all',       label: 'All Departments' },
              ]}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
