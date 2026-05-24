import Navbar from "@/components/Navbar";
import FuturisticCursor from "@/components/FuturisticCursor";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function App() {
  return (
    <>
      <FuturisticCursor />
      <Navbar />
      <div className="fixed inset-0 -z-10 geometric-bg opacity-30" />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <footer className="py-8 px-6 border-t border-foreground/5">
        <div className="max-w-5xl mx-auto flex items-center justify-between text-xs text-muted-foreground font-mono">
          <span>&copy; {new Date().getFullYear()} Raivo Kinne</span>
          <span className="hidden sm:inline">Built with React + Tailwind</span>
        </div>
      </footer>
    </>
  );
}
