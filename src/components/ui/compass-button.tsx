import React from "react"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

// Compass arrow needle shape — points up by default, rotated per direction
const CompassArrow = ({ rotation }: { rotation: number }) => (
  <svg
    viewBox="0 0 20 28"
    className="w-full h-auto"
    style={{ transform: `rotate(${rotation}deg)` }}
    fill="#FE652A"
  >
    <polygon points="10,0 16,18 10,13 4,18" />
  </svg>
)

interface CompassButtonProps {
  children: React.ReactNode
  to?: string        // react-router internal link
  href?: string      // anchor / hash link
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  className?: string
  arrowsClassName?: string
  disabled?: boolean
}

export function CompassButton({
  children,
  to,
  href,
  onClick,
  type = "button",
  className,
  arrowsClassName,
  disabled,
}: CompassButtonProps) {
  const base = cn(
    "group relative inline-flex items-center justify-center gap-2",
    "px-10 py-4 text-base font-bold uppercase tracking-wider",
    "bg-primary text-[#FCECBB]",
    "border-[3px] border-primary rounded-md",
    "shadow-[0_0_0_rgba(254,101,42,0.55)]",
    "transition-all duration-300 ease-in-out",
    "cursor-pointer select-none",
    "hover:bg-transparent hover:text-primary hover:shadow-[0_0_25px_rgba(254,101,42,0.55)]",
    "active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
    "overflow-visible",
    className
  )

  const arrows = (
    <span className={arrowsClassName}>
      {/* NW */}
      <div className="absolute top-[20%] left-[20%] w-[16px] z-[-5] pointer-events-none transition-all duration-[1000ms] ease-[cubic-bezier(0.05,0.83,0.43,0.96)] group-hover:top-[-80%] group-hover:left-[-30%] group-hover:z-[2]">
        <CompassArrow rotation={-45} />
      </div>
      {/* N */}
      <div className="absolute top-[45%] left-[45%] w-[11px] z-[-5] pointer-events-none transition-all duration-[1000ms] ease-[cubic-bezier(0,0.4,0,1.01)] group-hover:top-[-90%] group-hover:left-[42%] group-hover:z-[2]">
        <CompassArrow rotation={0} />
      </div>
      {/* NE */}
      <div className="absolute top-[40%] left-[40%] w-[7px] z-[-5] pointer-events-none transition-all duration-[1000ms] ease-[cubic-bezier(0,0.4,0,1.01)] group-hover:top-[-50%] group-hover:left-[110%] group-hover:z-[2]">
        <CompassArrow rotation={45} />
      </div>
      {/* SE */}
      <div className="absolute top-[20%] left-[40%] w-[9px] z-[-5] pointer-events-none transition-all duration-[800ms] ease-[cubic-bezier(0,0.4,0,1.01)] group-hover:top-[100%] group-hover:left-[80%] group-hover:z-[2]">
        <CompassArrow rotation={135} />
      </div>
      {/* S */}
      <div className="absolute top-[25%] left-[45%] w-[13px] z-[-5] pointer-events-none transition-all duration-[600ms] ease-[cubic-bezier(0,0.4,0,1.01)] group-hover:top-[100%] group-hover:left-[42%] group-hover:z-[2]">
        <CompassArrow rotation={180} />
      </div>
      {/* SW */}
      <div className="absolute top-[5%] left-[50%] w-[5px] z-[-5] pointer-events-none transition-all duration-[800ms] ease-in-out group-hover:top-[80%] group-hover:left-[-20%] group-hover:z-[2]">
        <CompassArrow rotation={225} />
      </div>
    </span>
  )

  if (to) {
    return (
      <Link to={to} className={base}>
        {children}
        {arrows}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={base}>
        {children}
        {arrows}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
      {arrows}
    </button>
  )
}
