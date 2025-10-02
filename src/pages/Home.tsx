import { motion } from "framer-motion";
import AppLayout from "@/layouts/AppLayout";
import { Github, ExternalLink, Download, Sparkles } from "lucide-react";

export default function Home() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/raivo.pdf";
    link.download = "Raivo_Kinne_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <AppLayout>
      {/* Animated background gradient */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="min-h-screen w-full flex items-center justify-center px-4 relative">
        <motion.div
          className="w-full max-w-4xl text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          {/* Floating badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/20"
          >
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Available for opportunities
            </span>
          </motion.div>

          {/* Main heading with gradient */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent bg-200% animate-gradient-shift">
                Raivo Kinne
              </span>
            </h1>
            <motion.p
              className="text-xl md:text-2xl font-semibold text-slate-700"
              variants={itemVariants}
            >
              Programming Technician |{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Full-Stack Developer
              </span>
            </motion.p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Passionate programming student at{" "}
            <span className="font-semibold text-slate-800">
              Vidzemes Technology and Design Technical School
            </span>{" "}
            with hands-on experience in web development. I love building
            applications, experimenting with new technologies, and solving
            interesting problems through code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <motion.a
              href="#"
              className="group relative flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Github className="w-5 h-5 relative z-10" />
              <span className="relative z-10">GitHub</span>
              <ExternalLink className="w-4 h-4 relative z-10" />
            </motion.a>

            <motion.button
              onClick={handleDownloadCV}
              className="group flex items-center gap-2 px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 rounded-2xl font-semibold hover:border-purple-400 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-5 h-5 group-hover:text-purple-600 transition-colors" />
              <span>Download CV</span>
            </motion.button>
          </motion.div>

          {/* Decorative floating elements */}
          <motion.div
            className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl opacity-20 blur-sm"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 blur-sm"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>
      </div>
    </AppLayout>
  );
}
