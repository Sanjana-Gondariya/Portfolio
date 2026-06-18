import { Mail, MapPin, FileText, Send, ArrowUp } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../components/icons/SocialIcons';
import {
  SectionHeader,
  FadeIn,
  PixelPanel,
  ActionButton,
} from '../components/ui/Hud';
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  RESUME_URL,
  isLinkReady,
} from '../constants/links';
import { contactContent, personal } from '../data/portfolioData';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const body = `From: ${name} (${email})\n\n${message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const { formPlaceholders } = contactContent;

  return (
    <section id="contact" className="relative py-20 md:py-28 px-4 sm:px-6 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="CONTACT_CHANNEL"
          title="Open a Channel"
          subtitle={contactContent.subtitle}
        />

        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
            <PixelPanel className="lg:col-span-2 space-y-6">
              <h3 className="font-semibold text-lg">Contact Details</h3>

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-start gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-lime/50 rounded-sm"
              >
                <div className="w-9 h-9 bg-surface-2 border border-white/10 flex items-center justify-center group-hover:border-lime/30 transition-colors">
                  <Mail size={16} className="text-lime" aria-hidden="true" />
                </div>
                <div>
                  <p className="hud-label text-[9px]">Email</p>
                  <p className="text-sm text-foreground mt-0.5 group-hover:text-lime transition-colors">
                    {EMAIL}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 bg-surface-2 border border-white/10 flex items-center justify-center">
                  <MapPin size={16} className="text-purple" aria-hidden="true" />
                </div>
                <div>
                  <p className="hud-label text-[9px]">Location</p>
                  <p className="text-sm text-foreground mt-0.5">{personal.location}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="hud-label mb-3">Links</p>
                <div className="flex flex-wrap gap-2">
                  <ActionButton
                    href={isLinkReady(GITHUB_URL) ? GITHUB_URL : undefined}
                    variant="secondary"
                    external
                    disabled={!isLinkReady(GITHUB_URL)}
                    icon={GitHubIcon}
                    aria-label="GitHub profile"
                  >
                    GitHub
                  </ActionButton>
                  <ActionButton
                    href={isLinkReady(LINKEDIN_URL) ? LINKEDIN_URL : undefined}
                    variant="secondary"
                    external
                    disabled={!isLinkReady(LINKEDIN_URL)}
                    icon={LinkedInIcon}
                    aria-label="LinkedIn profile"
                  >
                    LinkedIn
                  </ActionButton>
                  <ActionButton href={RESUME_URL} variant="secondary" external icon={FileText}>
                    Resume
                  </ActionButton>
                </div>
              </div>
            </PixelPanel>

            <PixelPanel className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="hud-label block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder={formPlaceholders.name}
                      className="w-full bg-surface-2 border border-white/10 px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-lime/40 focus:ring-1 focus:ring-lime/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="hud-label block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder={formPlaceholders.email}
                      className="w-full bg-surface-2 border border-white/10 px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-lime/40 focus:ring-1 focus:ring-lime/20 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="hud-label block mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder={formPlaceholders.subject}
                    className="w-full bg-surface-2 border border-white/10 px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-lime/40 focus:ring-1 focus:ring-lime/20 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="hud-label block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder={formPlaceholders.message}
                    className="w-full bg-surface-2 border border-white/10 px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-lime/40 focus:ring-1 focus:ring-lime/20 transition-colors resize-none"
                  />
                </div>

                <ActionButton
                  type="submit"
                  variant="primary"
                  icon={Send}
                  className="w-full sm:w-auto"
                >
                  Open in Email Client
                </ActionButton>
              </form>
            </PixelPanel>
          </div>
        </FadeIn>

        <footer className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} {personal.name}
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-9 h-9 border border-white/10 bg-surface-2 flex items-center justify-center hover:border-lime/30 hover:text-lime transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lime/50"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </footer>
      </div>
    </section>
  );
}
