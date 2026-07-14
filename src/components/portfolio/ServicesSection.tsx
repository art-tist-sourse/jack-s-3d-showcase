import { FadeIn } from "./FadeIn";

const GROUPS: { title: string; items: string[] }[] = [
  { title: "Programming Languages", items: ["Java", "C", "JavaScript", "TypeScript", "Python"] },
  { title: "Libraries & Frameworks", items: ["React", "Vite", "Node.js", "Django", "GSAP", "Framer Motion"] },
  { title: "AI Agent Engineering", items: ["RAG Pipelines", "LangChain", "Claude API", "Groq API", "Sentence Transformers", "Prompt Engineering", "Vector Databases", "AI Agent Design"] },
  { title: "AI Tools", items: ["ChatGPT", "Claude AI", "GitHub Copilot", "Cursor AI", "Perplexity AI", "Clacky AI", "Hugging Face", "Flowise", "Botpress"] },
  { title: "Databases", items: ["MongoDB", "MySQL", "Supabase", "Neon (PostgreSQL)", "Firebase"] },
  { title: "Tools & Platforms", items: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Netlify", "AWS"] },
  { title: "Web Development", items: ["REST APIs", "Auth & Authorization", "Responsive Design", "Web App Development", "CRUD Design", "API Integration"] },
  { title: "Core CS", items: ["DSA", "OOP", "Operating Systems", "DBMS", "Software Engineering", "ML Fundamentals", "Cloud Computing", "Competitive Programming"] },
];

const PROFILES = [
  { name: "LeetCode", href: "https://leetcode.com/u/Mudavath_kumar_1", desc: "Solving DSA problems and sharpening algorithmic thinking." },
  { name: "Codeforces", href: "https://codeforces.com/", desc: "Competing in rated contests and CP practice." },
  { name: "CodeChef", href: "https://www.codechef.com/", desc: "Monthly cook-offs and long challenges." },
  { name: "HackerRank", href: "https://www.hackerrank.com/", desc: "Badges and certifications in languages & algorithms." },
  { name: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/", desc: "Learning core CS and cross-domain problems." },
];

export function ServicesSection() {
  return (
    <section id="skills" className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32" style={{ background: "#FFFFFF" }}>
      <h2
        className="font-black uppercase text-center mb-4"
        style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 12vw, 160px)", lineHeight: 1 }}
      >
        Skills
      </h2>
      <p className="text-center uppercase tracking-widest text-xs sm:text-sm mb-16 sm:mb-20" style={{ color: "#0C0C0C", opacity: 0.5 }}>
        My Toolkit — Skills & Expertise
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {GROUPS.map((g, i) => (
          <FadeIn key={g.title} delay={i * 0.05} y={20}>
            <div className="rounded-[28px] border border-[#0C0C0C]/15 p-6 sm:p-8 h-full hover:border-[#0C0C0C]/50 transition-colors">
              <div className="font-black uppercase mb-4" style={{ color: "#0C0C0C", fontSize: "clamp(1rem, 1.8vw, 1.5rem)" }}>
                {g.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="rounded-full border border-[#0C0C0C]/20 px-3 py-1.5 text-xs sm:text-sm" style={{ color: "#0C0C0C" }}>
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="max-w-6xl mx-auto mt-20 sm:mt-24">
        <h3 className="font-black uppercase text-center mb-10" style={{ color: "#0C0C0C", fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1 }}>
          Coding Profiles
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {PROFILES.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.05} y={20}>
              <a href={p.href} target="_blank" rel="noreferrer"
                className="block rounded-[24px] border border-[#0C0C0C]/15 p-6 hover:border-[#B600A8] hover:-translate-y-1 transition-all">
                <div className="font-black uppercase mb-2" style={{ color: "#0C0C0C", fontSize: "1.25rem" }}>{p.name}</div>
                <p className="text-sm" style={{ color: "#0C0C0C", opacity: 0.6 }}>{p.desc}</p>
                <div className="mt-4 text-xs uppercase tracking-widest" style={{ color: "#B600A8" }}>Visit Profile →</div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}