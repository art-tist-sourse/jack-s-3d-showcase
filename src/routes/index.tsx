import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { MarqueeSection } from "@/components/portfolio/MarqueeSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { CredentialsSection } from "@/components/portfolio/CredentialsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { CursorFollower } from "@/components/portfolio/CursorFollower";
import { PageLoader } from "@/components/portfolio/PageLoader";
import { BackToTop } from "@/components/portfolio/BackToTop";
import { AmbientOrbs } from "@/components/portfolio/AmbientOrbs";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main style={{ background: "#0C0C0C", overflowX: "clip", position: "relative" }}>
      <PageLoader />
      <ScrollProgress />
      <CursorFollower />
      <AmbientOrbs />
      <div style={{ position: "relative", zIndex: 1 }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceSection />
      <CredentialsSection />
      <ContactSection />
      </div>
      <BackToTop />
    </main>
  );
}
