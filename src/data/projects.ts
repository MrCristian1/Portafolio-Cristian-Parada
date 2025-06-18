import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Plataforma Educativa Web - EDUNAB',
    description: 'Edunab es una plataforma exclusiva para la Universidad Autónoma de Bucaramanga (UNAB), diseñada especialmente para los estudiantes del programa de Ingeniería de Sistemas. Su objetivo es ofrecer cursos complementarios a las materias del plan de estudios, con contenidos útiles y enfocados en fortalecer el aprendizaje. Además, permite a los docentes crear cursos que fomenten el aprendizaje autónomo, brindando a los estudiantes herramientas adicionales para su formación académica. Como parte del proyecto de grado, la plataforma fue desplegada en una máquina virtual de Azure para obtener retroalimentación directa de los usuarios finales y así cumplir con los objetivos establecidos en la asignatura Proyecto de Grado II. <br> <br> <b>Para entrar usa las siguientes credenciales </b> <br> <br><b>Rol Estudiante: </b><br>Correo: cparada531@unab.edu.co <br>Contraseña:usuario123<br><br> <b>Rol Profesor: </b><br>Correo: fsuarez120@unab.edu.co <br>Contraseña:profesor123 <br> <br><em>  Si se presenta algún error al abrir la web, o si deseas verla más rápido y con todas sus funcionalidades explicadas, puedes ingresar aquí: <a href="https://www.youtube.com/watch?v=8dYUN2xFe-E" target="_blank" rel="noopener noreferrer" class="text-purple-600 hover:text-purple-800 underline">https://www.youtube.com/watch?v=8dYUN2xFe-E</a></em>',
    image: '/edunab.png',
    tags: ['Laravel', 'MySQL', 'Azure', 'PHP', 'DBeaver'],
    link: 'https://edunab.eastus2.cloudapp.azure.com',
    githubLink: 'https://github.com/kobbii3/Edunab_ProyectoGrado',
    date: 'Octubre 2023',
    duration: '3 meses',
    category: 'Web Development',
    featured: true,
    gradient: 'from-blue-500 to-purple-600'
  },

  {
    id: 2,
    title: 'CVgenIA',
    description: 'CVgenIA es una herramienta web inteligente para la creación de currículums profesionales que combina la potencia de la inteligencia artificial con un diseño intuitivo y adaptable. Su objetivo principal es facilitar la generación de CVs personalizados y de alta calidad en pocos minutos, ayudando tanto a profesionales como a estudiantes a destacar en el mercado laboral. Utiliza tecnologías modernas como Next.js 14, React 18, TypeScript y Tailwind CSS para ofrecer una experiencia fluida y responsiva, mientras que la integración con Google Gemini a través del AI SDK de Vercel permite generar automáticamente resúmenes, descripciones de experiencia y sugerencias de habilidades basadas en el perfil del usuario. Su valor agregado radica en actuar como un asistente profesional que entiende el contexto del usuario y crea contenido relevante, optimizando el proceso de creación de un CV atractivo y competitivo.',
    image: '/CVgenIA.png',
    tags: ['Next.js', 'React', 'TypeScript ', 'Tailwind ', 'Vercel ', 'SDK ', 'API Gemini ', 'Vite'],
    link: 'https://v0-cv-generator-app-iota.vercel.app',
    githubLink: 'https://github.com/MrCristian1/CVgenIA',
    date: 'Julio 2023',
    duration: '2 meses',
    category: 'Networking',
    featured: true,
    gradient: 'from-green-500 to-teal-600'
  },
  {
    id: 3,
    title: 'Recomendador Tecnologías Web',
    description: 'Recomendador de Tecnologías Web es una aplicación inteligente que guía a desarrolladores en la elección del stack tecnológico ideal según el tipo de proyecto, nivel de experiencia y necesidades específicas. Su valor agregado radica en la personalización profunda mediante formularios guiados o entrada libre con procesamiento de lenguaje natural, y en la generación de recomendaciones completas (frontend, backend, base de datos, etc.) acompañadas de explicaciones y documentación automática. Utiliza tecnologías modernas como Next.js 15, React 19, TypeScript, Tailwind CSS y shadcn/ui, e integra múltiples proveedores de IA (OpenAI, Claude, Gemini) a través del AI SDK de Vercel, asegurando disponibilidad continua y recomendaciones contextuales. Además, su arquitectura serverless, diseño responsive, accesibilidad y optimización SEO hacen de esta herramienta una solución integral para acelerar y simplificar la toma de decisiones tecnológicas en proyectos web.',
    image: '/recomendador.png',
    tags: ['Next.js', 'TypeScript ', 'Tailwind ', 'Vercel ', 'React ', 'SDK ', 'API Gemini '],
    link: 'https://v0-web-tech-recommender.vercel.app',
    githubLink: 'https://github.com/MrCristian1/Recomendador-Tecnolog-as-Web',
    date: 'Abril 2023',
    duration: '1.5 meses',
    category: 'Cybersecurity',
    featured: true,
    gradient: 'from-red-500 to-orange-600'
  },
  {
    id: 4,
    title: 'Analizador de Contraste de Color',
    description: 'Analizador de Contraste de Color es una aplicación web moderna cuyo objetivo principal es ayudar a diseñadores y desarrolladores a evaluar y mejorar la accesibilidad del contraste de colores en sus proyectos, siguiendo los estándares WCAG (AA y AAA). Su valor agregado está en ofrecer una vista previa realista mediante una landing page de portafolio completamente interactiva, donde se puede visualizar el impacto real de los cambios de color. Incorpora análisis inteligente de contraste, sugerencias automáticas de combinaciones accesibles y un generador aleatorio de paletas efectivas. También adapta dinámicamente los colores de acento y ofrece controles organizados bajo un diseño limpio y responsive. Fue desarrollada con React 18 + TypeScript, Tailwind CSS, Lucide React, Vite y algoritmos WCAG implementados nativamente, sin necesidad de APIs externas, lo que garantiza una experiencia rápida, fluida y accesible desde el navegador.',
    image: '/Analizador.png',
    tags: ['React', 'TypeScript', 'Tailwind', 'Vercel', 'Lucide React', 'Vite'],
    link: 'https://analizador-color.vercel.app',
    githubLink: 'https://github.com/MrCristian1/Analizador-Color',
    date: 'Enero 2023',
    duration: '2 meses',
    category: 'Data Visualization',
    featured: true,
    gradient: 'from-violet-500 to-pink-600'
  },
  {
    id: 5,
    title: 'Mi Agenda Personal',
    description: 'Esta página web es una agenda personal tipo Trello, diseñada como una aplicación Kanban para organizar tareas de forma visual e intuitiva. Permite gestionar tareas con funciones como creación, edición, subtareas, fechas de vencimiento, filtros y búsqueda en tiempo real. Ofrece un diseño responsivo con modo claro/oscuro, animaciones suaves y almacenamiento local. Desarrollada completamente en el frontend con React 18, TypeScript y Tailwind CSS, incorpora herramientas modernas como React Router, react-query y custom hooks, sin necesidad de backend, ideal para uso personal o como muestra de desarrollo web avanzado.',
    image: '/agenda.png',
    tags: ['React', 'TypeScript', 'Tailwind', 'Lovable'],
    link: 'https://trello-esque-agenda-board.lovable.app',
    githubLink: 'https://github.com/MrCristian1/trello-esque-agenda-board',
    date: 'Enero 2023',
    duration: '2 meses',
    category: 'Data Visualization',
    featured: true,
    gradient: 'from-violet-500 to-pink-600'
  },

  {
    id: 6,
    title: 'Mi diario del clima',
    description: 'Mi Diario del Clima es una aplicación web que permite a los usuarios consultar el clima de cualquier ciudad del mundo y registrar cómo se sienten bajo esas condiciones, creando un diario personal con notas, estadísticas y gráficos. Desarrollada con Next.js 15, React, TypeScript y Tailwind CSS, integra datos reales de WeatherAPI y autenticación segura con Supabase, todo desplegado en Vercel. Su diseño moderno tipo glassmorphism, funcionalidades como historial, modo demo, y seguridad con RLS, ofrecen una experiencia atractiva, intuitiva y personalizada. <br> <br><em>Si surge cualquier error al intentar abrir la página entra aquí: <a href="https://www.youtube.com/watch?v=3dkLK0CIZ3w" target="_blank" rel="noopener noreferrer" class="text-purple-600 hover:text-purple-800 underline">https://www.youtube.com/watch?v=3dkLK0CIZ3w</a></em>',
    image: '/clima2.png',
    tags: ['Next.js', 'React', 'TypeScript ', 'Tailwind ', 'Vercel ', 'Supabase '],
    link: 'https://v0-mi-diario-del-clima-project.vercel.app',
    githubLink: 'https://github.com/MrCristian1/Mi-diario-del-clima',
    date: 'Julio 2023',
    duration: '2 meses',
    category: 'Networking',
    featured: true,
    gradient: 'from-green-500 to-teal-600'
  },
  {
    id: 7,
    title: 'RouletteBite - Restaurante',
    description: 'RouletteBite es una innovadora página web conceptual para un restaurante de comida rápida ficticio con temática de casino, donde los clientes pueden simular elegir su comida mediante una ruleta interactiva, agregando emoción y sorpresa a la experiencia. Aunque el restaurante no existe, la web ofrece una experiencia visual completamente funcional, diseñada para mostrar cómo sería una plataforma real. Cuenta con una interfaz inmersiva, diseño responsive, sistema de reservas y delivery simulado, navegación fluida, animaciones avanzadas y optimización de rendimiento. Desarrollada con Next.js 15, TypeScript, Tailwind CSS, Canvas API y otras tecnologías modernas, la plataforma combina funcionalidad visual y diseño temático para ofrecer una experiencia atractiva e inspiradora.',
    image: '/restaurante.png',
    tags: ['Next.js', 'TypeScript ', 'Tailwind ', 'Vercel ', 'Canvas API '],
    link: 'https://v0-roulette-bite-website-design.vercel.app',
    githubLink: 'https://github.com/MrCristian1/RouletteBite-Restaurante',
    date: 'Abril 2023',
    duration: '1.5 meses',
    category: 'Cybersecurity',
    featured: true,
    gradient: 'from-red-500 to-orange-600'
  },

];