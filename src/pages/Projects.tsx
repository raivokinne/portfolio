import { motion } from "framer-motion";
import AppLayout from "@/layouts/AppLayout";
import { Github, ExternalLink, Code2, Folder, Sparkles } from "lucide-react";

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
      {/* Animated background gradient */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="min-h-screen w-full py-24 px-4 relative">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/20 mb-4"
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Portfolio Showcase
              </span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A collection of projects I've built to learn, experiment, and
              solve problems
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Featured Projects
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group bg-white/80 backdrop-blur-sm border-2 border-white/50 rounded-2xl p-8 space-y-5 hover:shadow-2xl hover:border-purple-200 transition-all relative overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                  <div className="flex items-start justify-between">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Folder className="w-12 h-12 text-purple-600" />
                    </motion.div>
                    <div className="flex gap-3">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 text-slate-600 hover:text-purple-600 transition-colors rounded-lg hover:bg-purple-50"
                          aria-label="View GitHub repository"
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          whileHover={{ scale: 1.2, rotate: -5 }}
                          target="_blank"
                          whileTap={{ scale: 0.9 }}
                          className="p-2 text-slate-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50"
                          aria-label="View live project"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1.5 bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 rounded-lg text-sm font-medium border border-slate-200 hover:border-purple-300 transition-all"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Projects */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3"
            >
              <div className="p-2 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg">
                <Folder className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Other Projects
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group bg-white/70 backdrop-blur-sm border border-white/60 rounded-xl p-6 space-y-4 hover:shadow-xl hover:border-blue-200 transition-all relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                  <div className="flex items-start justify-between">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Folder className="w-10 h-10 text-slate-700 group-hover:text-blue-600 transition-colors" />
                    </motion.div>
                    <div className="flex gap-2">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.2 }}
                          target="_blank"
                          whileTap={{ scale: 0.9 }}
                          className="p-1.5 text-slate-500 hover:text-slate-900 transition-colors rounded-lg hover:bg-slate-100"
                          aria-label="View GitHub repository"
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.05 }}
                        className="px-2.5 py-1 bg-slate-50 text-slate-600 rounded-md text-xs font-medium border border-slate-200 hover:border-blue-300 transition-all"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center p-10 bg-gradient-to-br from-slate-50 to-white border-2 border-white/50 rounded-2xl shadow-xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 opacity-50 -z-10" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-3">
              Want to see more?
            </h3>
            <p className="text-slate-600 mb-6 text-lg">
              Check out my GitHub for more projects and contributions
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Github className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Visit GitHub</span>
              <ExternalLink className="w-4 h-4 relative z-10" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </AppLayout>
  );
}
