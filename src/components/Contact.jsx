import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Eve from './Eve'; // Asegúrate de importar el componente Eve

const ContactSection = styled.section`
  min-height: 100vh;
  padding: 5rem 1rem; /* Agrega algo de padding lateral */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  /* Cambiar a disposición en columna en pantallas pequeñas */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem; /* Reduce el espacio entre Eve y el contenido de contacto */
    padding: 2rem 1rem;
  }
`;

const ContactContainer = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  /* Ajuste para centrar en pantallas pequeñas */
  @media (max-width: 768px) {
    align-items: center;
    text-align: center; /* Centra el texto en pantallas pequeñas */
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
  margin-top: 2rem;

  /* Centrar iconos en pantallas pequeñas */
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled(motion.a)`
  font-size: 2rem;
  color: var(--color-text);
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-secondary);
  }
`;

const EveContainer = styled.div`
  transform: scale(1.2);
  width: 20rem;
  height: auto;

  /* Ajuste de tamaño y alineación en pantallas pequeñas */
  @media (max-width: 768px) {
    width: 15rem;
    transform: scale(1); /* Restablece el escalado en pantallas pequeñas */
  }
`;

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <ContactSection ref={ref} id="contacto">
      {/* Contenedor del componente Eve, se escala aquí */}
      <EveContainer>
        <Eve />
      </EveContainer>

      {/* Contenido de contacto */}
      <ContactContainer>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          <h3>¡Trabajemos juntos!</h3>
          <p>Correo: eliza.perez266@gmail.com</p>
          <p>Teléfono: 3117652435</p>

          <SocialLinks>
            <SocialIcon 
              href="mailto:tu@email.com"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </SocialIcon>
            <SocialIcon 
              href="https://github.com/Eliza266"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </SocialIcon>
            <SocialIcon 
              href="https://www.linkedin.com/in/eliza266/"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon 
              href="https://wa.me/573117652435"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaWhatsapp />
            </SocialIcon>
          </SocialLinks>
        </motion.div>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
