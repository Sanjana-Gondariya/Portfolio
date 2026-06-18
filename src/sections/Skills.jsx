import { SectionHeader, FadeIn, SkillChip, PixelPanel } from '../components/ui/Hud';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28 px-4 sm:px-6 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="SKILL_TREE"
          title="Technical Loadout"
          subtitle="Equipped skills and systems in active development."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {skillCategories.map((category, idx) => (
            <FadeIn key={category.id} delay={idx * 0.06}>
              <PixelPanel
                className={
                  category.emphasis
                    ? 'border-lime/20 bg-surface-1'
                    : category.growth
                      ? 'border-warning/15'
                      : ''
                }
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-base">{category.label}</h3>
                  {category.emphasis && (
                    <span className="hud-label text-lime text-[9px]">PRIMARY</span>
                  )}
                  {category.growth && (
                    <span className="hud-label text-warning text-[9px]">IN_PROGRESS</span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <SkillChip
                      key={item}
                      emphasis={category.emphasis}
                      growth={category.growth}
                    >
                      {item}
                    </SkillChip>
                  ))}
                </div>
              </PixelPanel>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
