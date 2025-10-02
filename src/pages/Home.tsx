import { motion } from "framer-motion";
import AppLayout from "@/layouts/AppLayout";
import { Github, ExternalLink, Download } from "lucide-react";

export default function Home() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/raivo.pdf";
    link.download = "Raivo_Kinne_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AppLayout>
      {/* Geometric grid background */}
      <div className="fixed inset-0 -z-10 geometric-bg opacity-40" />

      {/* Animated geometric shapes */}
      <motion.div
        className="fixed top-20 right-20 w-32 h-32 border-2 border-foreground/10 -z-10"
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
        className="fixed bottom-20 left-20 w-24 h-24 border-2 border-foreground/10 -z-10"
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

      <div className="min-h-screen w-full flex items-center justify-center px-4 relative">
        <motion.div
          className="w-full max-w-4xl text-center space-y-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 border-2 border-foreground bg-background relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-foreground/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <div className="w-2 h-2 bg-foreground animate-pulse" />
            <span className="text-sm font-mono uppercase tracking-wider relative z-10">
              Available for opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
              <span className="inline-block border-8 border-foreground px-8 py-4 shadow-sharp-lg">
                RAIVO KINNE
              </span>
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xl md:text-2xl font-mono">
              <span className="border border-foreground px-4 py-2">
                PROGRAMMING TECHNICIAN
              </span>
              <span className="hidden md:inline">|</span>
              <span className="border border-foreground px-4 py-2 bg-foreground text-background">
                FULL-STACK DEVELOPER
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="border-l-4 border-foreground pl-6 text-left">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Passionate programming student at{" "}
                <a
                  href="https://www.vtdt.lv/"
                  target="_blank"
                  className="font-bold text-foreground border-b-2 border-foreground"
                >
                  Vidzemes Technology and Design Technical School
                </a>
                . Building applications, experimenting with technologies, and
                solving problems through code.
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 pt-8"
          >
            <motion.a
              href="https://github.com/raivokinne"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 px-8 py-4 bg-foreground text-background font-mono uppercase tracking-wider shadow-sharp hover:shadow-sharp-lg transition-all overflow-hidden"
              whileHover={{ x: -4, y: -4 }}
              whileTap={{ x: 0, y: 0 }}
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
              <ExternalLink className="w-4 h-4" />
              <div className="absolute bottom-0 left-0 h-1 bg-background w-full translate-y-full group-hover:translate-y-0 transition-transform" />
            </motion.a>

            <motion.button
              onClick={handleDownloadCV}
              className="group relative flex items-center gap-3 px-8 py-4 border-2 border-foreground bg-background text-foreground font-mono uppercase tracking-wider shadow-sharp hover:shadow-sharp-lg transition-all overflow-hidden"
              whileHover={{ x: -4, y: -4 }}
              whileTap={{ x: 0, y: 0 }}
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
              <div className="absolute top-0 right-0 w-1 h-full bg-foreground translate-x-full group-hover:translate-x-0 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </AppLayout>
  );
}
