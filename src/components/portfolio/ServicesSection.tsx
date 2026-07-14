import { FadeIn } from "./FadeIn";

const GROUPS: { title: string; items: string[] }[] = [
  { title: "Languages", items: ["Java", "C", "JavaScript", "TypeScript", "Python"] },
  { title: "Frameworks", items: ["React", "Vite", "Node.js", "Django", "GSAP", "Framer Motion"] },
  { title: "AI Engineering", items: ["RAG Pipelines", "LangChain", "Claude API", "Groq API", "Sentence Transformers", "Prompt Engineering", "Vector DBs", "Agent Design"] },
  { title: "AI Tools", items: ["ChatGPT", "Claude", "Copilot", "Cursor", "Perplexity", "Clacky", "Hugging Face", "Flowise", "Botpress"] },
  { title: "Databases", items: ["MongoDB", "MySQL", "Supabase", "Neon", "Firebase"] },
  { title: "Platforms", items: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Netlify", "AWS"] },
  { title: "Web", items: ["REST APIs", "Auth", "Responsive UI", "CRUD", "API Integration"] },
  { title: "Core CS", items: ["DSA", "OOP", "OS", "DBMS", "SE", "ML", "Cloud", "CP"] },
];

const PROFILES = [
  { name: "LeetCode", href: "https://leetcode.com/u/Mudavath_kumar_1", handle: "Mudavath_kumar_1" },
  { name: "GitHub", href: "https://github.com/Mudavath-kumar", handle: "Mudavath-kumar" },
  { name: "LinkedIn", href: "https://linkedin.com/in/mudavath-kumar-mudavath-kumar", handle: "mudavath-kumar" },
  { name: "Codeforces", href: "https://codeforces.com/", handle: "@mudavath" },
  { name: "CodeChef", href: "https://www.codechef.com/", handle: "@mudavath" },
  { name: "HackerRank", href: "https://www.hackerrank.com/", handle: "@mudavath" },
];

export function ServicesSection() {
  return (
    <section id="skills" className="relative px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-32" style={{ background: "#0C0C0C" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 sm:mb-20">
          <FadeIn as="h2" delay={0} y={40}
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Skills
          </FadeIn>
          <FadeIn delay={0.1} y={20} className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm md:max-w-xs md:text-right">
            A working toolkit built through internships, hackathons and shipped side-projects.
          </FadeIn>
        </div>

        <div className="flex flex-col divide-y divide-[#D7E2EA]/15 border-y border-[#D7E2EA]/15">
          {GROUPS.map((g, i) => (
            <FadeIn key={g.title} delay={i * 0.05} y={20}>
              <div className="grid grid-cols-12 gap-4 sm:gap-6 py-6 sm:py-8 group hover:bg-white/[0.02] transition-colors px-2 sm:px-4">
                <div className="col-span-2 sm:col-span-1 text-[#B600A8] font-medium tabular-nums text-sm sm:text-base pt-1">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="col-span-10 sm:col-span-4 md:col-span-3">
                  <div className="text-[#D7E2EA] font-black uppercase leading-tight" style={{ fontSize: "clamp(1.25rem, 2.4vw, 2rem)" }}>
                    {g.title}
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-7 md:col-span-8 flex flex-wrap gap-2 sm:gap-2.5 items-start">
                  {g.items.map((it) => (
                    <span key={it} className="text-[#D7E2EA]/75 border border-[#D7E2EA]/20 rounded-full px-3 py-1 text-xs sm:text-sm group-hover:border-[#D7E2EA]/40 transition-colors">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-24 sm:mt-28">
          <FadeIn as="h3" delay={0} y={30}
            className="hero-heading font-black uppercase leading-none tracking-tight mb-10"
            style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
          >
            Coding Profiles
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {PROFILES.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.05} y={20}>
                <a href={p.href} target="_blank" rel="noreferrer"
                  className="flex items-center justify-between rounded-full border border-[#D7E2EA]/25 px-6 py-4 text-[#D7E2EA] hover:border-[#B600A8] hover:text-white group transition-colors">
                  <div className="flex flex-col">
                    <span className="font-medium uppercase tracking-wide text-sm sm:text-base">{p.name}</span>
                    <span className="text-[#D7E2EA]/50 text-xs">{p.handle}</span>
                  </div>
                  <span className="text-[#B600A8] group-hover:translate-x-1 transition-transform">↗</span>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}