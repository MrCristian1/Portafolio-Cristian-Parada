import React from 'react';
import { motion } from 'framer-motion';
import { 
  programmingLanguages, 
  frontendSkills, 
  backendSkills, 
  databaseSkills, 
  developmentTools,
  creativeSkills,
  productivitySkills
} from '../data/skills';
import { Skill } from '../types';

// Definición de tipos para las props de los componentes
interface SkillCardProps {
  skill: Skill;
  index: number;
  accentColor?: string;
}

interface SkillSectionProps {
  title: string;
  skills: Skill[];
  accentColor?: string;
  delay?: number;
}

const Skills: React.FC = () => {
  const SkillCard: React.FC<SkillCardProps> = ({ skill, index, accentColor = 'primary' }) => {
    return (
      <motion.div
        key={skill.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.0, delay: index * 0.0 }}
        whileHover={{ 
          y: -8,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}
        className={`bg-white rounded-xl border border-gray-100 p-6 hover:border-${accentColor}-200 transition-all duration-300 group`}
      >
        <div className="flex flex-col items-center text-center">
          <motion.div 
            className={`w-16 h-16 rounded-full bg-${accentColor}-50 flex items-center justify-center mb-4 group-hover:bg-${accentColor}-100 transition-colors`}
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.3 }
            }}
          >
            {skill.svgUrl ? (
              <img 
                src={skill.svgUrl} 
                alt={`${skill.name} icon`}
                className="w-8 h-8"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  // Fallback en caso de que la imagen no cargue
                  const target = e.target as HTMLImageElement;
                  const nextSibling = target.nextSibling as HTMLElement;
                  target.style.display = 'none';
                  if (nextSibling) {
                    nextSibling.style.display = 'block';
                  }
                }}
              />
            ) : null}
            {/* Fallback text */}
            <span className={`text-${accentColor}-500 font-bold text-xs hidden`}>
              {skill.name.charAt(0)}
            </span>
          </motion.div>
          <h4 className="text-lg font-semibold text-gray-800 mb-2">{skill.name}</h4>
          <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
        </div>
      </motion.div>
    );
  };

  const SkillSection: React.FC<SkillSectionProps> = ({ title, skills, accentColor = 'primary', delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay }}
      className="mb-16"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        {title.split(' ').map((word: string, index: number) => (
          <span key={index}>
            {index === title.split(' ').length - 1 ? (
              <span className={`text-${accentColor}-500`}>{word}</span>
            ) : (
              `${word} `
            )}
          </span>
        ))}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {skills.map((skill: Skill, index: number) => (
          <SkillCard key={skill.id} skill={skill} index={index} accentColor={accentColor} />
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Habilidades <span className="text-purple-500">Técnicas</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            He desarrollado un conjunto diverso de habilidades técnicas y creativas
            durante mi formación académica y proyectos personales, organizadas por áreas de especialización.
          </p>
        </motion.div>

        {/* Technical Skills Section */}
        <div className="mb-20">
          <SkillSection 
            title="Lenguajes de Programación" 
            skills={programmingLanguages} 
            accentColor="purple"
            delay={0.1}
          />
          
          <SkillSection 
            title="Desarrollo Frontend" 
            skills={frontendSkills} 
            accentColor="purple"
            delay={0.2}
          />
          
          <SkillSection 
            title="Desarrollo Backend" 
            skills={backendSkills} 
            accentColor="purple"
            delay={0.3}
          />
          
          <SkillSection 
            title="Bases de Datos" 
            skills={databaseSkills} 
            accentColor="purple"
            delay={0.4}
          />
          
          <SkillSection 
            title="Herramientas de Desarrollo" 
            skills={developmentTools} 
            accentColor="purple"
            delay={0.5}
          />
        </div>

        {/* Additional Skills Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Habilidades <span className="text-red-500">Adicionales</span>
            </h2>
          </motion.div>

          <SkillSection 
            title="Diseño y Multimedia" 
            skills={creativeSkills} 
            accentColor="red"
            delay={0.6}
          />
          
          <SkillSection 
            title="Herramientas de Productividad" 
            skills={productivitySkills} 
            accentColor="red"
            delay={0.7}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;