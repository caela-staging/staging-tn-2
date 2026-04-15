'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface ProcessStep {
  number: string;
  title: string;
  body: string;
}

const CompassArrow = () => (
  <svg viewBox="0 0 20 28" className="w-full h-auto" fill="#FE652A">
    <polygon points="10,0 16,18 10,13 4,18" />
  </svg>
);

export function ProcessTimeline({ steps, columns }: { steps: ProcessStep[]; columns?: number }) {
  const cols = columns ?? steps.length;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="relative w-full">
      {/* Horizontal line */}
      <div className="absolute top-[2.25rem] left-0 right-0 h-px bg-background/10 hidden md:block" />
      <motion.div
        className="absolute top-[2.25rem] left-0 h-px bg-primary hidden md:block"
        initial={{ width: '0%' }}
        animate={isInView ? { width: '100%' } : { width: '0%' }}
        transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.2 }}
      />

      <div className={`grid grid-cols-1 md:grid-cols-${cols} gap-0`}>
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
            className="relative flex flex-col items-center text-center px-8 pt-0 pb-0 group"
          >
            {/* Compass arrow node */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.2, type: 'spring', stiffness: 200 }}
              className="relative z-10 w-9 h-9 mb-8 group-hover:scale-110 transition-transform duration-300"
            >
              <CompassArrow />
            </motion.div>

            {/* Step label */}
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3">
              Step {step.number}
            </span>

            {/* Title */}
            <h4 className="font-heading text-2xl uppercase text-background mb-4 leading-none">
              {step.title}
            </h4>

            {/* Body */}
            <p className="text-background/60 leading-relaxed text-sm max-w-xs">
              {step.body}
            </p>

            {/* Vertical connector on mobile */}
            {i < steps.length - 1 && (
              <div className="md:hidden w-px h-12 bg-primary/30 my-6" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
