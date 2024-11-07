import React, { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import styled from 'styled-components';
import Skills from './components/Skills';

const AppContainer = styled.div`
  background: var(--color-bg);
  min-height: 100vh;
`;

const App = () => {
  useEffect(() => {
    // Create stars background
    const createStars = () => {
      const count = 100;
      const container = document.body;
      
      for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        
        // Random animation
        star.style.animation = `glow ${2 + Math.random() * 3}s infinite ease-in-out, 
                        float ${4 + Math.random() * 3}s infinite ease-in-out`;

        
        container.appendChild(star);
      }
    };

    createStars();

    // Cleanup
    return () => {
      const stars = document.querySelectorAll('.star');
      stars.forEach(star => star.remove());
    };
  }, []);

  return (
    <AppContainer>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </AppContainer>
  );
};

export default App;