import { motion } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const typedText = useTypewriter({
    words: [
      'Programador.',
      'Desarrollador Web.',
      'Estudiante de Ingeniería.',
      'Entusiasta de la Tecnología.',
      'Futuro Profesional.',
      'Apasionado por Aprender.'
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delayBetweenWords: 2000,
  });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-accent-400 opacity-10 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-secondary-300 opacity-10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-0 relative z-10">
        <div className="text-center">
          <motion.h2
            className="text-white text-lg md:text-xl mb-2 font-light tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ¡Hola! Soy
          </motion.h2>
          
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cristian Ferney <br className="md:hidden" />
            <span className="text-accent-300">Parada Cabrera</span>
          </motion.h1>
          
          <motion.div
            className="h-8 md:h-10 mb-6 text-white text-xl md:text-2xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="text-white opacity-90">Soy </span>
            <span className="text-accent-300">{typedText}</span>
            <span className="animate-pulse">|</span>
          </motion.div>
          
          <motion.p
            className="text-white text-opacity-80 max-w-2xl mx-auto mb-8 text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Apasionado por la tecnología, especialmente por el desarrollo web, enfocado en crear soluciones eficientes.
            Estudiante de Ingeniería de Sistemas en busca de oportunidades para aplicar
            mis conocimientos y seguir creciendo profesionalmente.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="#contact"
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-md text-lg font-medium transition-all hover:shadow-lg hover:scale-105"
            >
              Contáctame
            </a>
            <a
              href="#about"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-700 px-6 py-3 rounded-md text-lg font-medium transition-all hover:shadow-lg"
            >
              Conóceme
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-accent-300 transition-colors"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2, repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.5 }}
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};

export default Hero;