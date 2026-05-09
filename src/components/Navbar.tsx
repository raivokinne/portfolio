import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Menu } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background border-b-4 border-foreground"
          : "bg-background/80 backdrop-blur-sm border-b-2 border-foreground/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="/"
            className="flex items-center gap-3 group"
            whileHover={{ x: -2, y: -2 }}
            whileTap={{ x: 0, y: 0 }}
          >
            <motion.div
              className="w-10 h-10 bg-foreground text-background border-2 border-foreground flex items-center justify-center text-lg font-bold font-mono shadow-sharp-sm"
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              RK
            </motion.div>
            <span className="text-foreground font-bold text-lg font-mono uppercase tracking-wider hidden sm:inline">
              Raivo Kinne
            </span>
          </motion.a>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link, index) => {
              const isActive = currentPath === link.href;
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 font-mono uppercase tracking-wider text-sm border-2 transition-all ${
                    isActive
                      ? "border-foreground bg-foreground text-background shadow-sharp-sm"
                      : "border-transparent text-foreground hover:border-foreground hover:shadow-sharp-sm"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: -2, y: -2 }}
                  whileTap={{ x: 0, y: 0 }}
                >
                  {link.label}
                </motion.a>
              );
            })}
          </div>

          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground border-2 border-foreground hover:bg-foreground hover:text-background transition-colors"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t-4 border-foreground overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link, index) => {
                const isActive = currentPath === link.href;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 font-mono uppercase tracking-wider border-2 transition-all ${
                      isActive
                        ? "border-foreground bg-foreground text-background"
                        : "border-foreground text-foreground hover:bg-foreground hover:text-background"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
