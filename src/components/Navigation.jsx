import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: rgba(245, 245, 220, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 1000;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  user-select: none;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const LogoText = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #556b2f;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const NavItems = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    flex-direction: column;
    background: rgba(245, 245, 220, 0.98);
    padding: 1rem 0;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  }
`;

const NavItem = styled(motion.a)`
  color: #4a3b31;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(144, 238, 144, 0.2);
    color: #556b2f;
  }

  ${({ active }) =>
    active &&
    `
    background: rgba(144, 238, 144, 0.2);
    color: #556b2f;
  `}
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.8rem;
  color: #556b2f;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= -100 && rect.top <= 300) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 70;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
            setIsMenuOpen(false);
        }
    };

    return (
        <Nav>
            <LogoContainer onClick={() => scrollToSection('home')}>
                <Avatar src="avatar.jpg" alt="Profil Resmi" />
                <LogoText whileHover={{ scale: 1.05 }}>Beyza Nur Özdemir</LogoText>
            </LogoContainer>

            <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? '✕' : '☰'}
            </MenuButton>

            <AnimatePresence>
                {(isMenuOpen || windowWidth > 768) && (
                    <NavItems
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                            <NavItem
                                key={section}
                                onClick={() => scrollToSection(section)}
                                active={activeSection === section}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {(() => {
                                    switch (section) {
                                        case 'home': return 'Ana Sayfa';
                                        case 'about': return 'Hakkımda';
                                        case 'skills': return 'Yetenekler';
                                        case 'projects': return 'Projeler';
                                        case 'contact': return 'İletişim';
                                        default: return section;
                                    }
                                })()}
                            </NavItem>
                        ))}
                    </NavItems>
                )}
            </AnimatePresence>
        </Nav>
    );

};

export default Navigation;
