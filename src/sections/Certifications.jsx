import { Award } from 'lucide-react';
import { SectionHeader, FadeIn, PixelPanel, HudBadge } from '../components/ui/Hud';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-20 md:py-28 px-4 sm:px-6 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="CERTIFIED_MODULES"
          title="Certifications"
          subtitle="Additional learning in AI fluency and tooling."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <FadeIn key={cert.title} delay={idx * 0.08}>
              <PixelPanel className="flex gap-4 items-start">
                <div className="w-10 h-10 shrink-0 bg-purple/10 border border-purple/25 flex items-center justify-center">
                  <Award size={18} className="text-purple" aria-hidden="true" />
                </div>
                <div>
                  <HudBadge variant="purple" className="mb-2">
                    ACHIEVEMENT_UNLOCKED
                  </HudBadge>
                  <p className="font-mono text-xs text-muted mb-1">{cert.issuer}</p>
                  <h3 className="font-semibold text-sm leading-snug">{cert.title}</h3>
                </div>
              </PixelPanel>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
