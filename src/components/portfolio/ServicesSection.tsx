import { FadeIn } from "./FadeIn";

const SERVICES = [
  { n: "01", name: "Full Stack Development", d: "End-to-end web apps built with React, Next.js, Node, and FastAPI — clean architecture, REST APIs, and production-grade delivery." },
  { n: "02", name: "AI / LLM Engineering", d: "RAG pipelines, LangChain orchestration, embeddings, and prompt engineering with Claude, Groq, and OpenAI to power intelligent products." },
  { n: "03", name: "Backend & APIs", d: "Robust REST APIs, auth, and data models on Express, FastAPI, MongoDB, Supabase, and MySQL — built to scale and easy to reason about." },
  { n: "04", name: "Data & ML", d: "Applied ML on tabular and sequential data using TensorFlow and scikit-learn — from feature engineering to model evaluation and deployment." },
  { n: "05", name: "Web Design & UX", d: "Modern, conversion-focused interfaces with attention to layout, typography, and motion — designs that feel as good as they look." },
];

export function ServicesSection() {
  return (
    <section id="skills" className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32" style={{ background: "#FFFFFF" }}>
      <h2
        className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 12vw, 160px)", lineHeight: 1 }}
      >
        Skills
      </h2>
      <div className="max-w-5xl mx-auto">
        {SERVICES.map((s, i) => (
          <FadeIn key={s.n} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: i === 0 ? "1px solid rgba(12,12,12,0.15)" : undefined,
                borderBottom: "1px solid rgba(12,12,12,0.15)",
              }}
            >
              <div className="font-black leading-none" style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 10vw, 140px)" }}>
                {s.n}
              </div>
              <div className="flex-1 flex flex-col gap-3 sm:gap-4">
                <div className="font-medium uppercase" style={{ color: "#0C0C0C", fontSize: "clamp(1rem, 2.2vw, 2.1rem)", lineHeight: 1.1 }}>
                  {s.name}
                </div>
                <p className="font-light leading-relaxed max-w-2xl" style={{ color: "#0C0C0C", opacity: 0.6, fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}>
                  {s.d}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}