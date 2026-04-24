'use client';

import { useEffect, useLayoutEffect, useRef, useId } from 'react';
import { motion, useInView } from 'motion/react';

const PATH   = 'M0,90 C60,90 130,45 200,45 C340,45 460,135 600,135 C740,135 860,45 1000,45 C1070,45 1140,90 1200,90';
const MARKER = '/Images/compass-marker.png';
const FOOT_L = '/Images/footprint-left.png';
const FOOT_R = '/Images/footprint-right.png';

const DEFAULT_STEPS = [
  { number: '01', title: 'Discovery Call',  body: 'An honest, no-pressure conversation about where your business is and where you want it to go.' },
  { number: '02', title: 'Custom Roadmap',  body: 'We build a coaching plan tailored to your trade, your team, and your specific growth goals.' },
  { number: '03', title: 'Execute & Grow',  body: 'We work alongside you — in the trenches, holding you accountable every step of the way.' },
];

interface Step { number: string; title: string; body: string; }

export function TrailSection({ dark = false, steps = DEFAULT_STEPS }: { dark?: boolean; steps?: Step[] }) {
  const rawId      = useId();
  const maskId     = `trail-mask-${rawId.replace(/:/g, '')}`;

  const wrapRef    = useRef<HTMLDivElement>(null);
  const svgRef     = useRef<SVGSVGElement>(null);
  const maskPathRef = useRef<SVGPathElement>(null); // path inside <mask>, drives trail reveal
  const fgRef      = useRef<SVGPathElement>(null);  // visible dashed trail

  const isInView = useInView(wrapRef, { once: true, amount: 0.15 });

  const trailColor = dark ? '#FCECBB' : '#363537';
  const kcColor    = dark ? '#363537' : '#FCECBB';

  // Trail reveal — useLayoutEffect runs in the same phase as Framer Motion's
  // internal animations, so the trail draw starts in sync with markers/text.
  useLayoutEffect(() => {
    if (!isInView) return;
    const mask = maskPathRef.current;
    if (!mask) return;

    const total = mask.getTotalLength();
    if (total === 0) return;

    mask.style.transition       = 'none';
    mask.style.strokeDasharray  = String(total);
    mask.style.strokeDashoffset = String(total);

    // Double rAF ensures the browser commits the initial state before the
    // transition starts, guaranteeing the draw animation is visible.
    let raf1: number, raf2: number;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        mask.style.transition       = 'stroke-dashoffset 2.8s cubic-bezier(0.4,0,0.2,1) 0.3s';
        mask.style.strokeDashoffset = '0';
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      if (mask) {
        mask.style.transition       = 'none';
        mask.style.strokeDashoffset = String(total);
      }
    };
  }, [isInView]);

  // Footprints — progressive appearance along the trail
  useEffect(() => {
    if (!isInView) return;
    const svg = svgRef.current;
    const fg  = fgRef.current;
    if (!svg || !fg) return;

    const total = fg.getTotalLength();
    if (total === 0) return;

    const NS     = 'http://www.w3.org/2000/svg';
    const mobile = window.innerWidth <= 680;
    const NUM    = mobile ? 14 : 26;
    const HALF   = mobile ? 22 : 32;
    const SIDE   = 32;
    const EXCL   = 90;
    const mkL    = [0.165, 0.50, 0.835].map(t => t * total);
    const inserted: SVGImageElement[] = [];
    const tids: ReturnType<typeof setTimeout>[] = [];

    let count = 0;
    for (let i = 0; i < NUM; i++) {
      const t   = (i + 0.5) / NUM;
      const len = t * total;
      if (mkL.some(ml => Math.abs(len - ml) < EXCL)) continue;

      const p0  = fg.getPointAtLength(len);
      const p1  = fg.getPointAtLength(Math.min(len + 6, total));
      const deg = Math.atan2(p1.y - p0.y, p1.x - p0.x) * (180 / Math.PI);
      const rad = deg * Math.PI / 180;
      const side = (count % 2 === 0) ? 1 : -1;
      const ox  = -Math.sin(rad) * SIDE * side;
      const oy  =  Math.cos(rad) * SIDE * side;
      count++;

      const img = document.createElementNS(NS, 'image');
      img.setAttribute('href', count % 2 === 0 ? FOOT_L : FOOT_R);
      img.setAttribute('x',         String(-HALF));
      img.setAttribute('y',         String(-HALF));
      img.setAttribute('width',     String(HALF * 2));
      img.setAttribute('height',    String(HALF * 2));
      img.setAttribute('transform', `translate(${p0.x + ox},${p0.y + oy}) rotate(${deg + 90})`);
      img.style.opacity    = '0';
      img.style.transition = 'opacity 0.35s ease';
      svg.insertBefore(img, fg);
      inserted.push(img);
      tids.push(setTimeout(() => { img.style.opacity = '1'; }, 300 + t * 2800));
    }

    return () => {
      tids.forEach(clearTimeout);
      inserted.forEach(el => el.parentNode?.removeChild(el));
    };
  }, [isInView]);

  const MARKERS = [
    { left: '16.67%', top: '25%', delay: 1.1 },
    { left: '50%',    top: '75%', delay: 2.0 },
    { left: '83.33%', top: '25%', delay: 2.9 },
  ];

  return (
    <section className={`py-20 relative overflow-hidden ${dark ? 'bg-foreground' : 'bg-[#FCECBB]'}`}>
      {dark && (
        <div className="absolute inset-0 bg-topography opacity-10 pointer-events-none" />
      )}

      <div ref={wrapRef} className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-label text-xs uppercase tracking-widest text-primary mb-4">The Process</p>
          <h2 className={`font-heading text-4xl md:text-5xl uppercase leading-none ${dark ? 'text-background' : 'text-[#363537]'}`}>
            How We Work
          </h2>
        </motion.div>

        {/* ── Mobile: numbered vertical list ── */}
        <div className="md:hidden space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`flex items-start gap-4 py-6 border-b last:border-0 ${dark ? 'border-background/10' : 'border-[#363537]/10'}`}
            >
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-background font-heading text-sm flex-shrink-0 mt-0.5">
                {step.number}
              </div>
              <div className="text-left">
                <span className="block font-label text-[11px] tracking-[0.2em] uppercase text-primary mb-1">
                  Step {step.number}
                </span>
                <h3 className={`font-heading text-xl uppercase leading-tight mb-2 ${dark ? 'text-background' : 'text-[#363537]'}`}>
                  {step.title}
                </h3>
                <p className={`text-sm leading-relaxed ${dark ? 'text-background/60' : 'text-[#363537]/60'}`}>
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Desktop: trail grid (3 cols × 3 rows) ── */}
        <div className="hidden md:grid grid-cols-3 grid-rows-[auto_auto_auto]">

          {/* Row 3 / col 1 — Step 1 BELOW left peak */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="col-start-1 row-start-3 self-start text-center pt-8 px-5 -mt-[110px]"
          >
            <StepText step={steps[0]} dark={dark} />
          </motion.div>

          {/* Row 3 / col 3 — Step 3 BELOW right peak */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 3.2 }}
            className="col-start-3 row-start-3 self-start text-center pt-8 px-5 -mt-[110px]"
          >
            <StepText step={steps[2]} dark={dark} />
          </motion.div>

          {/* Row 2 — SVG trail */}
          <div className="col-span-3 row-start-2 relative">
            <svg
              ref={svgRef}
              viewBox="0 0 1200 180"
              className="w-full h-auto block overflow-visible"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <mask id={maskId}>
                  <path
                    ref={maskPathRef}
                    d={PATH}
                    stroke="white"
                    strokeWidth="30"
                    strokeLinecap="round"
                    fill="none"
                  />
                </mask>
              </defs>

              {/* Ghost trail — always visible, very faint */}
              <path d={PATH} stroke={trailColor} strokeWidth="4" strokeDasharray="12 8" strokeLinecap="round" opacity={0.15} />
              {/* Animated trail — revealed progressively by the mask */}
              <path ref={fgRef} d={PATH} stroke={trailColor} strokeWidth="4" strokeDasharray="12 8" strokeLinecap="round" opacity={0.8} mask={`url(#${maskId})`} />
              {/* Knockout circles — same colour as section bg, hide trail behind each marker */}
              <circle cx="200"  cy="45"  r="42" fill={kcColor} />
              <circle cx="600"  cy="135" r="42" fill={kcColor} />
              <circle cx="1000" cy="45"  r="42" fill={kcColor} />
            </svg>

            {/* Compass markers */}
            {MARKERS.map((m, i) => (
              <div
                key={i}
                className="absolute"
                style={{ left: m.left, top: m.top, transform: 'translate(-50%, -50%)' }}
              >
                <motion.img
                  src={MARKER}
                  alt=""
                  aria-hidden
                  initial={{ opacity: 0, scale: 0.2 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: m.delay, type: 'spring', stiffness: 200 }}
                  className="w-[68px] h-auto"
                  style={{ filter: 'drop-shadow(0 4px 12px rgba(254,101,42,0.45))' }}
                />
              </div>
            ))}
          </div>

          {/* Row 3 / col 2 — Step 2 BELOW valley */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 2.3 }}
            className="col-start-2 row-start-3 self-start text-center pt-8 px-5"
          >
            <StepText step={steps[1]} dark={dark} />
          </motion.div>

        </div>
      </div>

    </section>
  );
}

function StepText({ step, dark }: { step: Step; dark: boolean }) {
  return (
    <>
      <span className="block font-label text-[13px] tracking-[0.2em] uppercase text-primary mb-[10px]">
        Step {step.number}
      </span>
      <h3 className={`font-heading text-[22px] uppercase leading-[1.15] tracking-[0.04em] mb-[10px] ${dark ? 'text-background' : 'text-[#363537]'}`}>
        {step.title}
      </h3>
      <p className={`font-sans text-[13px] leading-[1.75] ${dark ? 'text-background/60' : 'text-[#363537]/60'}`}>
        {step.body}
      </p>
    </>
  );
}
