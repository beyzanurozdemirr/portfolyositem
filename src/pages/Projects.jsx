import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProjectsContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
  min-height: 50vh;
  scroll-margin-top: 80px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  background-color: #f5f5dc;

  @media (max-width: 900px) {
    padding: 1.5rem;
  }

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const RevealContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #a67c52, #8fbc8f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
    background: linear-gradient(90deg, #8fbc8f, transparent);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    background: linear-gradient(45deg, #a67c52, #8fbc8f); /* Consistent color */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(45deg, #a67c52, #8fbc8f); /* Consistent color */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const ProjectGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(245, 245, 220, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 1.5rem;
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

  @media (max-width: 900px) {
    padding: 1.25rem;
  }

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #556b2f;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    color: #556b2f; /* Consistent color */
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    color: #556b2f; /* Consistent color */
  }
`;

const ProjectDescription = styled.p`
  color: #4a3b31;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex-grow: 1;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
    color: #4a3b31; /* Consistent color */
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.4;
    color: #4a3b31; /* Consistent color */
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled(motion.span)`
  background: rgba(144, 238, 144, 0.15);
  color: #556b2f;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  border: 1px solid rgba(144, 238, 144, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(144, 238, 144, 0.25);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
    color: #556b2f; /* Consistent color */
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 0.3rem 0.6rem;
    color: #556b2f; /* Consistent color */
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled(motion.a)`
  color: #556b2f;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: rgba(144, 238, 144, 0.1);
  border: 1px solid rgba(144, 238, 144, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(144, 238, 144, 0.15);
    border-color: rgba(144, 238, 144, 0.4);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
    color: #556b2f; /* Consistent color */
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.7rem;
    color: #556b2f; /* Consistent color */
  }
`;

const ShowMoreButton = styled(motion.button)`
  background: rgba(139, 69, 19, 0.1);
  color: #a67c52;
  border: 1px solid rgba(139, 69, 19, 0.2);
  padding: 0.8rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  margin: 0 auto;
  display: block;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(139, 69, 19, 0.15);
    border-color: rgba(139, 69, 19, 0.4);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.6rem 1.5rem;
    color: #a67c52; /* Consistent color */
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.5rem 1.2rem;
    color: #a67c52; /* Consistent color */
  }
`;


const Projects = () => {
    const [showAllProjects, setShowAllProjects] = useState(false);
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const featuredProjects = [
        {
            title: 'Yemek Sipariş Sistemi',
            description:
                'PyQt5 ile kullanıcı dostu yemek sipariş sistemi: kayıt, giriş, adres yönetimi ve geçmiş sipariş görüntüleme.',
            techStack: ['PyQt5'],
            github: 'https://github.com/beyzanurozdemirr/Yemek_Siparis_Sistemi',
        },
        {
            title: 'Pong-Game',
            description:
                'İki oyunculu paddle ve top çarpışmasına dayalı klasik pong oyunu.',
            techStack: ['Python', 'PyGame'],
            github: 'https://github.com/beyzanurozdemirr/pong-game',
        },
        {
            title: 'NotePad',
            description:
                'Tkinter ile geliştirilmiş hafif, hızlı ve kullanıcı dostu not alma uygulaması.',
            techStack: ['Python', 'PyQt5'],
            github: 'https://github.com/beyzanurozdemirr/NotePad-uygulamasi',
        },
    ];

    const additionalProjects = [
        {
            title: 'AmiralBattı Oyunu',
            description:
                '8x8 tahtada klasik savaş gemisi oyunu. Oyuncu ve bilgisayar arasında hamlelerle geçen eğlenceli bir savaş!',
            techStack: ['Python', 'Tkinter'],
            github: 'https://github.com/beyzanurozdemirr/battleship-game',
        },
        {
            title: 'PyQt5 Soru Bankası',
            description:
                'Öğrenciler için test çözme imkanı sunan, PyQt5 ile geliştirilen interaktif soru bankası uygulaması.',
            techStack: ['Python', 'PyQt5', 'Database'],
            github: 'https://github.com/beyzanurozdemirr/Soru_Bankasi',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    const revealVariants = {
        hidden: { opacity: 0, y: 30, skewY: 1, filter: 'blur(5px)' },
        visible: {
            opacity: 1,
            y: 0,
            skewY: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    useEffect(() => {
        if (inView || showAllProjects) {
            controls.start('visible');
        }
    }, [controls, inView, showAllProjects]);

    const handleShowMore = () => {
        setShowAllProjects(true);
        setTimeout(() => {
            controls.start('visible');
        }, 100);
    };

    const handleShowLess = () => {
        const projectsTitle = document.querySelector('#projects h2');
        if (projectsTitle) {
            const offset = 100;
            const top =
                projectsTitle.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
            setTimeout(() => {
                setShowAllProjects(false);
            }, 300);
        }
    };

    return (
        <ProjectsContainer
            id="projects"
            ref={ref}
            as={motion.div}
            initial="hidden"
            animate={controls}
        >
            <RevealContainer variants={revealVariants}>
                <Title>Projeler</Title>
            </RevealContainer>

            <RevealContainer variants={containerVariants}>
                <ProjectGrid>
                    {featuredProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            <ProjectTitle>{project.title}</ProjectTitle>
                            <ProjectDescription>{project.description}</ProjectDescription>
                            <TechStack>
                                {project.techStack.map((tech, idx) => (
                                    <TechTag key={idx} whileHover={{ scale: 1.05, y: -2 }}>
                                        {tech}
                                    </TechTag>
                                ))}
                            </TechStack>
                            <ProjectLinks>
                                <ProjectLink
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaGithub /> GitHub
                                </ProjectLink>
                                {project.liveLink && (
                                    <ProjectLink
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaExternalLinkAlt /> Canlı
                                    </ProjectLink>
                                )}
                            </ProjectLinks>
                        </ProjectCard>
                    ))}
                </ProjectGrid>
            </RevealContainer>

            {showAllProjects && (
                <RevealContainer variants={containerVariants} initial="hidden" animate="visible">
                    <ProjectGrid>
                        {additionalProjects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <ProjectTitle>{project.title}</ProjectTitle>
                                <ProjectDescription>{project.description}</ProjectDescription>
                                <TechStack>
                                    {project.techStack.map((tech, idx) => (
                                        <TechTag key={idx} whileHover={{ scale: 1.05, y: -2 }}>
                                            {tech}
                                        </TechTag>
                                    ))}
                                </TechStack>
                                <ProjectLinks>
                                    <ProjectLink
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaGithub /> GitHub
                                    </ProjectLink>
                                    {project.liveLink && (
                                        <ProjectLink
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FaExternalLinkAlt /> Canlı
                                        </ProjectLink>
                                    )}
                                </ProjectLinks>
                            </ProjectCard>
                        ))}
                    </ProjectGrid>
                </RevealContainer>
            )}

            <ShowMoreButton
                onClick={showAllProjects ? handleShowLess : handleShowMore}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {showAllProjects ? 'Daha Az Göster' : 'Daha Fazla Göster'}
            </ShowMoreButton>
        </ProjectsContainer>
    );
};

export default Projects;