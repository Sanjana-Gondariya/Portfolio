import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Code, User, ArrowUp } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("This is a demo. In production, this would send an email!");
  };

  return (
    <section id="contact" className="relative py-20 px-6 max-w-7xl mx-auto w-full" style={{ perspective: "1500px" }}>
      <div className="absolute bottom-0 left-1/2 w-full h-[500px] bg-primary/10 rounded-t-full blur-[120px] -translate-x-1/2 -z-10 mix-blend-screen" />

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, rotateX: 20, y: 50 }}
        whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mt-12 bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-sm shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] transform-gpu origin-bottom"
      >
        
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-8">
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
          
          <div className="space-y-6">
            <motion.a 
              href="mailto:sanjanaplayz@gmail.com"
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 text-gray-300 hover:text-white group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
                <Mail size={20} className="group-hover:text-primary" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Email</p>
                <p className="font-medium">sanjanaplayz@gmail.com</p>
              </div>
            </motion.a>

            <motion.a 
              href="tel:+12602106234"
              whileHover={{ x: 5 }}
              className="flex items-center gap-4 text-gray-300 hover:text-white group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-secondary/20 group-hover:border-secondary/50 transition-colors">
                <Phone size={20} className="group-hover:text-secondary" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Phone</p>
                <p className="font-medium">+1 260-210-6234</p>
              </div>
            </motion.a>

            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Location</p>
                <p className="font-medium">Purdue University, IN</p>
              </div>
            </div>
          </div>
          
          <div className="pt-8 mt-8 border-t border-white/10">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Socials</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all text-white">
                <Code size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary/20 hover:text-secondary hover:border-secondary/30 hover:scale-110 transition-all text-white">
                <User size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-400">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-400">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-gray-400">Subject</label>
              <input 
                type="text" 
                id="subject" 
                required
                placeholder="Project Inquiry"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
              <textarea 
                id="message" 
                required
                rows="5"
                placeholder="Hello Sanjana..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <span>Send Message</span>
              <Send size={18} />
            </button>
          </form>
        </div>
      </motion.div>

      <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Sanjana Gondariya. All rights reserved.
        </p>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <ArrowUp size={18} className="text-gray-400" />
        </button>
      </div>
    </section>
  );
}
