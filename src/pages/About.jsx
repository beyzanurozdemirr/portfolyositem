import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FaUserGraduate, FaCode, FaDesktop } from 'react-icons/fa';
import AnimatedSkills from '../components/AnimatedSkills';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  padding: 4rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  background-color: #f5f5dc;

    
  @media (max-width: 768px) {
    padding: 4rem 1rem 1rem;
  }
`;

const Section = styled.section`
  margin-bottom: 4rem;
  padding: 0 1rem;
  scroll-margin-top: 35vh;
  width: 100%;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
    padding: 0;
    scroll-margin-top: 25vh;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #a67c52;
  text-align: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #8fbc8f, #a67c52);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const AboutCardsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1.5rem;
  }
`;

const AboutCard = styled(motion.div)`
  background: rgba(245, 245, 220, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(139, 69, 19, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(144, 238, 144, 0.3);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
    border-radius: 15px;
  }
`;

const CardTitle = styled.h3`
  color: #8fbc8f;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;

  svg {
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const CardText = styled.p`
  color: #4a3b31;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  flex-grow: 1;

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const SkillsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 0.5rem;
  }
`;

const SkillCard = styled(motion.div)`
  background: rgba(245, 245, 220, 0.5);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  svg {
    font-size: 3.5rem;
    color: #8fbc8f;
    margin-bottom: 1rem;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    background: rgba(245, 245, 220, 0.6);

    svg {
      transform: scale(1.1) rotate(5deg);
      color: #556b2f;
    }
  }

  @media (max-width: 768px) {
    padding: 1.2rem;

    svg {
      font-size: 3rem;
      color: #8fbc8f; /* Added for consistency on responsive */
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 12px;

    svg {
      font-size: 2.8rem;
      color: #8fbc8f; /* Added for consistency on responsive */
    }
  }
`;

const SkillName = styled.h3`
  font-size: 1.3rem;
  color: #4a3b31;
  margin: 0.5rem 0;
  transition: color 0.3s ease;

  ${SkillCard}:hover & {
    color: #556b2f;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    color: #4a3b31; /* Added for consistency on responsive */
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    color: #4a3b31; /* Added for consistency on responsive */
  }
`;

const SkillLevel = styled.div`
  width: 100%;
  height: 5px;
  background: rgba(245, 245, 220, 0.3);
  border-radius: 2px;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${props => props.progress || 0}%;
    background: linear-gradient(to right, #8fbc8f, #a67c52);
    transition: width 0.8s ease;
  }

  @media (max-width: 480px) {
    height: 3px;
    margin-top: 0.8rem;
  }
`;

const aboutMeText = "Balıkesir Üniversitesi'nde Bilgisayar Mühendisliği 2.sınıf öğrencisiyim. Temel programlama, veri yapıları, algoritmalar gibi birçok alanda teorik ve uygulamalı bilgi kazandım. Üniversite hayatım boyunca çeşitli projeler geliştirerek teknik becerilerimi pekiştirdim. Aynı zamanda ekip çalışması, problem çözme ve zaman yönetimi gibi yetkinliklerimi de geliştirme fırsatı buldum.";
const expertiseText = "Bilgisayar mühendisliği alanında teknik bilgi birikimimi, estetik bakış açımla birleştirerek kullanıcı dostu ve görsel açıdan güçlü yazılımlar geliştirmeyi hedefliyorum. Web ve mobil uygulama geliştirme alanında ilerlemek, aynı zamanda tasarım araçlarını etkin kullanarak kendi projelerimde fark yaratmak uzun vadeli hedeflerim arasında yer alıyor. Yaratıcılığı teknolojiyle buluşturan işler üretmek beni motive ediyor.";
const educationText = "Boş zamanlarımda yaratıcı yönümü ortaya koyan aktivitelerle ilgilenmeyi severim. Özellikle Canva gibi tasarım araçlarıyla görsel içerikler hazırlamak, dijital poster ve arayüz tasarımları yapmak bana keyif veriyor. Bunun yanı sıra resim çizmek, renklerle ve formlarla oynamak zihinsel olarak beni dinlendirirken hayal gücümü de geliştiriyor. ";

const skillsData = [
    {
        name: 'Python',
        level: 85
    },
    {
        name: 'Java',
        level: 75
    },
    {
        name: 'C#',
        level: 60
    },
    {
        name: 'React',
        level: 70
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30, filter: "blur(4px)" },
    visible: { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } }
};

const titleVariants = {
    hidden: { opacity: 0, y: -20, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } }
};

const sectionViewport = { once: false, amount: 0.2 };

const About = () => {
    useEffect(() => {
        const handleHash = () => {
            if (window.location.hash === '#about') {
                setTimeout(() => {
                    const aboutSection = document.querySelector('#about');
                    if (aboutSection) {
                        aboutSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            }
        };

        handleHash();
        window.addEventListener('hashchange', handleHash);

        return () => window.removeEventListener('hashchange', handleHash);
    }, []);

    return (
        <AboutContainer>
            <Section id="about">
                <Title
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={sectionViewport}
                >
                    Hakkımda
                </Title>
                <AboutCardsGrid
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={sectionViewport}
                >
                    <AboutCard variants={cardVariants} viewport={sectionViewport}>
                        <CardTitle>
                            <FaDesktop />
                            Eğitim
                        </CardTitle>
                        <CardText>{aboutMeText}</CardText>
                    </AboutCard>
                    <AboutCard variants={cardVariants} viewport={sectionViewport}>
                        <CardTitle>
                            <FaCode />
                            Hedefler
                        </CardTitle>
                        <CardText>{expertiseText}</CardText>
                    </AboutCard>
                    <AboutCard variants={cardVariants} viewport={sectionViewport}>
                        <CardTitle>
                            <FaUserGraduate />
                            Hobiler
                        </CardTitle>
                        <CardText>{educationText}</CardText>
                    </AboutCard>
                </AboutCardsGrid>
            </Section>

            <Section id="skills">
                <Title
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={sectionViewport}
                >
                    Yetenekler
                </Title>
                <AnimatedSkills />
                <SkillsContainer
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={sectionViewport}
                >
                    {skillsData.map((skill, index) => (
                        <SkillCard
                            key={index}
                            variants={skillVariants}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                            viewport={sectionViewport}
                        >
                            {skill.icon} {/* This will be undefined as skill data doesn't contain icons */}
                            <SkillName>{skill.name}</SkillName>
                            <SkillLevel progress={skill.level} />
                        </SkillCard>
                    ))}
                </SkillsContainer>
            </Section>
        </AboutContainer>
    );
};

export default About;