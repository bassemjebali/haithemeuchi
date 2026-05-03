import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'À propos', href: '#a-propos' },
  { name: 'Services', href: '#services' },
  { name: 'Avis', href: '#avis' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#accueil" className="flex flex-col z-50">
            <span className={`font-serif text-xl md:text-2xl font-bold transition-colors ${isScrolled ? 'text-primary-dark' : 'text-primary-dark'}`}>
              Maître Amir Euchi
            </span>
            <span className={`text-xs tracking-widest uppercase transition-colors ${isScrolled ? 'text-text-light' : 'text-gray-500'}`}>
              Avocat à la cour
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent-gold ${
                  isScrolled ? 'text-text-dark' : 'text-text-dark'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+21625446100"
              className="flex items-center gap-2 bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary-dark/90 transition-colors shadow-lg shadow-primary-dark/20"
            >
              <Phone className="w-4 h-4" />
              <span>Appeler</span>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 text-primary-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg py-4 md:hidden border-t border-gray-100"
          >
            <div className="flex flex-col space-y-4 px-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-text-dark font-medium text-lg border-b border-gray-50 pb-2 border-divider"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+21625446100"
                className="flex items-center justify-center gap-2 bg-primary-dark text-white px-5 py-3 rounded-md text-base mt-4"
              >
                <Phone className="w-5 h-5" />
                <span>+216 25 446 100</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
