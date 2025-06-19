import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { navItems } from '../data/navItems';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white bg-opacity-90 backdrop-blur-sm shadow-md py-2'
        : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <motion.a
          href="#home"
          className={`font-bold text-2xl transition-colors duration-300 ${isScrolled ? 'text-primary-600' : 'text-white'
            }`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          CFPC
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-8">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary-500 ${isScrolled ? 'text-gray-800' : 'text-gray-100'
                    }`}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.a
            href="/Hoja-de-Vida.pdf"
            download="CristianParada_CV.pdf"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Download size={16} />
            <span>Descargar CV</span>
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 hover:text-primary-500 transition-colors"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block py-2 text-gray-800 hover:text-primary-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="public\Hoja de Vida.pdf"
                  download="CristianParada_CV.pdf"
                  className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  <Download size={16} />
                  <span>Descargar CV</span>
                </a>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;