import { PixelPanel, SectionHeader, FadeIn } from '../components/ui/Hud';
import { aboutPanels, aboutStats } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 px-4 sm:px-6 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="MISSION_BRIEF" title="About Me" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {aboutPanels.map((panel, idx) => (
            <FadeIn key={panel.id} delay={idx * 0.08}>
              <PixelPanel className="h-full">
                <p className="hud-label text-lime mb-3">{panel.id}</p>
                <h3 className="font-semibold text-lg mb-3">{panel.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{panel.content}</p>
              </PixelPanel>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.25} className="mt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {aboutStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-surface-2 border border-white/10 px-4 py-3"
              >
                <p className="hud-label text-[9px]">{stat.label}</p>
                <p className="font-mono text-sm text-foreground mt-1">{stat.value}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
