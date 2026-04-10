import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const skills = [
  { category: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
  { category: "Backend & Programming", items: ["Java", "C"] },
  { category: "Tools", items: ["Git", "GitHub", "Linux", "VirtualBox"] },
  { category: "Concepts", items: ["REST APIs", "Agile/Scrum", "Computer Networks", "Security"] }
];

function SkillCard({ skillGroup, idx, itemVariants }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the tilt transition
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Map mouse position to rotation values
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      ref={ref}
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="glass-card p-8 group relative perspective-1000 origin-center"
    >
      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)]" style={{ transform: "translateZ(30px)" }}>
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary to-secondary">
          {String(idx + 1).padStart(2, '0')}
        </span>
      </div>
      
      <h3 className="text-xl font-bold mb-4 text-white" style={{ transform: "translateZ(40px)" }}>
        {skillGroup.category}
      </h3>
      
      <ul className="space-y-3" style={{ transform: "translateZ(20px)" }}>
        {skillGroup.items.map((item, idy) => (
          <li key={idy} className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-3 shadow-[0_0_5px_rgba(14,165,233,0.8)]" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50, rotateX: 30 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, type: "spring", bounce: 0.4 }
    }
  };

  return (
    <section id="skills" className="relative min-h-screen py-20 px-6 max-w-7xl mx-auto w-full" style={{ perspective: "1500px" }}>
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Technical <span className="text-gradient">Arsenal</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          The technologies and concepts I use to bring ideas to life.
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {skills.map((skillGroup, idx) => (
          <SkillCard key={idx} skillGroup={skillGroup} idx={idx} itemVariants={itemVariants} />
        ))}
      </motion.div>
    </section>
  );
}
