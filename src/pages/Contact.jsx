import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaFacebook } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    padding: 2rem;
    min-height: 100vh;
    background-color: #f5f5dc;

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

const Title = styled(motion.h2)`
    font-size: 3rem;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #f5f5dc, #8fbc8f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: center;
    width: 100%;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media (max-width: 480px) {
        font-size: 2rem;
    }
`;

const InfoText = styled(motion.p)`
    font-size: 1.1rem;
    line-height: 1.8;
    color: #4a3b31;
    margin-bottom: 3rem;
    text-align: center;
    max-width: 700px;

    @media (max-width: 768px) {
        font-size: 1rem;
        line-height: 1.6;
    }
`;

const FormWrapper = styled.div`
    width: 100%;
    margin-bottom: 3rem;
`;

const BottomContentWrapper = styled.div`
    display: flex;
    gap: 2rem;
    width: 100%;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 968px) {
        flex-direction: column;
        align-items: center;
    }
`;

const Card = styled(motion.div)`
    background: rgba(245, 245, 220, 0.5);
    border-radius: 16px;
    border: 1px solid rgba(139, 69, 19, 0.2);
    backdrop-filter: blur(10px);
    padding: 2rem;
    box-sizing: border-box;
    flex: 1;
    min-width: 280px;

    @media (max-width: 968px) {
        padding: 1.5rem;
        width: 100%;
    }
`;

const SocialLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const SocialLink = styled(motion.a)`
    color: #556b2f;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 1.1rem;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    background: rgba(144, 238, 144, 0.1);
    border: 1px solid rgba(144, 238, 144, 0.2);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;

    svg {
        font-size: 1.3em;
    }

    &:hover {
        background: rgba(144, 238, 144, 0.15);
        border-color: rgba(144, 238, 144, 0.4);
        transform: translateX(10px);
    }

    @media (max-width: 768px) {
        font-size: 1rem;
        padding: 0.8rem 1.2rem;
        color: #556b2f; /* Maintain consistent color */
    }

    @media (max-width: 480px) {
        font-size: 1rem;
        padding: 0.8rem 1.2rem;
        color: #556b2f; /* Maintain consistent color */
    }
`;

const ContactInfoText = styled.p`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 1.1rem;
    color: #4a3b31;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 1rem;
        color: #4a3b31; /* Maintain consistent color */
    }

    @media (max-width: 480px) {
        font-size: 1rem;
        color: #4a3b31; /* Maintain consistent color */
    }
`;


const Contact = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            filter: "blur(10px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <ContactContainer
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: false }}
        >
            <Title variants={itemVariants}>İletişim</Title>
            <InfoText variants={itemVariants}>
                Benimle iletişime geçmek için aşağıdaki formu doldurabilir ya da iletişim bilgilerim aracılığıyla doğrudan ulaşabilirsiniz.
            </InfoText>

            {/* Üstte İletişim Formu */}
            <FormWrapper as={motion.div} variants={itemVariants}>
                <Card>
                    <h3 style={{ color: '#4a3b31', marginBottom: '1.5rem' }}>İletişim Formu</h3>
                    <ContactForm />
                </Card>
            </FormWrapper>

            {/* Altta Sosyal Medya ve İletişim Bilgileri */}
            <BottomContentWrapper>
                <Card variants={itemVariants}>
                    <h3 style={{ color: '#4a3b31', marginBottom: '1.5rem' }}>Sosyal Medya</h3>
                    <SocialLinksContainer>
                        <SocialLink
                            href="https://github.com/beyzanurozdemirr"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 10 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaGithub /> GitHub
                        </SocialLink>
                        <SocialLink
                            href="https://www.linkedin.com/in/beyza-nur-%C3%B6zdemir-830752319/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 10 }}
                            whileTap={{ scale: 0.95 }}
                        >

                            <FaLinkedin /> LinkedIn
                        </SocialLink>
                        <SocialLink
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 10 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaFacebook /> Facebook
                        </SocialLink>
                    </SocialLinksContainer>
                </Card>

                <Card variants={itemVariants}>
                    <h3 style={{ color: '#4a3b31', marginBottom: '1.5rem' }}>İletişim Bilgileri</h3>
                    <ContactInfoText>
                        <FaEnvelope /> beyzanurozdemir2100@gmail.com
                    </ContactInfoText>
                    <ContactInfoText>
                        <FaPhone /> +90 545 943 51 11
                    </ContactInfoText>
                </Card>
            </BottomContentWrapper>
        </ContactContainer>
    );
};

export default Contact;