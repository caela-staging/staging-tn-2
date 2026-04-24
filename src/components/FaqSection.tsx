import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { CompassButton } from '@/components/ui/compass-button';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  heading?: string;
  headingHighlight?: string;
  subheading?: string;
  items: FaqItem[];
  dark?: boolean;
  bgClass?: string;
}

export function FaqSection({
  heading = 'Frequently Asked',
  headingHighlight = 'Questions',
  subheading,
  items,
  dark = false,
  bgClass,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className={`py-24 relative overflow-hidden ${bgClass ?? (dark ? 'bg-foreground' : 'bg-background')}`}>
      <div className="container mx-auto px-6 md:px-12 max-w-4xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className={`text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center justify-center gap-3`}>
            <span className="w-8 h-px bg-primary" />
            Got Questions
            <span className="w-8 h-px bg-primary" />
          </p>
          <h2 className={`font-heading text-4xl md:text-5xl uppercase leading-none mb-4 ${dark ? 'text-background' : 'text-foreground'}`}>
            {heading} <AnimatedGradientText>{headingHighlight}</AnimatedGradientText>
          </h2>
          {subheading && (
            <p className="text-xl font-script text-primary max-w-xl mx-auto">
              {subheading}
            </p>
          )}
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div
                  onClick={() => toggle(i)}
                  className={`relative overflow-hidden border cursor-pointer transition-all duration-300 ${
                    isOpen
                      ? `border-primary ${dark ? 'bg-background/5' : 'bg-primary/5'} shadow-[0_0_20px_rgba(254,101,42,0.12)]`
                      : `${dark ? 'border-background/10 hover:border-primary/50' : 'border-border hover:border-primary/50'} ${dark ? 'bg-background/5' : 'bg-card'}`
                  }`}
                >
                  {/* Corner brackets when open */}
                  {isOpen && (
                    <>
                      <div className="absolute top-3 left-3 w-5 h-5 pointer-events-none">
                        <div className="absolute top-0 left-0 w-3 h-px bg-primary" />
                        <div className="absolute top-0 left-0 w-px h-3 bg-primary" />
                      </div>
                      <div className="absolute bottom-3 right-3 w-5 h-5 pointer-events-none">
                        <div className="absolute bottom-0 right-0 w-3 h-px bg-primary" />
                        <div className="absolute bottom-0 right-0 w-px h-3 bg-primary" />
                      </div>
                    </>
                  )}

                  {/* Question row */}
                  <div className="flex items-center justify-between px-6 md:px-8 py-6 gap-4">
                    <h3 className={`font-heading text-lg md:text-xl uppercase tracking-wide transition-colors duration-300 ${
                      isOpen ? 'text-primary' : dark ? 'text-background' : 'text-foreground'
                    }`}>
                      {item.question}
                    </h3>
                    <div className={`shrink-0 w-8 h-8 border flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'border-primary bg-primary text-primary-foreground' : `border-primary/40 ${dark ? 'text-background/60' : 'text-muted-foreground'} group-hover:border-primary`
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-6 border-t border-primary/20">
                          <p className={`pt-5 leading-relaxed text-sm md:text-base ${dark ? 'text-background/70' : 'text-muted-foreground'}`}>
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 h-px bg-primary transition-all duration-500 ${isOpen ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <CompassButton to="/connect">Book a Discovery Call</CompassButton>
        </motion.div>
      </div>
    </section>
  );
}
