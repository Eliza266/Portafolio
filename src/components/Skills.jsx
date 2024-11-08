import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaJs, FaDatabase, FaCogs } from "react-icons/fa";
import { SiPostgresql, SiMysql, SiSpring } from "react-icons/si";

const SkillsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 5rem 0;
  background: linear-gradient(
    180deg,
    var(--color-bg) 0%,
    rgba(0, 0, 0, 0.9) 100%
  );
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;

  /* Ajuste para pantallas de menor tamaño */
  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr); /* 2 columnas en pantallas pequeñas */
    padding: 1rem;
  }
`;

const SkillCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px) scale(1.1);
    box-shadow: 0px 0px 20px var(--color-primary);
    border-color: var(--color-primary);
  }

  svg {
    font-size: 3rem;
    margin-bottom: 1rem;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: var(--color-primary);
      transform: scale(1.2);
    }
  }

  h3 {
    font-size: 1rem;
    color: var(--color-text);
  }

  /* Ajustes para pantallas pequeñas */
  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
    padding: 1rem;

    svg {
      font-size: 2rem;
    }

    h3 {
      font-size: 0.8rem;
    }
  }
`;

// Colores para cada ícono
const iconStyles = {
  Java: { color: "#f89820" },
  Python: { color: "#306998" },
  HTML: { color: "#e34f26" },
  CSS: { color: "#1572b6" },
  React: { color: "#61dafb" },
  JavaScript: { color: "#f7df1e" },
  PostgreSQL: { color: "#336791" },
  MySQL: { color: "#00758f" },
  Spring: { color: "#6db33f" },
  Arquitectura: { color: "var(--color-text)" },
};

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills = [
    { icon: <FaJava style={iconStyles.Java} />, title: "Java" },
    { icon: <FaPython style={iconStyles.Python} />, title: "Python" },
    { icon: <FaCogs style={iconStyles.Arquitectura} />, title: "Maven" }, 
    { icon: <SiPostgresql style={iconStyles.PostgreSQL} />, title: "PostgreSQL" },
    { icon: <FaHtml5 style={iconStyles.HTML} />, title: "HTML" },
    { icon: <FaCss3Alt style={iconStyles.CSS} />, title: "CSS" },
    { icon: <FaReact style={iconStyles.React} />, title: "React" },
    { icon: <FaJs style={iconStyles.JavaScript} />, title: "JavaScript" },
    { icon: <SiMysql style={iconStyles.MySQL} />, title: "MySQL" },
    { icon: <SiSpring style={iconStyles.Spring} />, title: "Spring Boot" },
    { icon: <FaCogs style={iconStyles.Arquitectura} />, title: "Arquitectura Hexagonal" },
  ];

  return (
    <SkillsSection ref={ref} id="skills">
      <h2 className="section-title">Skills</h2>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillCard key={index}>
            {skill.icon}
            <h3>{skill.title}</h3>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills;
