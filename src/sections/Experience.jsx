import { MapPin, Calendar } from 'lucide-react';
import { SectionHeader, FadeIn, PixelPanel, HudBadge } from '../components/ui/Hud';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-28 px-4 sm:px-6 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="EXPERIENCE_LOG" title="Mission History" />

        <div className="relative" role="list" aria-label="Work experience timeline">
          <div
            className="absolute left-[11px] top-2 bottom-2 w-px bg-white/10"
            aria-hidden="true"
          />

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <FadeIn key={exp.role} delay={idx * 0.08}>
                <div className="relative pl-10" role="listitem">
                  <div
                    className="absolute left-0 top-6 w-[23px] h-[23px] border-2 border-lime/50 bg-surface-1 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <div className="w-1.5 h-1.5 bg-lime" />
                  </div>

                  <PixelPanel>
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <p className="text-purple font-medium text-sm mt-1">{exp.company}</p>
                      </div>
                      <HudBadge variant="muted">LOG_{String(idx + 1).padStart(2, '0')}</HudBadge>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4">
                      <span className="flex items-center gap-1.5 font-mono text-xs text-muted">
                        <Calendar size={12} aria-hidden="true" />
                        <time>{exp.period}</time>
                      </span>
                      <span className="flex items-center gap-1.5 font-mono text-xs text-muted">
                        <MapPin size={12} aria-hidden="true" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2.5">
                      {exp.bullets.map((bullet) => (
                        <li
                          key={bullet.slice(0, 40)}
                          className="flex items-start gap-2 text-sm text-secondary leading-relaxed"
                        >
                          <span className="text-lime mt-1.5 text-[8px] shrink-0" aria-hidden="true">
                            ▸
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </PixelPanel>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
