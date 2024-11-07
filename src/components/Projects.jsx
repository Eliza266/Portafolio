import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  text-align: center;
  min-height: 100vh;
  padding: 5rem 0;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const ProjectCard = styled(motion.div)`
  position: relative;
  height: 300px;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover .project-info {
    opacity: 1;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProjectInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  padding: 2rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3, p {
    color: white;  /* Cambiar el color del texto a blanco */
  }
`;

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      title: "PrestService",
      description: "PrestService es sistema integral para gestionar productos y servicios en sucursales, con seguridad mediante Spring Security y roles personalizados para cada área.",
      image: "../../public/diseño.png",
      link: "https://github.com/Eliza266/PrestServices/blob/main/ServiceBackApp/README.md"  // Link to the project page
    },
    {
      title: "Pepita App",
      description: "Experiencia Es un Sistema Gestor de Control de Inventario para una tienda de textiles, cuenta con informes detallados de cada proceso que se lleva a cabo dentro de la aplicación, guardando la información en un servidor.",
      image: "../../public/ppitaapp.png",
      link: "https://pepita-app.netlify.app/"  // Link to the project page
    },
    {
      title: "Hamburguers",
      description: "Proyecto responsivo",
      image: "../../public/hamburguer.png",
      link: "https://eliza266.github.io/Hamburguer/"  // Link to the project page
    }
  ];

  return (
    <ProjectsSection ref={ref} id='proyectos'>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
      >
        Proyectos
      </motion.h2>

      <ProjectGrid>
        {projects.map((project, index) => (
          <a href={project.link} target="_blank" rel="noopener noreferrer" key={index}>
            <ProjectCard
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.2 }}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectInfo className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </ProjectInfo>
            </ProjectCard>
          </a>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects;
