export default function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Base */}
      <div className="absolute inset-0 bg-background" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Hero radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(900px,100vw)] h-[500px] opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(229, 247, 92, 0.08) 0%, rgba(139, 140, 255, 0.05) 40%, transparent 70%)',
        }}
      />

      {/* Subtle noise texture via CSS */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Scanlines */}
      <div
        className="absolute inset-0 opacity-[0.03] motion-reduce:hidden"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
        }}
      />

      {/* Animated scan line */}
      <div className="absolute inset-0 overflow-hidden motion-reduce:hidden">
        <div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime/20 to-transparent animate-scan"
          style={{ top: '-1px' }}
        />
      </div>
    </div>
  );
}
