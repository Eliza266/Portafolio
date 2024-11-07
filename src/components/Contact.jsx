import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Eve from './Eve'; // Asegúrate de importar el componente Eve

const ContactSection = styled.section`
  min-height: 100vh;
  padding: 5rem 0;
  display: flex;
  flex-direction: row; /* Alineamos el contenido en fila */
  justify-content: center;
  align-items: center;
  gap: 5rem; /* Espacio entre el componente Eve y el contenido de contacto */
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
  align-items: flex-start; /* Alineamos el contenido dentro del contenedor a la izquierda */
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-start; /* Alineamos los íconos a la izquierda */
  gap: 2rem;
  margin-top: 2rem;
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
  transform: scale(1.2); /* Escalamos Eve */
  width: 20rem; /* Ajusta el tamaño de Eve según sea necesario */
  height: auto; /* Ajuste automático de la altura */
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
          <p>Correo: eliza,perez266@gmail.com</p>
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
