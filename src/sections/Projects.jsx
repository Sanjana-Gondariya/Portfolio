import { useState } from 'react';
import { ExternalLink, Play, Database, Construction } from 'lucide-react';
import { GitHubIcon } from '../components/icons/SocialIcons';
import {
  SectionHeader,
  FadeIn,
  HudBadge,
  StatusTag,
  PixelPanel,
  ActionButton,
  HudDivider,
} from '../components/ui/Hud';
import {
  GESTURE_SOURCE_URL,
  GESTURE_DEMO_URL,
  MOODLE_GITHUB_URL,
  isLinkReady,
} from '../constants/links';
import { assets, gestureProject, moodleProject } from '../data/portfolioData';

function ProjectImage({ src, alt, fallbackIcon, fallbackLabel }) {
  const [error, setError] = useState(false);
  const Fallback = fallbackIcon;

  if (error) {
    return (
      <div className="w-full aspect-video bg-surface-2 border border-white/10 flex flex-col items-center justify-center gap-3">
        <Fallback size={32} className="text-muted" aria-hidden="true" />
        <span className="hud-label">{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full aspect-video object-cover border border-white/10"
      onError={() => setError(true)}
    />
  );
}

export default function Projects() {
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  return (
    <section id="projects" className="relative py-20 md:py-28 px-4 sm:px-6 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="MISSION_BOARD"
          title="Selected Projects"
          subtitle="Interactive builds, frontend systems, and current full-stack growth."
        />

        <FadeIn>
          <PixelPanel className="p-0 overflow-hidden mb-8 border-lime/15">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-6 md:p-8 lg:p-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  <HudBadge variant="lime">FEATURED_MISSION</HudBadge>
                  <StatusTag status="completed">STATUS: COMPLETED</StatusTag>
                  <HudBadge variant="purple">ROLE: FRONTEND_LEAD</HudBadge>
                  <HudBadge variant="muted">TYPE: INTERACTIVE_WEB_APP</HudBadge>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                  {gestureProject.title}
                </h3>

                <div className="flex flex-wrap gap-x-4 gap-y-1 mb-5">
                  <span className="font-mono text-xs text-muted">{gestureProject.period}</span>
                  <span className="font-mono text-xs text-muted">{gestureProject.context}</span>
                </div>

                <p className="text-secondary leading-relaxed mb-5">{gestureProject.description}</p>

                <p className="hud-label text-lime mb-2">Built</p>
                <ul className="space-y-2 mb-5">
                  {gestureProject.games.map((game) => (
                    <li key={game} className="flex items-start gap-2 text-sm text-secondary">
                      <span className="text-lime mt-1.5 text-[8px]" aria-hidden="true">▸</span>
                      {game}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {gestureProject.tech.map((tech) => (
                    <HudBadge key={tech} variant="muted">
                      {tech}
                    </HudBadge>
                  ))}
                </div>

                <p className="text-sm text-muted mb-6 leading-relaxed">{gestureProject.teamNote}</p>

                <div className="flex flex-wrap gap-3">
                  <ActionButton
                    href={isLinkReady(GESTURE_SOURCE_URL) ? GESTURE_SOURCE_URL : undefined}
                    variant="primary"
                    external
                    disabled={!isLinkReady(GESTURE_SOURCE_URL)}
                    icon={GitHubIcon}
                  >
                    Source Code
                  </ActionButton>
                  <ActionButton
                    href={isLinkReady(GESTURE_DEMO_URL) ? GESTURE_DEMO_URL : undefined}
                    variant="secondary"
                    external
                    disabled={!isLinkReady(GESTURE_DEMO_URL)}
                    icon={ExternalLink}
                  >
                    Live Demo
                  </ActionButton>
                  <ActionButton
                    variant="ghost"
                    icon={Play}
                    aria-expanded={showCaseStudy}
                    onClick={() => setShowCaseStudy(!showCaseStudy)}
                  >
                    {showCaseStudy ? 'Hide Case Study' : 'Case Study'}
                  </ActionButton>
                </div>

                {showCaseStudy && (
                  <div className="mt-6 space-y-4 border-t border-white/10 pt-6">
                    {gestureProject.caseStudy.map((block) => (
                      <div key={block.label}>
                        <p className="hud-label text-lime mb-1">{block.label.toUpperCase()}</p>
                        <p className="text-sm text-secondary leading-relaxed">{block.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="bg-surface-2 border-t lg:border-t-0 lg:border-l border-white/10 p-6 md:p-8 flex items-center">
                <ProjectImage
                  src={assets.gestureImage}
                  alt={gestureProject.imageAlt}
                  fallbackIcon={Play}
                  fallbackLabel="GESTURE_PLATFORM_PREVIEW"
                />
              </div>
            </div>
          </PixelPanel>
        </FadeIn>

        <FadeIn delay={0.1}>
          <PixelPanel className="p-0 overflow-hidden border-warning/15">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-surface-2 border-b lg:border-b-0 lg:border-r border-white/10 p-6 md:p-8 flex items-center order-2 lg:order-1">
                <div className="w-full">
                  <div
                    className="aspect-video bg-surface-3 border border-dashed border-warning/25 flex flex-col items-center justify-center gap-4 relative overflow-hidden"
                    aria-hidden="true"
                  >
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          'linear-gradient(rgba(255,216,77,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,216,77,0.1) 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                      }}
                    />
                    <Database size={36} className="text-warning/60 relative z-10" />
                    <div className="relative z-10 text-center">
                      <p className="hud-label text-warning">SYSTEM_UNDER_CONSTRUCTION</p>
                      <p className="font-mono text-xs text-muted mt-2">
                        Database schema · Course modules · User flows
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 lg:p-10 order-1 lg:order-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  <HudBadge variant="warning">CURRENT_BUILD</HudBadge>
                  <StatusTag status="in-progress" pulse>
                    STATUS: IN_PROGRESS
                  </StatusTag>
                  <HudBadge variant="muted">TYPE: FULL_STACK_DATABASE_GROWTH</HudBadge>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                  {moodleProject.title}
                </h3>

                <p className="font-mono text-xs text-muted mb-5">Role: {moodleProject.role}</p>

                <p className="text-secondary leading-relaxed mb-5">{moodleProject.description}</p>

                <ul className="space-y-2 mb-5">
                  {moodleProject.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-secondary">
                      <span className="text-warning mt-1.5 text-[8px]" aria-hidden="true">▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {moodleProject.tech.map((tech) => (
                    <HudBadge key={tech} variant="muted">
                      {tech}
                    </HudBadge>
                  ))}
                </div>

                <HudDivider className="mb-6" />

                <div className="flex flex-wrap gap-3">
                  <ActionButton
                    href={isLinkReady(MOODLE_GITHUB_URL) ? MOODLE_GITHUB_URL : undefined}
                    variant="primary"
                    external
                    disabled={!isLinkReady(MOODLE_GITHUB_URL)}
                    icon={GitHubIcon}
                  >
                    View GitHub
                  </ActionButton>
                  <ActionButton variant="disabled" disabled icon={Construction}>
                    Backend In Progress
                  </ActionButton>
                  <ActionButton variant="disabled" disabled icon={Database}>
                    Database Schema Coming Soon
                  </ActionButton>
                </div>
              </div>
            </div>
          </PixelPanel>
        </FadeIn>
      </div>
    </section>
  );
}
