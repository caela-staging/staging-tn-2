import { useRef, useEffect, useState } from 'react';
import { animate, useInView } from 'motion/react';

interface CountUpStatProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  className?: string;
}

export function CountUpStat({ end, suffix = '', prefix = '', label, className }: CountUpStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, end, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, end]);

  return (
    <div ref={ref} className={`flex flex-col items-center text-center gap-3 ${className ?? ''}`}>
      <span className="font-heading text-4xl md:text-5xl leading-none drop-shadow-[0_0_20px_rgba(254,101,42,0.5)] text-primary">
        {prefix}{value}{suffix}
      </span>
      <span className="text-xs font-bold uppercase tracking-widest leading-tight opacity-60">
        {label}
      </span>
    </div>
  );
}
