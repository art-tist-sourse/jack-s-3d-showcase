import { Mail, Phone, Github, Linkedin, Globe, Code2 } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { ContactButton } from "./Buttons";

const LINKS = [
  { icon: Mail, label: "kc893825@gmail.com", href: "mailto:kc893825@gmail.com" },
  { icon: Phone, label: "+91 75690 55938", href: "tel:+917569055938" },
  { icon: Globe, label: "mudavath-kumar.me", href: "https://mudavath-kumar.me" },
  { icon: Github, label: "github.com/Mudavath-kumar", href: "https://github.com/Mudavath-kumar" },
  { icon: Linkedin, label: "linkedin.com/in/mudavath-kumar", href: "https://linkedin.com/in/mudavath-kumar" },
  { icon: Code2, label: "leetcode.com/u/Mudavath_kumar_1", href: "https://leetcode.com/u/Mudavath_kumar_1" },
];

export function ContactSection() {
  return (
    <section id="contact" className="px-5 sm:px-8 md:px-10 py-24 sm:py-32 md:py-40" style={{ background: "#0C0C0C" }}>
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10 sm:gap-14 text-center">
        <FadeIn as="h2" delay={0} y={40}
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 14vw, 200px)" }}
        >
          Let&apos;s talk
        </FadeIn>
        <FadeIn delay={0.1} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide max-w-xl" style={{ fontSize: "clamp(0.85rem, 1.4vw, 1.15rem)" }}>
            Open to Software Engineer, Full Stack, and AI / LLM roles. Based in Hyderabad, India — available worldwide.
          </p>
        </FadeIn>
        <FadeIn delay={0.2} y={20}>
          <ContactButton label="Email Me" />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-3xl mt-6">
          {LINKS.map((l, i) => (
            <FadeIn key={l.label} delay={0.25 + i * 0.05} y={20}>
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-full border-2 border-[#D7E2EA]/25 px-6 py-4 text-[#D7E2EA] hover:border-[#B600A8] hover:text-white transition-colors group"
              >
                <l.icon className="w-5 h-5 flex-shrink-0 group-hover:text-[#B600A8] transition-colors" />
                <span className="text-sm sm:text-base truncate">{l.label}</span>
              </a>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#D7E2EA]/15 w-full text-[#D7E2EA]/50 text-xs sm:text-sm uppercase tracking-widest">
          © {new Date().getFullYear()} Mudavath Kumar · Full Stack &amp; AI Engineer
        </div>
      </div>
    </section>
  );
}