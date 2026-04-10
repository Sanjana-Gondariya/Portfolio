import { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

export default function Projects() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef(null);
  
  // Track continuous rotation
  const tiltX = useSpring(useTransform(mouseY, [0, 500], [10, -10]), { stiffness: 150, damping: 20 });
  const tiltY = useSpring(useTransform(mouseX, [0, 800], [-10, 10]), { stiffness: 150, damping: 20 });

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  function handleMouseLeave() {
    mouseX.set(400); // Center average
    mouseY.set(250);
  }

  return (
    <section id="projects" className="relative py-20 px-6 max-w-7xl mx-auto w-full min-h-screen" style={{ perspective: "1200px" }}>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10 mix-blend-screen" />
      
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A showcase of my recent work, highlighting interactive experiences.
        </p>
      </div>

      <div 
        ref={containerRef}
        className="group relative max-w-5xl mx-auto rounded-3xl bg-white/5 border border-white/10 overflow-hidden transform-gpu"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(126, 34, 206, 0.15),
                transparent 80%
              )
            `,
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
          <div className="p-10 md:p-14 flex flex-col justify-center">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-6 w-max border border-primary/30">
              Interactive Case Study
            </div>
            
            <h3 className="text-3xl font-bold mb-4">Gesture & Face-Controlled Game Platform</h3>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              An immersive web platform that uses real-time webcam mapping to play games via gestures and facial tracking. Designed and built entirely independently with responsive UI.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0" />
                <span className="text-gray-300"><strong>Bubble Popping:</strong> Finger tracking interactions.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0" />
                <span className="text-gray-300"><strong>Flappy Bird:</strong> Controlled purely by nose movement.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0" />
                <span className="text-gray-300"><strong>Rock Paper Scissors:</strong> Advanced gesture recognition.</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 mb-8">
              {['React', 'Tailwind CSS', 'MediaPipe', 'Webcam API'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white/10 rounded-md text-sm text-gray-300 border border-white/5">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a href="#" className="flex items-center gap-2 group text-white hover:text-primary transition-colors">
                <Code size={20} />
                <span className="font-medium">Source Code</span>
              </a>
              <a href="#" className="flex items-center gap-2 group text-white hover:text-secondary transition-colors">
                <ExternalLink size={20} />
                <span className="font-medium">Live Demo</span>
              </a>
            </div>
          </div>

          <div className="bg-gray-900/50 relative overflow-hidden flex items-center justify-center min-h-[300px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
            <motion.div 
              style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
              className="w-3/4 aspect-video rounded-xl overflow-hidden glass border-2 border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center justify-center relative cursor-pointer"
            >
              {/* Note: In a real environment we would load the actual screenshot/video demo here. */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80')] bg-cover bg-center opacity-40 mix-blend-luminosity hover:opacity-80 transition-opacity duration-500" />
              <div className="z-10 flex flex-col items-center">
                 <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:scale-110 hover:bg-white/20 transition-all duration-300 text-white">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
