import { AboutSection } from "@/components/AboutSection";
import { FloatingHomeButton } from "@/components/FloatingHomeButton";

export default function AboutPage() {
  return (
    <main className="content-frame">
      <FloatingHomeButton />
      <AboutSection />
    </main>
  );
}
