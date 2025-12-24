import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Problem", href: "#problem" },
  { name: "Solution", href: "#solution" },
  { name: "Demo", href: "#demo" },
  { name: "Features", href: "#features" },
  { name: "Investors", href: "#investors" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-strong py-3" : "py-6"
        }`}
      >
        <div className="container-custom px-4 flex items-center justify-between">
          {/* Logo with playful style */}
          <a href="#" className="flex items-center gap-3 group">
            <motion.div 
              className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/40"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg font-bold text-primary-foreground font-display">af</span>
            </motion.div>
            <span className="text-xl font-bold text-foreground hidden sm:block font-display group-hover:text-primary transition-colors">
              AfterCollage
            </span>
          </a>

          {/* Desktop nav with fun hover effects */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors relative"
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Theme toggle and CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <motion.a
              href="#cta"
              className="px-6 py-2.5 gradient-bg text-primary-foreground font-bold rounded-2xl text-sm inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-4 h-4" />
              Get Started
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 glass rounded-2xl"
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile menu with fun animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, type: "spring", bounce: 0.3 }}
            className="fixed top-20 left-4 right-4 z-50 glass-strong rounded-3xl p-6 md:hidden border-2 border-primary/20"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-semibold hover:text-primary transition-colors flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#cta"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-6 py-3.5 gradient-bg text-primary-foreground font-bold rounded-2xl text-center flex items-center justify-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Sparkles className="w-4 h-4" />
                Get Started
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;