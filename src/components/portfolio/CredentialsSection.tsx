import { FadeIn } from "./FadeIn";

const EDUCATION = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    school: "Vardhaman College of Engineering (VCE), Hyderabad · JNTUH",
    period: "Aug 2024 – 2027",
    focus: "DSA, OS, DBMS, Machine Learning, Cloud Computing, Software Engineering",
  },
  {
    degree: "Diploma — Computer Science & Engineering",
    school: "Mahaveer Institute of Science & Technology (MIST), Hyderabad",
    period: "2021 – 2024",
    focus: "Programming Fundamentals, Web Technologies, Database Systems",
  },
];

const CERTS = [
  "Smart Coder (Bronze) — Smart Interviews · Global Rank 9,503 / 53,921",
  "Solved 150+ DSA Problems (2026)",
  "Claude 101 — Anthropic",
  "Vibe Coding Fundamentals — Simplilearn SkillUp",
  "Welcome to ServiceNow — ServiceNow Micro-Certification",
  "Generative AI for All — Infosys Springboard",
  "42+ Public Repos · 114+ Followers · Pull Shark ×2",
  "Contributor to Microsoft VibeVoice and Electron",
];

export function CredentialsSection() {
  return (
    <section id="credentials" className="px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-32" style={{ background: "#0C0C0C" }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <FadeIn as="h2" delay={0} y={40}
            className="hero-heading font-black uppercase leading-none tracking-tight mb-10"
            style={{ fontSize: "clamp(2.25rem, 7vw, 96px)" }}
          >
            Education
          </FadeIn>
          <div className="flex flex-col gap-6">
            {EDUCATION.map((ed, i) => (
              <FadeIn key={ed.degree} delay={i * 0.1} y={30}>
                <div className="rounded-[28px] border-2 border-[#D7E2EA]/25 p-6 sm:p-8 hover:border-[#D7E2EA]/60 transition-colors">
                  <div className="text-[#D7E2EA] font-medium uppercase tracking-wide text-lg sm:text-xl">{ed.degree}</div>
                  <div className="text-[#D7E2EA]/60 mt-1">{ed.school}</div>
                  <div className="text-[#D7E2EA]/70 uppercase tracking-widest text-xs mt-3">{ed.period}</div>
                  <div className="text-[#D7E2EA]/60 font-light text-sm mt-3">{ed.focus}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div>
          <FadeIn as="h2" delay={0} y={40}
            className="hero-heading font-black uppercase leading-none tracking-tight mb-10"
            style={{ fontSize: "clamp(2.25rem, 7vw, 96px)" }}
          >
            Awards
          </FadeIn>
          <div className="flex flex-col gap-3">
            {CERTS.map((c, i) => (
              <FadeIn key={c} delay={i * 0.05} y={20}>
                <div className="rounded-full border border-[#D7E2EA]/25 px-5 py-3 text-[#D7E2EA]/90 text-sm sm:text-base hover:border-[#B600A8] hover:text-white transition-colors">
                  {c}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}