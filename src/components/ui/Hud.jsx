import { motion as Motion, useReducedMotion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function SectionHeader({ label, title, subtitle, className }) {
  return (
    <div className={cn('mb-10 md:mb-14', className)}>
      <p className="hud-label text-lime mb-3">{label}</p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function HudBadge({ children, variant = 'default', className }) {
  const variants = {
    default: 'border-white/12 text-secondary bg-surface-2',
    lime: 'border-lime/30 text-lime bg-lime/5',
    purple: 'border-purple/30 text-purple bg-purple/5',
    success: 'border-success/30 text-success bg-success/5',
    warning: 'border-warning/30 text-warning bg-warning/5',
    muted: 'border-white/8 text-muted bg-surface-1',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-mono text-[10px] sm:text-xs uppercase tracking-wider px-2.5 py-1 border',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export function StatusTag({ children, status, pulse = false }) {
  const statusStyles = {
    completed: { variant: 'success', dot: 'bg-success' },
    'in-progress': { variant: 'warning', dot: 'bg-warning' },
    default: { variant: 'muted', dot: 'bg-muted' },
  };

  const style = statusStyles[status] || statusStyles.default;

  return (
    <HudBadge variant={style.variant} className="gap-2">
      {pulse && (
        <span className={cn('w-1.5 h-1.5 rounded-full animate-pulse-soft', style.dot)} />
      )}
      {children}
    </HudBadge>
  );
}

export function PixelPanel({ children, className, hover = true, ...props }) {
  return (
    <div
      className={cn(
        'pixel-panel p-5 md:p-6',
        hover && 'transition-colors duration-300 hover:border-lime/25',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function HudDivider({ className }) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="h-px flex-1 bg-white/10" />
      <div className="w-1 h-1 bg-lime/50" />
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}

export function ActionButton({
  children,
  href,
  external = false,
  disabled = false,
  variant = 'primary',
  className,
  icon: Icon,
  type = 'button',
  onClick,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium text-sm px-4 py-2.5 border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background';

  const variants = {
    primary:
      'bg-lime/10 border-lime/40 text-lime hover:bg-lime/20 hover:border-lime/60',
    secondary:
      'bg-surface-2 border-white/12 text-foreground hover:border-lime/30 hover:text-lime',
    ghost:
      'bg-transparent border-white/10 text-secondary hover:border-white/20 hover:text-foreground',
    disabled:
      'bg-surface-1 border-white/8 text-muted cursor-not-allowed opacity-60',
  };

  const classes = cn(base, disabled ? variants.disabled : variants[variant], className);

  if (disabled) {
    return (
      <button type="button" disabled className={classes} aria-disabled="true" {...props}>
        {Icon && <Icon size={16} aria-hidden="true" />}
        {children}
      </button>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {Icon && <Icon size={16} aria-hidden="true" />}
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {Icon && <Icon size={16} aria-hidden="true" />}
      {children}
    </button>
  );
}

export function FadeIn({ children, className, delay = 0 }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </Motion.div>
  );
}

export function SkillChip({ children, emphasis = false, growth = false }) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-mono text-xs px-2.5 py-1 border',
        emphasis && 'border-lime/35 text-lime bg-lime/5',
        growth && 'border-warning/30 text-warning bg-warning/5',
        !emphasis && !growth && 'border-white/10 text-secondary bg-surface-2'
      )}
    >
      {children}
    </span>
  );
}
