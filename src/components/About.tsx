import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github as GitHub, Linkedin, Calendar, MapPin, GraduationCap } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';

const About = () => {
  const typedText = useTypewriter({
    words: [
      'Estudiante de Ingeniería de Sistemas',
      'Desarrollador Web',
      'Entusiasta de la Tecnología',
      'Aprendiz Constante',
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delayBetweenWords: 2000,
  });

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute -right-20 top-20 w-80 h-80 bg-primary-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -left-20 bottom-20 w-80 h-80 bg-accent-100 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="w-full lg:w-5/12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="w-full h-full max-w-md mx-auto">
                <img
                  src="/perfil.jpeg"
                  alt="Cristian Parada"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-4 max-w-xs">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 text-primary-600 font-semibold mb-1">
                    <GraduationCap size={18} />
                    <span className="text-gray-800 text-sm">Ingeniería de Sistemas</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary-600 font-semibold mb-1">
                    <Calendar size={18} />
                    <span className="text-gray-800 text-sm">9no Semestre</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary-600 font-semibold">
                    <MapPin size={18} />
                    <span className="text-gray-800 text-sm">Colombia</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Sobre <span className="text-primary-500">Mí</span>
            </h2>
            
            <div className="mb-6 h-8">
              <span className="text-xl text-primary-600 font-medium">
                {typedText}
                <span className="animate-pulse ml-1">|</span>
              </span>
            </div>
            
            <p className="text-gray-600 mb-4">
              Soy un apasionado estudiante de Ingeniería de Sistemas, actualmente cursando el noveno semestre.
              Mi interés por la tecnología me ha llevado a explorar diversas áreas como el desarrollo web,
              la programación en Python, y conceptos básicos de ciberseguridad.
            </p>
            
            <p className="text-gray-600 mb-6">
              Me destaco por ser autodidacta, con gran capacidad para resolver problemas y trabajar en equipo.
              Estoy constantemente aprendiendo nuevas tecnologías y metodologías para mantenerme actualizado
              en este campo tan dinámico. Busco oportunidades para aplicar mis conocimientos y adquirir experiencia
              profesional que complemente mi formación académica.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="mailto:cristianparada531@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 hover:bg-primary-100 text-primary-600 rounded-md transition-colors"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
              <a
                href="https://github.com/stars/MrCristian1/lists/proyectos"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md transition-colors"
              >
                <GitHub size={18} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/cristian-parada-666701367/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Educación - Pregrado</h3>
                <p className="text-sm text-gray-600">
                  Ingeniería de Sistemas<br />
                  Universidad Autonoma De Bucaramanga<br />
                  2021 - Presente
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Idiomas</h3>
                <p className="text-sm text-gray-600">
                  Español (Nativo)<br />
                  Inglés (Intermedio)<br />
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;