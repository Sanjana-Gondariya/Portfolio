import { motion as Motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Mail, FileText } from 'lucide-react';
import { GitHubIcon } from '../components/icons/SocialIcons';
import ProfileCard from '../components/ProfileCard';
import { ActionButton } from '../components/ui/Hud';
import { GITHUB_URL, RESUME_URL, isLinkReady } from '../constants/links';
import { heroContent, hudStats } from '../data/portfolioData';

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-14 items-center">
          <Motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="hud-label text-lime mb-4">{heroContent.label}</p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-balance">
              Building polished interfaces with a{' '}
              <span className="text-lime">{heroContent.headlineAccent}</span> mindset.
            </h1>

            <p className="mt-4 text-lg sm:text-xl text-secondary font-medium">
              {heroContent.subheadline}
            </p>

            <p className="mt-6 text-base sm:text-lg text-secondary leading-relaxed max-w-xl">
              {heroContent.paragraph}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ActionButton href="#projects" variant="primary">
                View Projects
              </ActionButton>
              <ActionButton href={RESUME_URL} variant="secondary" external icon={FileText}>
                Resume
              </ActionButton>
              <ActionButton
                href={isLinkReady(GITHUB_URL) ? GITHUB_URL : undefined}
                variant="secondary"
                external
                disabled={!isLinkReady(GITHUB_URL)}
                icon={GitHubIcon}
                aria-label="GitHub profile"
              >
                GitHub
              </ActionButton>
              <ActionButton href="#contact" variant="ghost" icon={Mail}>
                Contact
              </ActionButton>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {hudStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 bg-surface-1 border border-white/10 px-3 py-2.5"
                >
                  <span className="hud-label text-[9px] shrink-0">{stat.label}:</span>
                  <span className="font-mono text-[10px] sm:text-xs text-foreground truncate">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </Motion.div>

          <Motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full max-w-sm mx-auto lg:max-w-none lg:mx-0"
          >
            <ProfileCard />
          </Motion.div>
        </div>
      </div>

      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 motion-reduce:hidden"
        aria-hidden="true"
      >
        <span className="hud-label">SCROLL</span>
        <Motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-muted" />
        </Motion.div>
      </Motion.div>
    </section>
  );
}
