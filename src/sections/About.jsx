import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [45, 0, 0, -45]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.8, 1, 1, 0.8]);

  return (
    <section id="about" ref={containerRef} className="relative min-h-screen flex items-center justify-center py-20 px-6" style={{ perspective: "1000px" }}>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 mix-blend-screen pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen pointer-events-none" />

      <motion.div 
        style={{ y, opacity, rotateX, scale, transformStyle: "preserve-3d" }}
        className="max-w-5xl mx-auto w-full glass-card p-10 md:p-16 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I am a passionate Computer Science student at Purdue University Fort Wayne, graduating in May 2027.
              </p>
              <p>
                With a strict focus on full-stack development and creating highly interactive user interfaces, I love merging logic with design. My aim is to build scalable, secure, and user-friendly applications that leave a lasting impression.
              </p>
              <p>
                Whether it's designing complex visual systems or architecting the backend logic that powers them in C and Java, I'm always looking to master new technologies.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-secondary mb-1">3.61</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">GPA</div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-primary mb-1">CS</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Major</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden glass border-2 border-white/10 shadow-2xl relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 mix-blend-overlay z-10" />
               {/* Note: In a real environment we would load the custom user image here. */}
               <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                 <span className="text-gray-500 text-2xl font-mono">[ Portrait Placeholder ]</span>
               </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/30 rounded-full blur-[30px] -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/30 rounded-full blur-[30px] -z-10" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
