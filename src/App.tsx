import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';

function App() {
  useEffect(() => {
    // Set page title
    document.title = 'Cristian Parada | Desarrollador Web';
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default App;