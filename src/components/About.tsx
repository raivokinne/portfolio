import { SectionHeading, SectionSubtitle, FadeIn } from "@/components/SectionHeading";

const skillsCategories = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS", "Htmx"] },
  { category: "Backend", items: ["Golang", "Express.js", "PHP", "Laravel"] },
  { category: "Database", items: ["SQLite", "PostgreSQL", "MySQL"] },
  { category: "Tools", items: ["Tmux", "Neovim", "Docker", "Git"] },
];

export default function About() {
  return (
    <section id="about" className="min-h-dvh py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <SectionHeading>About</SectionHeading>
          <SectionSubtitle>Get to know me and what I do</SectionSubtitle>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-5">
            <FadeIn>
              <p className="text-lg leading-relaxed">
                I'm a Programming Technician and Full-Stack Developer from
                Cēsis, Latvia, with a passion for building modern web applications.
                I studied at Vidzemes Technology and Design Technical School, where I
                developed a strong foundation in software development.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                What started as curiosity about how websites work has evolved into a
                genuine love for creating digital experiences. I enjoy the entire
                process of building applications — from planning and design to
                implementation and deployment.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I actively work on personal projects and continuously explore new
                frameworks and technologies. I believe the best way to learn is by
                building real things and solving actual problems.
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {skillsCategories.map((group, i) => (
              <FadeIn key={group.category} delay={i * 0.1}>
                <div>
                  <h3 className="text-xs font-mono tracking-widest text-muted-foreground mb-3 uppercase">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(skill => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm font-mono border border-foreground/10 rounded-md bg-background/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
