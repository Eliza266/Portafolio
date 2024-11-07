import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Button from "./Button"; // Importa el componente decorativo

const StyledHeader = styled.header`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const ProfileContainer = styled.div`
  text-align: center;
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: rgba(10, 11, 31, 0.8);
  backdrop-filter: blur(10px);
  z-index: 100;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const NavButton = styled(motion.button)`
  background: transparent;
  border: 2px solid var(--color-accent);
  color: var(--color-text);
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-accent);
    color: var(--color-bg);
    box-shadow: 0 0 15px var(--color-accent);
  }
`;

const TitlePart = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(
    45deg,
    var(--color-secondary),
    var(--color-accent)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  display: inline-block;
  transition: all 0.3s ease;

  /* Agrandado solo en hover */
  &:hover {
    transform: scale(1.2);
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: var(--color-text);
  opacity: 0.8;
`;

const DecorativeButtonWrapper = styled.div`
  position: absolute;
  top: 20%;
  right: 10%;
  z-index: 10;
  transform: scale(1.2);
`;

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Nav>
        <NavButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("sobre-mi")}
        >
          Sobre Mí
        </NavButton>
        <NavButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("skills")}
        >
          Servicios
        </NavButton>
        <NavButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("proyectos")}
        >
          Proyectos
        </NavButton>
        <NavButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("certificaciones")}
        >
          Certificaciones
        </NavButton>
        <NavButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("contacto")}
        >
          Contacto
        </NavButton>
      </Nav>

      <StyledHeader>
        <ProfileContainer>
          {/* Animaciones secuenciales en cada parte del nombre */}
          <TitlePart
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Elizabeth
          </TitlePart>{" "}
          <TitlePart
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Pérez
          </TitlePart>{" "}
          <TitlePart
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Valderrama
          </TitlePart>
          <Subtitle
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Desarrolladora Web Full Stack
          </Subtitle>
        </ProfileContainer>

        {/* Contenedor para el componente decorativo */}
        <DecorativeButtonWrapper>
          <Button />
        </DecorativeButtonWrapper>
      </StyledHeader>
    </>
  );
};

export default Header;
