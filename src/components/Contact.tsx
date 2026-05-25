import { motion } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { SectionHeading, SectionSubtitle, FadeIn } from "@/components/SectionHeading";

const links = [
  {
    href: "https://github.com/raivokinne",
    label: "GitHub",
    icon: Github,
    description: "Check out my repos",
  },
  {
    href: "https://www.linkedin.com/in/raivo-kinne-170a44404/",
    label: "LinkedIn",
    icon: Linkedin,
    description: "Let's connect professionally",
  },
  {
    href: "mailto:raivokinne236@gmail.com",
    label: "Email",
    icon: Mail,
    description: "raivokinne236@gmail.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="min-h-dvh py-32 px-6 relative">
      <div className="max-w-2xl mx-auto">
        <div className="mb-16">
          <SectionHeading>Connect</SectionHeading>
          <SectionSubtitle>Find me on these platforms</SectionSubtitle>
        </div>

        <FadeIn>
          <div className="space-y-4">
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-4 p-5 rounded-xl border border-foreground/10 bg-background/50 hover:bg-foreground/5 transition-colors"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
                  <link.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-sm font-medium">{link.label}</div>
                  <div className="text-xs text-muted-foreground font-mono truncate">
                    {link.description}
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground/50 group-hover:text-muted-foreground transition-colors shrink-0" />
              </motion.a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
