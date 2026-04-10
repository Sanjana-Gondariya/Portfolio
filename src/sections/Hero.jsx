import { motion } from 'framer-motion';
import { ArrowDown, Code, User, FileText } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center sm:items-start text-center sm:text-left"
        >
          <motion.div variants={itemVariants} className="mb-2">
            <span className="text-sm md:text-md font-medium tracking-widest text-secondary uppercase">
              Hello, I'm
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tight mb-4">
            Sanjana Gondariya
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl lg:text-4xl text-gray-400 font-semibold mb-6">
            <span className="text-gradient">Full-Stack Developer</span> & CS Student
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
            Building interactive, user-focused web experiences with modern technologies. 
            Passionate about scalable, clean, and dynamic applications.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap flex-col sm:flex-row gap-4 items-center">
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-full bg-primary/90 hover:bg-primary text-white font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(126,34,206,0.6)]"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white font-medium transition-all duration-300"
            >
              Contact Me
            </a>
            
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-white/10 transition-all duration-300 ml-0 sm:ml-4 group">
              <FileText size={20} className="group-hover:text-secondary transition-colors" />
              <span>Resume</span>
            </a>
            <div className="flex gap-4 ml-0 sm:ml-4">
              <a href="#" className="p-3 rounded-full glass hover:bg-white/10 hover:text-white transition-all duration-300 group">
                <Code size={24} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="#" className="p-3 rounded-full glass hover:bg-white/10 hover:text-secondary transition-all duration-300 group">
                <User size={24} className="text-gray-400 group-hover:text-secondary transition-colors" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs tracking-widest text-gray-500 mb-2 uppercase">Scroll</span>
        <motion.div
           animate={{ y: [0, 10, 0] }}
           transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
