import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { navLinks } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks
        .filter((l) => !l.external)
        .map((l) => l.href.replace('#', ''));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
        scrolled ? 'bg-surface-1/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
      )}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <a href="#home" className="group flex flex-col leading-none" onClick={handleNavClick}>
          <span className="font-mono text-sm font-semibold text-foreground tracking-wide group-hover:text-lime transition-colors">
            SANJANA//DEV
          </span>
          <span className="font-mono text-[9px] text-muted tracking-[0.2em] mt-0.5 hidden sm:block">
            FRONTEND_SYSTEM
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '').replace('/', '');
            const isActive = !link.external && activeSection === id;

            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={cn(
                    'font-mono text-xs uppercase tracking-wider px-3 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lime/50',
                    isActive
                      ? 'text-lime'
                      : 'text-muted hover:text-foreground hover:bg-surface-2'
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="lg:hidden p-2 text-foreground hover:text-lime border border-white/10 bg-surface-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime/50"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          'lg:hidden fixed inset-0 top-14 z-40 bg-background/98 border-t border-white/10 transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        )}
        aria-hidden={!isOpen}
        role={isOpen ? 'dialog' : undefined}
        aria-modal={isOpen ? true : undefined}
        aria-label={isOpen ? 'Mobile navigation menu' : undefined}
      >
        <ul className="flex flex-col p-4 gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '').replace('/', '');
            const isActive = !link.external && activeSection === id;

            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  onClick={handleNavClick}
                  className={cn(
                    'block font-mono text-sm uppercase tracking-wider px-4 py-3 border border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-lime/50',
                    isActive
                      ? 'text-lime border-lime/20 bg-lime/5'
                      : 'text-secondary hover:text-foreground hover:bg-surface-2 hover:border-white/10'
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
