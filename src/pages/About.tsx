import { motion } from "framer-motion";
import AppLayout from "@/layouts/AppLayout";
import { Code, Lightbulb, Rocket, GraduationCap, Sparkles } from "lucide-react";

export default function About() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS", "Htmx"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Backend",
      items: ["Golang", "Express.js", "PHP", "Laravel"],
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Database",
      items: ["Sqlite", "PostgreSQL", "MySQL"],
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "Tools",
      items: ["Tmux", "Zed", "Neovim", "Docker"],
      color: "from-orange-500 to-red-500",
    },
    {
      category: "Low-Level",
      items: ["C++", "Rust"],
      color: "from-slate-500 to-slate-700",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
        <div className="absolute top-40 left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div
          className="absolute top-20 right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="min-h-screen w-full py-24 px-4 relative">
        <motion.div
          className="max-w-4xl mx-auto space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/20 mb-4"
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Get to know me
              </span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A glimpse into my journey as a developer and what drives me
            </p>
          </motion.div>

          {/* Story Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ x: 5 }}
            >
              <div className="p-2 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">My Journey</h2>
            </motion.div>
            <motion.div
              className="space-y-4 text-slate-700 leading-relaxed p-8 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-white/50 shadow-lg"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p>
                I'm currently pursuing my studies as a Programming Technician at
                Vidzemes Technology and Design Technical School, where I've
                developed a strong foundation in software development and a
                particular passion for web technologies.
              </p>
              <p>
                What started as curiosity about how websites work has evolved
                into a genuine love for creating digital experiences. I enjoy
                the entire process of building applications—from planning and
                design to implementation and deployment. Each project teaches me
                something new and pushes me to improve my craft.
              </p>
              <p>
                Beyond the classroom, I actively work on personal projects and
                continuously explore new frameworks and technologies. I believe
                the best way to learn is by building real things and solving
                actual problems.
              </p>
            </motion.div>
          </motion.div>

          {/* What I Do Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ x: 5 }}
            >
              <div className="p-2 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">What I Do</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                className="group p-8 bg-white/80 backdrop-blur-sm border-2 border-white/50 rounded-2xl space-y-4 hover:shadow-2xl hover:border-purple-200 transition-all relative overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <Lightbulb className="w-10 h-10 text-purple-600" />
                </motion.div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Web Development
                </h3>
                <p className="text-slate-600">
                  Building responsive and user-friendly web applications using
                  modern frameworks like React. I focus on creating clean,
                  maintainable code and delightful user experiences.
                </p>
              </motion.div>
              <motion.div
                className="group p-8 bg-white/80 backdrop-blur-sm border-2 border-white/50 rounded-2xl space-y-4 hover:shadow-2xl hover:border-blue-200 transition-all relative overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <Rocket className="w-10 h-10 text-blue-600" />
                </motion.div>
                <h3 className="text-xl font-semibold text-slate-900">
                  Problem Solving
                </h3>
                <p className="text-slate-600">
                  Tackling challenges with creative solutions and efficient
                  algorithms. I enjoy breaking down complex problems into
                  manageable pieces and finding elegant ways to solve them.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  className="group p-6 bg-white/70 backdrop-blur-sm border-2 border-white/50 rounded-xl space-y-4 hover:shadow-xl transition-all relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${skillGroup.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${skillGroup.color}`}
                    />
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1.5 bg-white border-2 border-slate-200 rounded-lg text-sm text-slate-700 hover:border-slate-400 transition-all font-medium"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Currently Learning */}
          <motion.div
            variants={itemVariants}
            className="p-8 bg-gradient-to-br from-slate-50 to-white border-2 border-white/50 rounded-2xl space-y-4 shadow-xl relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 opacity-30 -z-10" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Currently Exploring
            </h2>
            <p className="text-slate-700 leading-relaxed">
              I'm always learning and expanding my skillset. Right now, I'm
              diving deeper into cloud technologies, exploring advanced React
              patterns, and learning more about system design and architecture.
              The tech world moves fast, and I love keeping up with the latest
              developments.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </AppLayout>
  );
}
