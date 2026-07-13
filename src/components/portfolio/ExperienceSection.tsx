import { FadeIn } from "./FadeIn";

const EXP = [
  {
    role: "Full Stack Developer Intern",
    company: "Edunet Foundation",
    period: "Apr 2023 – May 2023",
    location: "Remote",
    bullets: [
      "Built 6+ RESTful API endpoints in Express.js connecting a React frontend to MongoDB, enabling full CRUD in a 2-month sprint.",
      "Developed 4 responsive UI pages in HTML, CSS, and JavaScript with a mobile-first approach across every component.",
      "Ran Agile stand-ups with a 4-person team, led code reviews and shipped 10+ bug fixes before production deploys.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-32" style={{ background: "#0C0C0C" }}>
      <FadeIn as="h2" delay={0} y={40}
        className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-24"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Experience
      </FadeIn>
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {EXP.map((e, i) => (
          <FadeIn key={e.role} delay={i * 0.1} y={30}>
            <div className="rounded-[32px] border-2 border-[#D7E2EA]/25 p-6 sm:p-8 md:p-10 flex flex-col gap-6 hover:border-[#D7E2EA]/60 transition-colors">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <div className="text-[#D7E2EA] font-medium uppercase tracking-wide" style={{ fontSize: "clamp(1.1rem, 2vw, 1.75rem)" }}>
                    {e.role}
                  </div>
                  <div className="text-[#D7E2EA]/60 uppercase tracking-widest text-sm sm:text-base mt-1">
                    {e.company} · {e.location}
                  </div>
                </div>
                <div className="text-[#D7E2EA]/70 uppercase tracking-widest text-xs sm:text-sm">{e.period}</div>
              </div>
              <ul className="flex flex-col gap-3">
                {e.bullets.map((b) => (
                  <li key={b} className="text-[#D7E2EA]/80 font-light leading-relaxed flex gap-3" style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)" }}>
                    <span className="text-[#B600A8]">→</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}