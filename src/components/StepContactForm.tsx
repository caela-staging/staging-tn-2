import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CompassButton } from '@/components/ui/compass-button';

const TRADES = [
  { value: 'hvac',       label: 'HVAC',         icon: '❄️' },
  { value: 'plumbing',   label: 'Plumbing',      icon: '🔧' },
  { value: 'electrical', label: 'Electrical',    icon: '⚡' },
  { value: 'garage',     label: 'Garage Doors',  icon: '🚪' },
  { value: 'other',      label: 'Other',         icon: '🏗️' },
];

const STEP_NAMES = ['About You', 'Business', 'Goals'];

type CoachingOption = { value: string; label: string };

type Props = {
  buttonLabel?: string;
  showCoachingArea?: boolean;
  coachingOptions?: CoachingOption[];
};

const inputClass =
  'bg-background/50 border-border/50 text-foreground rounded-none focus-visible:ring-primary focus-visible:border-primary h-12 transition-colors';

const selectClass =
  'flex h-12 w-full bg-background/50 border border-border/50 px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary rounded-none transition-colors';

const labelClass = 'text-foreground uppercase tracking-wider text-xs font-bold';

export function StepContactForm({
  buttonLabel = 'Connect Today',
  showCoachingArea = false,
  coachingOptions = [],
}: Props) {
  const [step, setStep] = useState(1);
  const [selectedTrade, setSelectedTrade] = useState('');

  return (
    <form className="relative z-10" onSubmit={(e) => e.preventDefault()}>

      {/* ── Horizontal step indicator ── */}
      <div className="mb-8">
        {/* Circles + connecting lines */}
        <div className="flex items-center mb-2">
          {STEP_NAMES.map((_, i) => {
            const num = i + 1;
            const isDone   = step > num;
            const isActive = step === num;
            return (
              <div key={num} className="flex items-center flex-1 last:flex-none">
                {/* Circle */}
                <div
                  className={[
                    'w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all duration-300',
                    isDone   ? 'bg-primary text-primary-foreground' : '',
                    isActive ? 'bg-primary text-primary-foreground ring-[3px] ring-primary/30' : '',
                    !isDone && !isActive ? 'border border-border/60 text-muted-foreground bg-background/50' : '',
                  ].join(' ')}
                >
                  {isDone ? '✓' : num}
                </div>
                {/* Connecting line (not after last item) */}
                {i < STEP_NAMES.length - 1 && (
                  <div
                    className={[
                      'flex-1 h-px mx-1 transition-all duration-300',
                      step > num ? 'bg-primary' : 'bg-border/50',
                    ].join(' ')}
                  />
                )}
              </div>
            );
          })}
        </div>
        {/* Labels */}
        <div className="flex items-start">
          {STEP_NAMES.map((name, i) => {
            const num = i + 1;
            const isActive = step === num;
            const isDone   = step > num;
            return (
              <div key={num} className="flex items-start flex-1 last:flex-none">
                <span
                  className={[
                    'text-[9px] font-bold uppercase tracking-widest leading-tight',
                    isActive ? 'text-primary' : '',
                    isDone   ? 'text-muted-foreground' : '',
                    !isActive && !isDone ? 'text-muted-foreground/50' : '',
                  ].join(' ')}
                >
                  {name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Step content ── */}
      <AnimatePresence mode="wait">

        {/* Step 1 — About You */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.22 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-heading text-xl md:text-2xl uppercase tracking-wide text-foreground mb-1">
                About You
              </h3>
              <p className="text-sm text-muted-foreground">
                Tell us who you are so we can personalise the call.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-3">
                <Label className={labelClass}>First Name</Label>
                <Input placeholder="John" className={inputClass} />
              </div>
              <div className="space-y-3">
                <Label className={labelClass}>Last Name</Label>
                <Input placeholder="Doe" className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-3">
                <Label className={labelClass}>Email Address</Label>
                <Input type="email" placeholder="john@example.com" className={inputClass} />
              </div>
              <div className="space-y-3">
                <Label className={labelClass}>Phone Number</Label>
                <Input type="tel" placeholder="(555) 123-4567" className={inputClass} />
              </div>
            </div>

            <CompassButton type="button" className="w-full" onClick={() => setStep(2)}>
              Continue →
            </CompassButton>
          </motion.div>
        )}

        {/* Step 2 — Your Business */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.22 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-heading text-xl md:text-2xl uppercase tracking-wide text-foreground mb-1">
                Your Business
              </h3>
              <p className="text-sm text-muted-foreground">
                Tell us about your trade so we can prepare a real strategy.
              </p>
            </div>

            {/* Trade icon cards */}
            <div className="space-y-3">
              <Label className={labelClass}>Primary Trade</Label>
              <div className="grid grid-cols-5 gap-2">
                {TRADES.map((trade) => (
                  <button
                    key={trade.value}
                    type="button"
                    onClick={() => setSelectedTrade(trade.value)}
                    className={[
                      'flex flex-col items-center gap-2 p-3 border transition-all cursor-pointer',
                      selectedTrade === trade.value
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border/50 bg-background/50 text-muted-foreground hover:border-primary/50 hover:text-foreground',
                    ].join(' ')}
                  >
                    <span className="text-2xl leading-none">{trade.icon}</span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-center leading-tight">
                      {trade.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {showCoachingArea && coachingOptions.length > 0 && (
              <div className="space-y-3">
                <Label className={labelClass}>Coaching Area of Interest</Label>
                <select className={selectClass}>
                  <option value="">Select a department...</option>
                  {coachingOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-6 py-3 border border-border/50 bg-transparent text-muted-foreground text-xs font-bold uppercase tracking-wider hover:border-border transition-colors"
              >
                ← Back
              </button>
              <CompassButton type="button" className="flex-1" onClick={() => setStep(3)}>
                Continue →
              </CompassButton>
            </div>
          </motion.div>
        )}

        {/* Step 3 — Your Goals */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.22 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-heading text-xl md:text-2xl uppercase tracking-wide text-foreground mb-1">
                Your Goals
              </h3>
              <p className="text-sm text-muted-foreground">
                One last thing — tell us what's holding your business back.
              </p>
            </div>

            <div className="space-y-3">
              <Label className={labelClass}>What are your biggest challenges?</Label>
              <Textarea
                placeholder="Tell us about your current roadblocks..."
                className="bg-background/50 border-border/50 text-foreground rounded-none focus-visible:ring-primary focus-visible:border-primary min-h-[150px] resize-none transition-colors"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-3 border border-border/50 bg-transparent text-muted-foreground text-xs font-bold uppercase tracking-wider hover:border-border transition-colors"
              >
                ← Back
              </button>
              <CompassButton type="submit" className="flex-1">
                {buttonLabel}
              </CompassButton>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </form>
  );
}
