import { FadeIn } from "./FadeIn";
import { AnimatedText } from "./AnimatedText";
import { ContactButton } from "./Buttons";

const STACK = [
  "React","TypeScript","Java","Django","AWS","Node.js",
  "LangChain","RAG Pipelines","Claude API","Groq API",
  "Sentence Transformers","Prompt Engineering",
];

const STATS = [
  { n: "10+", l: "Projects Built" },
  { n: "3", l: "Internships" },
  { n: "20+", l: "Technologies" },
  { n: "21+", l: "Certificates" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden">
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="" className="w-full h-auto" />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="" className="w-full h-auto" />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="" className="w-full h-auto" />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="" className="w-full h-auto" />
      </FadeIn>

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 relative z-10">
        <FadeIn as="h2" delay={0} y={40}
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          About me
        </FadeIn>
        <AnimatedText
          text="Motivated computer science and engineering student with strong skills in full stack development, cloud technologies, and AI agent engineering. Hands-on with React, Java, Django, AWS and modern AI stacks — building RAG pipelines, LangChain apps and intelligent agents with Claude, Groq and Sentence Transformers. Continuous learner with a passion for prompt engineering, aiming to contribute to innovative AI-driven teams."
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
          style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
        />
        <FadeIn delay={0.15} y={20} className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl">
          {STACK.map((s) => (
            <span key={s} className="rounded-full border border-[#D7E2EA]/30 px-4 py-1.5 text-[#D7E2EA]/80 text-xs sm:text-sm uppercase tracking-wide">
              {s}
            </span>
          ))}
        </FadeIn>
        <FadeIn delay={0.2} y={20} className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 mt-4 w-full max-w-3xl">
          {STATS.map((s) => (
            <div key={s.l} className="flex flex-col items-center text-center">
              <div className="hero-heading font-black leading-none" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>{s.n}</div>
              <div className="text-[#D7E2EA]/60 uppercase tracking-widest text-[10px] sm:text-xs mt-2">{s.l}</div>
            </div>
          ))}
        </FadeIn>
      </div>
      <div className="mt-16 sm:mt-20 md:mt-24 relative z-10">
        <FadeIn delay={0.1} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}