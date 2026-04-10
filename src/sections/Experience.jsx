import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    role: "ITS Inventory",
    company: "Purdue University",
    period: "August 2023 - Present",
    location: "Fort Wayne, IN",
    description: "Managing inventory and tracking technical assets across the university campus. Orchestrated a significant reduction in hardware provisioning time."
  },
  {
    role: "International Orientation Leader",
    company: "Purdue University",
    period: "May 2023 - August 2023",
    location: "Fort Wayne, IN",
    description: "Guided and mentored over 100 incoming international students. Facilitated their transition into university life with comprehensive campus tours and informational sessions."
  },
  {
    role: "Office Assistant Intern",
    company: "University Administration",
    period: "Jan 2023 - May 2023",
    location: "Fort Wayne, IN",
    description: "Assisted in data entry, filing, and managing communications. Streamlined office procedures using modern software tools."
  }
];

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="relative py-20 px-6 max-w-4xl mx-auto w-full">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Professional <span className="text-gradient">Experience</span>
        </h2>
      </div>

      <div ref={ref} className="relative">
        {/* Animated Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-white/10 rounded-full md:left-1/2 md:-ml-[2px]" />
        
        <motion.div 
          className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-full md:left-1/2 md:-ml-[2px] origin-top"
          style={{ scaleY }}
        />

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 md:-ml-3 w-6 h-6 rounded-full bg-background border-4 border-primary z-10 shadow-[0_0_15px_rgba(126,34,206,0.8)] -ml-2.5" />

              {/* Content Card */}
              <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50, rotateY: idx % 2 === 0 ? 15 : -15, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, type: "spring", stiffness: 80, bounce: 0.3 }}
                  className="glass-card p-6 md:p-8 group hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(126,34,206,0.15)] transition-all transform-gpu origin-center cursor-default"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <h4 className="text-xl text-primary font-medium mb-4">{exp.company}</h4>
                  
                  <div className={`flex flex-col gap-2 mb-4 text-sm text-gray-400 ${idx % 2 === 0 ? 'md:items-end' : 'items-start'}`}>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
