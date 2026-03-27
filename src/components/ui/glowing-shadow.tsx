"use client";

import { useEffect, type ReactNode } from "react";

interface GlowingShadowProps {
  children: ReactNode;
  className?: string;
}

const glowStyles = `
  @property --rotate {
    syntax: "<number>";
    inherits: true;
    initial-value: 0;
  }
  @property --bg-y {
    syntax: "<number>";
    inherits: true;
    initial-value: 0;
  }
  @property --bg-x {
    syntax: "<number>";
    inherits: true;
    initial-value: 0;
  }
  @property --glow-translate-y {
    syntax: "<number>";
    inherits: true;
    initial-value: 0;
  }
  @property --bg-size {
    syntax: "<number>";
    inherits: true;
    initial-value: 0;
  }
  @property --glow-opacity {
    syntax: "<number>";
    inherits: true;
    initial-value: 0;
  }
  @property --glow-blur {
    syntax: "<number>";
    inherits: true;
    initial-value: 0;
  }
  @property --glow-scale {
    syntax: "<number>";
    inherits: true;
    initial-value: 2;
  }
  @property --glow-radius {
    syntax: "<number>";
    inherits: true;
    initial-value: 2;
  }
  @property --white-shadow {
    syntax: "<number>";
    inherits: true;
    initial-value: 0;
  }

  .tn-glow-container {
    --brand-color: hsl(22deg 95% 55%);
    --brand-dark:  hsl(22deg 95% 35%);
    --card-color:  hsl(0deg 0% 12%);
    --card-radius: 0px;
    --border-width: 1px;
    --bg-size: 1;
    --animation-speed: 5s;
    --interaction-speed: 0.55s;
    --glow-scale: 1.5;
    --scale-factor: 1;
    --glow-blur: 6;
    --glow-opacity: 0.7;
    --glow-radius: 100;
    --glow-rotate-unit: 1deg;
    position: relative;
    z-index: 2;
    border-radius: var(--card-radius);
    cursor: default;
    display: block;
    width: 100%;
  }

  .tn-glow-container:before,
  .tn-glow-container:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: var(--card-radius);
  }

  .tn-glow-content {
    position: relative;
    background: transparent;
    border-radius: var(--card-radius);
    display: flex;
    align-items: flex-start;
    width: 100%;
  }

  .tn-glow-content:before {
    content: "";
    display: block;
    position: absolute;
    width: calc(100% + var(--border-width));
    height: calc(100% + var(--border-width));
    border-radius: var(--card-radius);
    z-index: -1;
    background: hsl(22deg 0% 16%) radial-gradient(
      30% 30% at calc(var(--bg-x) * 1%) calc(var(--bg-y) * 1%),
      hsl(22deg 100% 90%) calc(0%  * var(--bg-size)),
      hsl(22deg 100% 70%) calc(20% * var(--bg-size)),
      hsl(22deg 100% 50%) calc(40% * var(--bg-size)),
      transparent 100%
    );
    animation: tn-rotate-bg var(--animation-speed) linear infinite;
    transition: --bg-size var(--interaction-speed) ease;
    opacity: 0.15;
  }

  .tn-glow {
    --glow-translate-y: 0;
    display: block;
    position: absolute;
    width: 40px;
    height: 40px;
    animation: tn-rotate var(--animation-speed) linear infinite;
    transform: rotateZ(calc(var(--rotate) * var(--glow-rotate-unit)));
    transform-origin: center;
    border-radius: calc(var(--glow-radius) * 10vw);
    pointer-events: none;
  }

  .tn-glow:after {
    content: "";
    display: block;
    z-index: -2;
    filter: blur(calc(var(--glow-blur) * 8px));
    width: 130%;
    height: 130%;
    left: -15%;
    top: -15%;
    background: hsl(22deg 95% 60%);
    position: relative;
    border-radius: calc(var(--glow-radius) * 10vw);
    transform: scaleY(calc(var(--glow-scale) * var(--scale-factor) / 1.1))
               scaleX(calc(var(--glow-scale) * var(--scale-factor) * 1.2))
               translateY(calc(var(--glow-translate-y) * 1%));
    opacity: var(--glow-opacity);
  }

  .tn-glow-container:hover .tn-glow-content:before {
    --bg-size: 12;
    opacity: 0.25;
    animation-play-state: paused;
    transition: --bg-size var(--interaction-speed) ease;
  }

  .tn-glow-container:hover .tn-glow {
    --glow-blur: 1.5;
    --glow-opacity: 0.5;
    --glow-scale: 2.5;
    --glow-radius: 0;
    --rotate: 900;
    --glow-rotate-unit: 0;
    --scale-factor: 1.25;
    animation-play-state: paused;
  }

  .tn-glow-container:hover .tn-glow:after {
    animation-play-state: paused;
    transition: --glow-blur 0.05s ease, --glow-opacity 0.05s ease,
                --glow-scale 0.05s ease, --glow-radius 0.05s ease;
  }

  @keyframes tn-rotate-bg {
    0%   { --bg-x: 0;   --bg-y: 0;   }
    25%  { --bg-x: 100; --bg-y: 0;   }
    50%  { --bg-x: 100; --bg-y: 100; }
    75%  { --bg-x: 0;   --bg-y: 100; }
    100% { --bg-x: 0;   --bg-y: 0;   }
  }

  @keyframes tn-rotate {
    from { --rotate: -70;           --glow-translate-y: -65; }
    to   { --rotate: calc(360 - 70); --glow-translate-y: -65; }
  }
`;

let injected = false;

export function GlowingShadow({ children, className = "" }: GlowingShadowProps) {
  useEffect(() => {
    if (!injected) {
      const style = document.createElement("style");
      style.textContent = glowStyles;
      document.head.appendChild(style);
      injected = true;
    }
  }, []);

  return (
    <div className={`tn-glow-container ${className}`}>
      <span className="tn-glow" />
      <div className="tn-glow-content">{children}</div>
    </div>
  );
}
