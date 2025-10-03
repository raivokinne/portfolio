import { motion } from "framer-motion";
import AppLayout from "@/layouts/AppLayout";
import { Github, ExternalLink, Code2, Folder } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "Youtube Clone",
            description:
                "A feature-rich video sharing platform replicating YouTube's core functionality. Includes user authentication, video upload and streaming, comment system, and like/dislike features. Built with a robust backend API and responsive frontend for seamless video browsing experience.",
            technologies: ["React", "Laravel", "MySQL", "Tailwind CSS"],
            github: "https://github.com/raivokinne/youtube-clone",
            live: "#",
            featured: false,
        },
        {
            title: "Lynx",
            description:
                "A custom programming language with its own syntax and online code editor. Features real-time code execution, syntax highlighting, and an interactive development environment. Built from scratch to explore language design principles and compiler construction.",
            technologies: ["Go", "React", "Express.js"],
            github: "https://github.com/raivokinne/lynx",
            live: "https://www.lynxlang.site",
            featured: true,
        },
        {
            title: "Minamell",
            description:
                "A lightweight PHP framework designed for rapid web application development. Provides essential MVC architecture, routing system, and database abstraction layer. Built with simplicity and performance in mind for modern PHP projects.",
            technologies: ["PHP", "Composer"],
            github: "https://github.com/raivokinne/minamell",
            live: "#",
            featured: false,
        },
        {
            title: "Notes",
            description:
                "A clean and intuitive note-taking application with rich text editing, categorization, and search functionality. Features a sleek interface for organizing thoughts, ideas, and important information with seamless synchronization.",
            technologies: ["React", "Laravel", "Tailwind CSS"],
            github: "https://github.com/raivokinne/notes",
            live: null,
            featured: false,
        },
    ];

    const featuredProjects = projects.filter((p) => p.featured);
    const otherProjects = projects.filter((p) => !p.featured);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <AppLayout>
            <div className="fixed inset-0 -z-10 geometric-bg opacity-40" />

            <motion.div
                className="fixed top-32 right-16 w-32 h-32 border-2 border-foreground/10 -z-10"
                animate={{
                    rotate: [0, 90, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
            />
            <motion.div
                className="fixed bottom-32 left-16 w-24 h-24 border-2 border-foreground/10 -z-10"
                animate={{
                    rotate: [0, -90, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    clipPath:
                        "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                }}
            />

            <div className="min-h-screen w-full py-24 px-4 relative">
                <div className="max-w-6xl mx-auto space-y-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center space-y-6"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground bg-background shadow-sharp"
                        >
                            <div className="w-2 h-2 bg-foreground animate-pulse" />
                            <span className="text-sm font-mono uppercase tracking-wider">
                                Portfolio Showcase
                            </span>
                        </motion.div>
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">
                            <span className="inline-block border-8 border-foreground px-8 py-4 shadow-sharp-lg">
                                MY PROJECTS
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto border-l-4 border-foreground pl-6 text-left">
                            A collection of projects I've built to learn, experiment, and
                            solve problems
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-8"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-3"
                            whileHover={{ x: -4, y: -4 }}
                        >
                            <div className="p-3 bg-foreground text-background border-2 border-foreground shadow-sharp">
                                <Code2 className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold font-mono uppercase tracking-wider border-b-4 border-foreground pb-1">
                                Featured Projects
                            </h2>
                        </motion.div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {featuredProjects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ x: -4, y: -4 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="group bg-background border-4 border-foreground p-8 space-y-5 hover:shadow-sharp-lg transition-all relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-foreground/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

                                    <div className="flex items-start justify-between relative z-10">
                                        <motion.div
                                            whileHover={{ rotate: 90 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Folder className="w-12 h-12" />
                                        </motion.div>
                                        <div className="flex gap-3">
                                            {project.github && (
                                                <motion.a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ x: -2, y: -2 }}
                                                    whileTap={{ x: 0, y: 0 }}
                                                    className="p-2 border-2 border-foreground hover:bg-foreground hover:text-background transition-all"
                                                    aria-label="View GitHub repository"
                                                >
                                                    <Github className="w-5 h-5" />
                                                </motion.a>
                                            )}
                                            {project.live && (
                                                <motion.a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ x: -2, y: -2 }}
                                                    whileTap={{ x: 0, y: 0 }}
                                                    className="p-2 border-2 border-foreground bg-foreground text-background hover:bg-background hover:text-foreground transition-all"
                                                    aria-label="View live project"
                                                >
                                                    <ExternalLink className="w-5 h-5" />
                                                </motion.a>
                                            )}
                                        </div>
                                    </div>
                                    <div className="space-y-3 relative z-10">
                                        <h3 className="text-2xl font-bold font-mono uppercase tracking-wider border-b-2 border-foreground pb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-foreground leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-2 relative z-10">
                                        {project.technologies.map((tech, techIndex) => (
                                            <motion.span
                                                key={techIndex}
                                                whileHover={{ x: -2, y: -2 }}
                                                whileTap={{ x: 0, y: 0 }}
                                                className="px-3 py-1.5 bg-background border-2 border-foreground text-sm font-mono hover:bg-foreground hover:text-background transition-all"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-8"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-3"
                            whileHover={{ x: -4, y: -4 }}
                        >
                            <div className="p-3 bg-foreground text-background border-2 border-foreground shadow-sharp">
                                <Folder className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold font-mono uppercase tracking-wider border-b-4 border-foreground pb-1">
                                Other Projects
                            </h2>
                        </motion.div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {otherProjects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ x: -4, y: -4 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="group bg-background border-4 border-foreground p-6 space-y-4 hover:shadow-sharp-lg transition-all relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-foreground/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

                                    <div className="flex items-start justify-between relative z-10">
                                        <motion.div
                                            whileHover={{ rotate: 90 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Folder className="w-10 h-10" />
                                        </motion.div>
                                        <div className="flex gap-2">
                                            {project.github && (
                                                <motion.a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ x: -2, y: -2 }}
                                                    whileTap={{ x: 0, y: 0 }}
                                                    className="p-1.5 border-2 border-foreground hover:bg-foreground hover:text-background transition-all"
                                                    aria-label="View GitHub repository"
                                                >
                                                    <Github className="w-4 h-4" />
                                                </motion.a>
                                            )}
                                        </div>
                                    </div>
                                    <div className="space-y-2 relative z-10">
                                        <h3 className="text-lg font-bold font-mono uppercase tracking-wider border-b-2 border-foreground pb-1">
                                            {project.title}
                                        </h3>
                                        <p className="text-foreground text-sm leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-2 relative z-10">
                                        {project.technologies.map((tech, techIndex) => (
                                            <motion.span
                                                key={techIndex}
                                                whileHover={{ x: -1, y: -1 }}
                                                className="px-2.5 py-1 bg-background border-2 border-foreground text-xs font-mono hover:bg-foreground hover:text-background transition-all"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="text-center p-10 bg-white text-black border-4 border-foreground shadow-sharp-lg relative overflow-hidden"
                        whileHover={{ x: -4, y: -4 }}
                    >
                        <h3 className="text-2xl font-bold font-mono uppercase tracking-wider mb-3 pb-2 border-b-2 border-background inline-block">
                            Want to see more?
                        </h3>
                        <p className="mb-6 text-lg">
                            Check out my GitHub for more projects and contributions
                        </p>
                        <motion.a
                            href="https://github.com/raivokinne"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: -4, y: -4 }}
                            whileTap={{ x: 0, y: 0 }}
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-black text-white border-2 border-background font-mono uppercase tracking-wider shadow-sharp hover:shadow-sharp-lg transition-all relative overflow-hidden"
                        >
                            <Github className="w-5 h-5" />
                            <span>Visit GitHub</span>
                            <ExternalLink className="w-4 h-4" />
                            <div className="absolute bottom-0 left-0 h-1 bg-foreground w-full translate-y-full group-hover:translate-y-0 transition-transform" />
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </AppLayout>
    );
}
