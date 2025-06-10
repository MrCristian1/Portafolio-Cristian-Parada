import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { ExternalLink, Github, Code, Sparkles } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  // Variantes para elementos decorativos animados
  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-80 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-purple-600 bg-clip-text text-transparent leading-tight pb-2">
              Mis Proyectos
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explora una selección de proyectos que demuestran mi experiencia y pasión por crear
            <span className="font-semibold text-purple-600"> soluciones tecnológicas innovadoras</span>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 h-full">

                
                {/* Header con imagen y overlay */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradiente overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Botones de acción */}
                  <motion.div 
                    className="absolute top-4 right-4 flex gap-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ 
                      opacity: hoveredCard === project.id ? 1 : 0,
                      x: hoveredCard === project.id ? 0 : 20
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <a 
                      href={project.link || '#'} 
                      className="w-11 h-11 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a 
                      href="https://github.com/stars/MrCristian1/lists/proyectos" 
                      className="w-11 h-11 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github size={18} />
                    </a>
                  </motion.div>
                </div>

                {/* Contenido */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 
                      className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300 cursor-pointer hover:underline"
                      onClick={() => setSelectedProject(project.id)}
                    >
                      {project.title}
                    </h3>
                    <p 
                      className="text-gray-600 text-sm leading-relaxed line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: project.description }}
                    />
                  </div>

                  {/* Botón para ver más */}
                  <button
                    onClick={() => setSelectedProject(project.id)}
                    className="text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors duration-200 flex items-center gap-1"
                  >
                    Ver más detalles
                    <ExternalLink size={14} />
                  </button>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.slice(0, 4).map((tag, tagIndex) => (
                      <motion.span 
                        key={tagIndex} 
                        className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-50 to-purple-50 text-purple-700 rounded-full border border-purple-200/50 hover:from-purple-100 hover:to-purple-100 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                        +{project.tags.length - 4} más
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal para detalles del proyecto */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white rounded-2xl max-w-5xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;
                  
                  return (
                    <div>
                      <div className="relative h-48 md:h-64">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover filter blur-[2px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/30"></div>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          ✕
                        </button>
                        <div className="absolute bottom-6 left-6 right-6">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                            {project.title}
                          </h3>
                          <div className="flex gap-3">
                            <a 
                              href={project.link || '#'} 
                              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <ExternalLink size={16} />
                              Ver Proyecto
                            </a>
                            <a 
                              href="https://github.com/stars/MrCristian1/lists/proyectos" 
                              className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Github size={16} />
                              Código
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6 md:p-8 space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-3">Descripción del Proyecto</h4>
                          <p 
                            className="text-gray-600 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: project.description }}
                          />
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-3">Tecnologías Utilizadas</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIndex) => (
                              <span 
                                key={tagIndex} 
                                className="px-3 py-1.5 bg-gradient-to-r from-purple-50 to-purple-50 text-purple-700 rounded-lg font-medium border border-purple-200/50"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;