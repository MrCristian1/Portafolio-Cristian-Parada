import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-primary-400">CFPC</a>
            <p className="mt-2 text-gray-400 max-w-md">
              Apasionado por el desarrollo web, enfocado en crear soluciones eficientes.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-3">Enlaces Rápidos</h3>
            <nav className="flex flex-wrap justify-center gap-4">
              <a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors">Inicio</a>
              <a href="#skills" className="text-gray-400 hover:text-primary-400 transition-colors">Habilidades</a>
              <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors">Proyectos</a>
              <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">Sobre Mí</a>
              <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contacto</a>
            </nav>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Cristian Ferney Parada Cabrera. Todos los derechos reservados.
          </p>
          
          <div className="mt-4 md:mt-0 flex items-center text-sm text-gray-400">
            <span>Hecho con React & Tailwind CSS </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;