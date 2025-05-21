import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const HomeContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 2rem;
    background-color: #f5f5dc;
    text-align: center;
    width: 85%;
    box-sizing: border-box;
`;

const Title = styled(motion.h1)`
    font-size: 3.5rem;
    font-weight: bold;
    background: linear-gradient(45deg, #a67c52, #8fbc8f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 2.5rem;
        background: linear-gradient(45deg, #a67c52, #8fbc8f); /* Consistent color */
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media (max-width: 480px) {
        font-size: 2rem;
        background: linear-gradient(45deg, #a67c52, #8fbc8f); /* Consistent color */
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

const Subtitle = styled(motion.h2)`
    font-size: 1.5rem;
    color: #4a3b31;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 1.2rem;
        color: #4a3b31; /* Consistent color */
    }

    @media (max-width: 480px) {
        font-size: 1rem;
        color: #4a3b31; /* Consistent color */
    }
`;

const Description = styled(motion.p)`
    font-size: 1.1rem;
    color: #4a3b31;
    max-width: 600px;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        font-size: 1rem;
        color: #4a3b31; /* Consistent color */
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
        color: #4a3b31; /* Consistent color */
    }
`;

const IconContainer = styled(motion.div)`
    display: flex;
    gap: 1.5rem;
    margin-top: 1rem;
`;

const IconLink = styled.a`
    color: #4a3b31;
    font-size: 2rem;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
        color: #6b8e23;
        transform: scale(1.2);
    }

    @media (max-width: 768px) {
        font-size: 1.8rem;
        color: #4a3b31; /* Consistent color */
    }

    @media (max-width: 480px) {
        font-size: 1.5rem;
        color: #4a3b31; /* Consistent color */
    }
`;

const Home = () => {
    return (
        <HomeContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Title
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                Beyza Nur Özdemir
            </Title>
            <Subtitle
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                Bilgisayar Mühendisliği Öğrencisi
            </Subtitle>
            <Description
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
            >
                Kod yazmayı ve problem çözmeyi seven, yeni teknolojileri öğrenmeye meraklı bir öğrenciyim.
                Takım çalışmasına önem veriyor, yazılım projelerinde aktif rol almaktan keyif alıyorum.
            </Description>


            <IconContainer
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
            >
                <IconLink href="https://www.linkedin.com/in/beyza-nur-%C3%B6zdemir-830752319/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </IconLink>
                <IconLink href="https://github.com/beyzanurozdemirr" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </IconLink>
                <IconLink href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </IconLink>
            </IconContainer>
        </HomeContainer>
    );
};

export default Home;