import { motion } from "motion/react";
import { SectionHeading, SectionSubtitle, FadeIn } from "@/components/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="min-h-dvh py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <SectionHeading>Experience</SectionHeading>
          <SectionSubtitle>Where I've worked and what I've done</SectionSubtitle>
        </div>

        <FadeIn>
          <motion.div
            whileHover={{ y: -4 }}
            className="p-8 border border-foreground/10 rounded-xl bg-background/50 hover:border-foreground/30 hover:shadow-sm transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-lg font-bold font-mono tracking-tight">Software Development Intern</h3>
                <a
                  href="https://vendon.lv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  VENDON — vendon.lv
                </a>
              </div>
              <span className="text-xs font-mono text-muted-foreground whitespace-nowrap">Nov 2025 — Apr 2026</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Worked on internal tools and client-facing features using modern web technologies.
              Gained hands-on experience with full-stack development, code reviews, and agile workflows
              in a professional environment.
            </p>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
