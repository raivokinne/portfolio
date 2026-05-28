import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import { SectionHeading, SectionSubtitle, FadeIn } from "@/components/SectionHeading";

const projects = [
	{
		title: "Shithead",
		description: "Online multiplayer card game client built with React. Features real-time gameplay, matchmaking, and player profiles.",
		tags: ["TypeScript", "React", "Tailwind CSS"],
		github: "https://github.com/raivokinne/shithead-client",
		live: null,
	},
	{
		title: "Shithead API",
		description: "Real-time WebSocket game server for the card game Shithead. Built with Go and Fiber, backed by PostgreSQL.",
		tags: ["Go", "PostgreSQL", "WebSocket"],
		github: "https://github.com/raivokinne/shithead-api-v2",
		live: null,
	},
	{
		title: "PHPVM",
		description: "Lightweight PHP version manager that registers system PHP installations, switches between versions, and manages PATH symlinks.",
		tags: ["PHP", "Shell"],
		github: "https://github.com/raivokinne/phpvm",
		live: null,
	},
	{
		title: "Turnikets",
		description: "Event ticketing platform with a React frontend, Laravel API, and Python service for ticket generation.",
		tags: ["TypeScript", "Laravel", "React", "Python"],
		github: "https://github.com/raivokinne/turnikets",
		live: null,
	},
	{
		title: "Lynx",
		description: "An interpreted programming language with a web-based IDE featuring real-time code execution and syntax highlighting.",
		tags: ["Go", "React", "Express.js"],
		github: "https://github.com/raivokinne/lynx",
		live: null,
	},
	{
		title: "Minamell",
		description: "A lightweight PHP framework with MVC architecture, routing, and database abstraction.",
		tags: ["PHP", "Composer"],
		github: "https://github.com/raivokinne/minamell",
		live: null,
	},
];

export default function Projects() {
	return (
		<section id="projects" className="min-h-dvh py-32 px-6 relative">
			<div className="max-w-5xl mx-auto">
				<div className="mb-16">
					<SectionHeading>Projects</SectionHeading>
					<SectionSubtitle>Things I've built to learn and experiment</SectionSubtitle>
				</div>

				<div className="grid md:grid-cols-2 gap-6">
					{projects.map((project, i) => (
						<FadeIn key={project.title} delay={i * 0.1}>
							<motion.div
								whileHover={{ y: -4 }}
								className="group p-6 border border-foreground/10 rounded-xl bg-background/50 hover:border-foreground/30 hover:shadow-sm transition-all"
							>
								<div className="flex items-start justify-between mb-4">
									<h3 className="text-lg font-bold font-mono tracking-tight">
										{project.title}
									</h3>
									<div className="flex gap-2">
										{project.github && (
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												className="p-2 text-muted-foreground hover:text-foreground transition-colors"
												aria-label="GitHub"
											>
												<Github className="w-4 h-4" />
											</a>
										)}
										{project.live && (
											<a
												href={project.live}
												target="_blank"
												rel="noopener noreferrer"
												className="p-2 text-muted-foreground hover:text-foreground transition-colors"
												aria-label="Live demo"
											>
												<ExternalLink className="w-4 h-4" />
											</a>
										)}
									</div>
								</div>
								<p className="text-sm text-muted-foreground leading-relaxed mb-4">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-1.5">
									{project.tags.map(tag => (
										<span
											key={tag}
											className="px-2.5 py-1 text-xs font-mono bg-foreground/5 rounded-md"
										>
											{tag}
										</span>
									))}
								</div>
							</motion.div>
						</FadeIn>
					))}
				</div>

				<FadeIn delay={0.3}>
					<motion.div
						whileHover={{ scale: 1.02 }}
						className="mt-10 text-center"
					>
						<a
							href="https://github.com/raivokinne"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 text-sm font-mono tracking-wider text-muted-foreground hover:text-foreground transition-colors"
						>
							<Github className="w-4 h-4" />
							See more on GitHub
							<ExternalLink className="w-3 h-3" />
						</a>
					</motion.div>
				</FadeIn>
			</div>
		</section>
	);
}
