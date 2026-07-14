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

type Cert = { name: string; org: string; tag: string; year: string };

const CERTS: Cert[] = [
  { name: "ServiceNow System Administrator — Internship", org: "ServiceNow", tag: "Internship", year: "2026" },
  { name: "Micro-Certification — Welcome to ServiceNow", org: "ServiceNow", tag: "Cloud", year: "2026" },
  { name: "Claude 101 — Certificate of Completion", org: "Anthropic", tag: "AI", year: "2026" },
  { name: "McKinsey Forward Program", org: "McKinsey & Company", tag: "Program", year: "2026" },
  { name: "Smart Interviews Certificate", org: "Smart Interviews", tag: "DSA", year: "2026" },
  { name: "SANSAD — National Youth Indian Parliament", org: "IIT Kharagpur", tag: "Quiz", year: "2026" },
  { name: "HackTheRank Online Quiz Event", org: "HackerRank", tag: "Quiz", year: "2026" },
  { name: "Apertre Product Submission", org: "GDG × Hack2Skill", tag: "Google", year: "2026" },
  { name: "Guide to Vibe Coding in Windsurf", org: "Analytics Vidhya", tag: "Vibe Coding", year: "2026" },
  { name: "Vibe Coding Course", org: "Simplilearn SkillUp", tag: "Vibe Coding", year: "2026" },
  { name: "Gen AI Exchange Hackathon", org: "Google Cloud × Hack2Skill", tag: "AI / Cloud", year: "2026" },
  { name: "Certificate of Excellence — DSA MasterMind", org: "Lets Code · CodeClash", tag: "DSA", year: "2025" },
  { name: "24 Hour Hackathon Drill", org: "TechIn × Eduknox", tag: "Hackathon", year: "2025" },
  { name: "Indian Independence Day Quiz 2025", org: "MyGOV", tag: "Quiz", year: "2025" },
  { name: "Building Agents with Vertex AI", org: "LinkedIn Learning", tag: "AI / Cloud", year: "2025" },
  { name: "GDG on Campus Solution Challenge", org: "GDG × Hack2Skill", tag: "Google", year: "2025" },
  { name: "Web Dev with Python & Django", org: "Connect Club × CodeTantra", tag: "Django", year: "2025" },
  { name: "Microsoft AI Innovators Hub — AI Workshop", org: "Microsoft Campus, Gachibowli", tag: "Microsoft", year: "2025" },
  { name: "OpenAI Academy × NxtWave Regional Buildathon", org: "OpenAI × NxtWave", tag: "OpenAI", year: "2025" },
  { name: "Certificate of Appreciation — IntelliCON 2025", org: "Global AI Hyderabad", tag: "AI Ops", year: "2025" },
  { name: "Linguaskill Business — English Proficiency (CEFR B1)", org: "Cambridge Assessment", tag: "English", year: "2025" },
  { name: "Generative AI for All", org: "Infosys Springboard", tag: "AI", year: "2025" },
  { name: "Cybersecurity Course", org: "Skill India Digital Hub", tag: "Security", year: "2025" },
  { name: "CRUD Operations in MongoDB", org: "MongoDB", tag: "Database", year: "2025" },
  { name: "Introduction to SAP", org: "SAP", tag: "Enterprise", year: "2025" },
];

export function CredentialsSection() {
  return (
    <section id="credentials" className="px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-32" style={{ background: "#0C0C0C" }}>
      <div className="max-w-6xl mx-auto flex flex-col gap-20 lg:gap-24">
        <div>
          <FadeIn as="h2" delay={0} y={40}
            className="hero-heading font-black uppercase leading-none tracking-tight mb-10"
            style={{ fontSize: "clamp(2.5rem, 9vw, 120px)" }}
          >
            Education
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            style={{ fontSize: "clamp(2.5rem, 9vw, 120px)" }}
          >
            Certifications
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTS.map((c, i) => (
              <FadeIn key={c.name} delay={Math.min(i * 0.03, 0.4)} y={20}>
                <div className="h-full rounded-[24px] border border-[#D7E2EA]/25 p-5 hover:border-[#B600A8] hover:-translate-y-1 transition-all flex flex-col gap-2">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-widest">
                    <span className="text-[#B600A8]">{c.tag}</span>
                    <span className="text-[#D7E2EA]/50">{c.year}</span>
                  </div>
                  <div className="text-[#D7E2EA] font-medium leading-snug text-sm sm:text-base">{c.name}</div>
                  <div className="text-[#D7E2EA]/50 text-xs">{c.org}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}