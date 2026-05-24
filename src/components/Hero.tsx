import { motion } from "motion/react";
import { Github, Download, ExternalLink } from "lucide-react";

function DownloadCV() {
  const link = document.createElement("a");
  link.href = "/raivo_ķinne_cv.pdf";
  link.download = "raivo_ķinne_cv.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function Hero() {
  return (
    <section id="home" className="min-h-dvh flex items-center justify-center px-6 relative">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
            <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
              RAIVO
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              KINNE
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <span className="text-sm font-mono tracking-widest text-muted-foreground px-4 py-2 border rounded-full">
            PROGRAMMING TECHNICIAN
          </span>
          <span className="text-sm font-mono tracking-widest text-muted-foreground px-4 py-2 border rounded-full">
            FULL-STACK DEVELOPER
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-muted-foreground text-lg max-w-lg mx-auto leading-relaxed"
        >
          Passionate programmer building applications, experimenting with new
          technologies, and solving real-world problems through code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 pt-4"
        >
          <motion.a
            href="https://github.com/raivokinne"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-sm font-mono tracking-wider font-medium shadow-sm hover:shadow-md transition-shadow"
          >
            <Github className="w-4 h-4" />
            GitHub
            <ExternalLink className="w-3 h-3" />
          </motion.a>
          <motion.button
            onClick={DownloadCV}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 rounded-full text-sm font-mono tracking-wider font-medium hover:border-foreground/50 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download CV
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
