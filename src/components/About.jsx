import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import Loader from "./Loader"; 

const AboutSection = styled.section`
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding: 5rem 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const LoaderContainer = styled.div`
  transform: scale(1.2); /* Escalamos Eve */
  width: 20rem; /* Ajusta el tamaño de Eve según sea necesario */
  height: auto; /* Ajuste automático de la altura */
`;

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <AboutSection ref={ref} id="sobre-mi">
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          Sobre Mí
        </motion.h2>

        <Grid>
          <Card
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <h3>Misión</h3>
            <p>
              Desarrollar soluciones web que no solo cumplan con altos
              estándares técnicos, sino que también sean intuitivas, seguras y
              accesibles para todo tipo de usuario. Me enfoco en el aprendizaje
              constante y en la colaboración para crear productos que respondan
              a los cambios rápidos de la industria tecnológica y ofrezcan un
              impacto positivo.
            </p>
          </Card>

          <Card
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            <h3>Visión</h3>
            <p>
              Posicionarme como una desarrolladora full stack que combina
              habilidades técnicas con una sensibilidad hacia el usuario final,
              liderando proyectos tecnológicos que transformen industrias y
              marquen una diferencia en la experiencia de los usuarios.
            </p>
          </Card>

          <Card
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ delay: 0.6 }}
          >
            <h3>Valores</h3>
            <p>
              Calidad: Código limpio y escalable. Innovación: Aprendizaje
              constante. Colaboración: Trabajo en equipo y empatía.
              Responsabilidad: Seguridad y ética. Enfoque en el Usuario:
              Experiencias intuitivas.
            </p>
          </Card>
        </Grid>
      </div>
    </AboutSection>
  );
};

export default About;
