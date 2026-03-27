"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface AnimatedTabsProps {
  tabs?: Tab[];
  defaultTab?: string;
  className?: string;
}

const AnimatedTabs = ({
  tabs = [],
  defaultTab,
  className,
}: AnimatedTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id);

  if (!tabs?.length) return null;

  return (
    <div className={cn("w-full flex flex-col gap-y-2", className)}>
      {/* Tab Pills */}
      <div className="flex gap-2 flex-wrap bg-foreground/10 backdrop-blur-sm p-1.5 rounded-xl border border-border/30">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative px-4 py-2 text-sm font-bold uppercase tracking-widest rounded-lg outline-none transition-colors text-foreground"
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-primary rounded-lg shadow-[0_0_20px_rgba(254,101,42,0.3)]"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <span className={cn("relative z-10 transition-colors", activeTab === tab.id ? "text-primary-foreground" : "text-foreground/70 hover:text-foreground")}>
              {tab.label}
            </span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-card/60 backdrop-blur-xl border border-border/50 rounded-xl overflow-hidden min-h-[420px]">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="h-full"
              >
                {tab.content}
              </motion.div>
            )
        )}
      </div>
    </div>
  );
};

export { AnimatedTabs };
