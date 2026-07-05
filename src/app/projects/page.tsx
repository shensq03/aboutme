import { FloatingHomeButton } from "@/components/FloatingHomeButton";
import { ProjectsSection } from "@/components/ProjectsSection";

export default function ProjectsPage() {
  return (
    <main className="content-frame">
      <FloatingHomeButton />
      <ProjectsSection />
    </main>
  );
}
