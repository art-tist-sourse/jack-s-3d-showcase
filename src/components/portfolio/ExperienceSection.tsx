import { FadeIn } from "./FadeIn";

const EXP = [
  {
    role: "System Administrator Intern",
    company: "ServiceNow",
    period: "Mar 2026 – Present",
    location: "Remote",
    bullets: [
      "Configuring and administering the ServiceNow Now Platform for IT service management workflows.",
      "Managing users, roles, groups and access controls; building service catalog items, forms and business rules.",
      "Implementing ITSM processes across Incident, Problem and Change Management with reports and SLA dashboards.",
    ],
  },
  {
    role: "Trainee — DSA & Problem Solving",
    company: "Smart Interviews",
    period: "May 2025 – Present",
    location: "On-site",
    bullets: [
      "Intensive training in data structures, algorithms and advanced problem solving.",
      "Solved 150+ DSA problems and earned Smart Coder (Bronze) — Global Rank 9,503 / 53,921.",
      "Collaborating with peers and mentors on best practices, code reviews and mock interviews.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Edunet Foundation",
    period: "Mar 2025 – Present",
    location: "Hyderabad, India",
    bullets: [
      "Developing a recipe sharing platform with the team — full CRUD, auth and responsive UI.",
      "Built 6+ RESTful endpoints in Express connecting React frontend to MongoDB.",
      "Shipping features and bug fixes through Agile stand-ups and code reviews with a 4-person team.",
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