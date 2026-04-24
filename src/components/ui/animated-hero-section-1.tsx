import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface CtaLink {
  text: string;
  href: string;
  primary?: boolean;
}

interface AnimatedHeroProps {
  backgroundImageUrl: string;
  title: React.ReactNode;
  description: React.ReactNode;
  ctas?: CtaLink[];
  className?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export const AnimatedHeroSection = ({
  backgroundImageUrl,
  title,
  description,
  ctas = [],
  className,
  align = "center",
  children,
}: AnimatedHeroProps) => {
  return (
    <section
      className={cn(
        "relative min-h-screen flex items-center justify-center overflow-hidden",
        className
      )}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImageUrl}
          alt=""
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          "relative z-10 container mx-auto px-6 md:px-12 pt-32 pb-16 flex flex-col",
          align === "center" ? "items-center text-center" : "items-start text-left"
        )}
      >
        <motion.h1
          variants={itemVariants}
          className="font-heading text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-normal uppercase text-[#FCECBB] mb-6 leading-none"
        >
          {title}
        </motion.h1>

        <motion.div variants={itemVariants} className="text-lg leading-8 text-white/80 max-w-2xl mb-10">
          {description}
        </motion.div>

        {ctas.length > 0 && (
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-16">
            {ctas.map((cta) => (
              <a
                key={cta.href}
                href={cta.href}
                className={cn(
                  "inline-flex items-center justify-center font-bold uppercase tracking-wider rounded-2xl px-10 py-4 text-base transition-all duration-300 border",
                  cta.primary
                    ? "bg-primary/20 backdrop-blur-xl border-primary/30 hover:bg-primary/40 text-foreground hover:shadow-[0_0_30px_-5px_rgba(232,96,10,0.6)]"
                    : "bg-foreground/5 backdrop-blur-xl border-border/50 text-foreground hover:bg-foreground/10"
                )}
              >
                {cta.text}
              </a>
            ))}
          </motion.div>
        )}

        {/* Extra content slot (e.g. stat badges) */}
        {children && (
          <motion.div variants={itemVariants} className="w-full">
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};
