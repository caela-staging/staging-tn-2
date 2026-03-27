import { motion } from 'motion/react';
import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { CompassButton } from '@/components/ui/compass-button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export function FindYourTrueNorth() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-primary/10 rounded-full filter blur-[100px] z-0" />

      <div className="container relative z-10 mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl uppercase text-foreground mb-6 tracking-normal">
            Find Your <AnimatedGradientText>True North</AnimatedGradientText>
          </h2>
          <p className="text-xl md:text-2xl font-script text-primary">
            Ready to stop guessing? Let's have an honest conversation about where your business is headed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-5 md:p-8 lg:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
          <form className="space-y-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label htmlFor="firstName" className="text-foreground uppercase tracking-wider text-xs font-bold">First Name</Label>
                <Input id="firstName" placeholder="John" className="bg-background/50 border-border/50 text-foreground rounded-none focus-visible:ring-primary focus-visible:border-primary h-12 transition-colors" />
              </div>
              <div className="space-y-3">
                <Label htmlFor="lastName" className="text-foreground uppercase tracking-wider text-xs font-bold">Last Name</Label>
                <Input id="lastName" placeholder="Doe" className="bg-background/50 border-border/50 text-foreground rounded-none focus-visible:ring-primary focus-visible:border-primary h-12 transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <Label htmlFor="trade" className="text-foreground uppercase tracking-wider text-xs font-bold">Primary Trade</Label>
              <select
                id="trade"
                className="flex h-12 w-full bg-background/50 border border-border/50 px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 rounded-none transition-colors"
              >
                <option value="" disabled>Select your trade...</option>
                <option value="hvac">HVAC</option>
                <option value="plumbing">Plumbing</option>
                <option value="electrical">Electrical</option>
                <option value="garage">Garage Doors</option>
                <option value="other">Other Home Service</option>
              </select>
            </div>

            <div className="space-y-3">
              <Label htmlFor="coaching" className="text-foreground uppercase tracking-wider text-xs font-bold">Coaching Area of Interest</Label>
              <select
                id="coaching"
                className="flex h-12 w-full bg-background/50 border border-border/50 px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 rounded-none transition-colors"
              >
                <option value="" disabled>Select a department...</option>
                <option value="csr">CSR Coaching</option>
                <option value="business">Business Coaching</option>
                <option value="sales">Sales Coaching</option>
                <option value="training">Training Coaching</option>
                <option value="marketing">Marketing Coaching</option>
                <option value="all">All Departments</option>
              </select>
            </div>

            <div className="space-y-3">
              <Label htmlFor="goals" className="text-foreground uppercase tracking-wider text-xs font-bold">What are your biggest challenges?</Label>
              <Textarea
                id="goals"
                placeholder="Tell us about your current roadblocks..."
                className="bg-background/50 border-border/50 text-foreground rounded-none focus-visible:ring-primary focus-visible:border-primary min-h-[150px] resize-none transition-colors"
              />
            </div>

            <CompassButton type="submit" className="w-full">Connect Today</CompassButton>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
