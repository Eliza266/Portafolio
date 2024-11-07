import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const CertSection = styled.section`
  min-height: 100vh;
  padding: 5rem 0;
`;

const CertGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const CertCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CertLogo = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
`;

const Certifications = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const certifications = [
    {
      title: "Bachiller 2015",
      issuer: "Benedickta Zur Nieden",
      date: "2015",
      logo: "./bachiller.png",
    },
    {
      title: "Codificación y Programación Samsung Innovation",
      issuer: "Universidad Pontificia Javeriana",
      date: "2022",
      logo: "./javeriana1.png",
    },
    {
      title: "Tecnico Laboral Desarrollo de software",
      issuer: "Campuslands",
      date: "2024",
      logo: "./campus.png",
    },
  ];

  return (
    <CertSection ref={ref} id="certificaciones">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
      >
        Certificaciones
      </motion.h2>

      <CertGrid>
        {certifications.map((cert, index) => (
          <CertCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2 }}
          >
            <CertLogo src={cert.logo} alt={cert.title} />
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
            <p>{cert.date}</p>
          </CertCard>
        ))}
      </CertGrid>
    </CertSection>
  );
};

export default Certifications;
