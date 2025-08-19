"use client";

import { useEffect, useState } from "react";
import { HeroSection } from "@/components/hero-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { AboutSection } from "@/components/about-section";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { ParticleBackground } from "@/components/particle-background";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/contexts/language-context";

export default function Page() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <span className="text-slate-600 dark:text-slate-300">
          {t("loading")}
        </span>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <ScrollIndicator />
      <ParticleBackground />

      <div className="fixed right-4 top-4 z-50 flex items-center gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
    </main>
  );
}
