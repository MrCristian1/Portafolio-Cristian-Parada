import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Plataforma Educativa Web - EDUNAB',
    description: 'Edunab es una plataforma exclusiva para la Universidad Autónoma de Bucaramanga (UNAB), diseñada especialmente para los estudiantes del programa de Ingeniería de Sistemas. Su objetivo es ofrecer cursos complementarios a las materias del plan de estudios, con contenidos útiles y enfocados en fortalecer el aprendizaje. Además, permite a los docentes crear cursos que fomenten el aprendizaje autónomo, brindando a los estudiantes herramientas adicionales para su formación académica. Como parte del proyecto de grado, la plataforma fue desplegada en una máquina virtual de Azure para obtener retroalimentación directa de los usuarios finales y así cumplir con los objetivos establecidos en la asignatura Proyecto de Grado II.',
    image: '/edunab.png',
    tags: ['Laravel', 'MySQL', 'Azure', 'PHP', 'DBeaver'],
    link: 'https://www.youtube.com/watch?v=8dYUN2xFe-E',
    date: 'Octubre 2023',
    duration: '3 meses',
    category: 'Web Development',
    featured: true,
    gradient: 'from-blue-500 to-purple-600'
  },

  {
    id: 2,
    title: 'Mi diario del clima',
    description: 'Mi Diario del Clima es una aplicación web que permite a los usuarios consultar el clima de cualquier ciudad del mundo y registrar cómo se sienten bajo esas condiciones, creando un diario personal con notas, estadísticas y gráficos. Desarrollada con Next.js 15, React, TypeScript y Tailwind CSS, integra datos reales de WeatherAPI y autenticación segura con Supabase, todo desplegado en Vercel. Su diseño moderno tipo glassmorphism, funcionalidades como historial, modo demo, y seguridad con RLS, ofrecen una experiencia atractiva, intuitiva y personalizada. <br> <br><em>Si surge cualquier error al intentar abrir la página entra aquí: <a href="https://www.youtube.com/watch?v=3dkLK0CIZ3w" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">https://www.youtube.com/watch?v=3dkLK0CIZ3w</a></em>',
    image: '/clima2.png',
    tags: ['Next.js', 'React', 'TypeScript ', 'Tailwind ', 'Vercel ', 'Supabase '],
    link: 'https://v0-mi-diario-del-clima-project.vercel.app',
    date: 'Julio 2023',
    duration: '2 meses',
    category: 'Networking',
    featured: true,
    gradient: 'from-green-500 to-teal-600'
  },
  {
    id: 3,
    title: 'RouletteBite - Restaurante',
    description: 'RouletteBite es una innovadora página web conceptual para un restaurante de comida rápida ficticio con temática de casino, donde los clientes pueden simular elegir su comida mediante una ruleta interactiva, agregando emoción y sorpresa a la experiencia. Aunque el restaurante no existe, la web ofrece una experiencia visual completamente funcional, diseñada para mostrar cómo sería una plataforma real. Cuenta con una interfaz inmersiva, diseño responsive, sistema de reservas y delivery simulado, navegación fluida, animaciones avanzadas y optimización de rendimiento. Desarrollada con Next.js 15, TypeScript, Tailwind CSS, Canvas API y otras tecnologías modernas, la plataforma combina funcionalidad visual y diseño temático para ofrecer una experiencia atractiva e inspiradora.',
    image: '/restaurante.png',
    tags: ['Next.js', 'TypeScript ', 'Tailwind ', 'Vercel ', 'Canvas API '],
    link: 'https://v0-roulette-bite-website-design.vercel.app',
    date: 'Abril 2023',
    duration: '1.5 meses',
    category: 'Cybersecurity',
    featured: true,
    gradient: 'from-red-500 to-orange-600'
  },
  {
    id: 4,
    title: 'Mi Agenda Personal',
    description: 'Esta página web es una agenda personal tipo Trello, diseñada como una aplicación Kanban para organizar tareas de forma visual e intuitiva. Permite gestionar tareas con funciones como creación, edición, subtareas, fechas de vencimiento, filtros y búsqueda en tiempo real. Ofrece un diseño responsivo con modo claro/oscuro, animaciones suaves y almacenamiento local. Desarrollada completamente en el frontend con React 18, TypeScript y Tailwind CSS, incorpora herramientas modernas como React Router, react-query y custom hooks, sin necesidad de backend, ideal para uso personal o como muestra de desarrollo web avanzado.',
    image: '/agenda.png',
    tags: ['React', 'TypeScript', 'Tailwind', 'Lovable'],
    link: 'https://trello-esque-agenda-board.lovable.app',
    date: 'Enero 2023',
    duration: '2 meses',
    category: 'Data Visualization',
    featured: true,
    gradient: 'from-violet-500 to-pink-600'
  },
];