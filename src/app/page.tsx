import { AboutSection } from "@/components/AboutSection";
import { HomeSection } from "@/components/HomeSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ResearchSection } from "@/components/ResearchSection";

export default function HomePage() {
  return (
    <main className="content-frame">
      <HomeSection />
      <ProjectsSection />
      <ResearchSection />
      <AboutSection />
    </main>
  );
}
