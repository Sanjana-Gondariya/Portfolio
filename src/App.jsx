import { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Global3D from './components/Global3D';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

function App() {
  useEffect(() => {
    // Prevent default scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen text-white font-sans selection:bg-primary/30">
      <Global3D />
      <CustomCursor />
      
      <main className="relative z-10 w-full flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
