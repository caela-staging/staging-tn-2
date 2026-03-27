export function MarqueeTicker() {
  return (
    <div className="bg-primary py-4 overflow-hidden border-y border-primary/50">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Repeat the text multiple times to ensure continuous scrolling */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="text-white font-heading text-2xl tracking-widest uppercase mx-8">
              FIND YOUR TRUE NORTH
            </span>
            <span className="text-white/50 mx-4">•</span>
            <span className="text-white font-heading text-2xl tracking-widest uppercase mx-8">
              BUILT FOR THE TRADES
            </span>
            <span className="text-white/50 mx-4">•</span>
            <span className="text-white font-heading text-2xl tracking-widest uppercase mx-8">
              AUTHENTIC & HONEST
            </span>
            <span className="text-white/50 mx-4">•</span>
            <span className="text-white font-heading text-2xl tracking-widest uppercase mx-8">
              DEDICATED TO YOUR SUCCESS
            </span>
            <span className="text-white/50 mx-4">•</span>
            <span className="text-white font-heading text-2xl tracking-widest uppercase mx-8">
              ACTIVE PARTNER IN YOUR BUSINESS
            </span>
            <span className="text-white/50 mx-4">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
