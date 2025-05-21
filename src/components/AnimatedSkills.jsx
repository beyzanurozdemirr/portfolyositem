import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import codeDark from '../animations/code-dark.json';
import frontend from '../animations/frontend.json';
import gamedevelopment from '../animations/gamedevelopment.json';

const AnimationContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem auto;
  max-width: 1200px;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const AnimationWrapper = styled(motion.div)`
  position: relative;
  background: rgba(245, 245, 220, 0.75);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(139, 69, 19, 0.15);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.35s ease;

  &:before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(144, 238, 144, 0.1) 0%,
      rgba(50, 205, 50, 0.1) 100%
    );
    opacity: 0;
    transition: opacity 0.35s ease;
    border-radius: 20px;
  }

  &:hover:before {
    opacity: 1;
  }

  &:hover {
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    border-color: rgba(144, 238, 144, 0.4);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
    border-radius: 15px;
  }
`;

const AnimationTitle = styled(motion.h3)`
  color: #4a3b31;
  font-size: 1.6rem;
  margin: 1rem 0 0.5rem 0;
  text-align: center;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const AnimationDescription = styled(motion.p)`
  color: #a67c52;
  text-align: center;
  font-size: 1rem;
  margin-top: 0.5rem;
  z-index: 1;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const LottieWrapper = styled(motion.div)`
  width: 220px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  @media (max-width: 768px) {
    width: 190px;
    height: 190px;
  }

  @media (max-width: 480px) {
    width: 160px;
    height: 160px;
  }
`;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.25 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95, filter: 'blur(5px)' },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: { duration: 0.6, ease: 'easeOut' },
    },
};

const titleVariants = {
    hidden: { opacity: 0, y: -15, filter: 'blur(3px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.45, delay: 0.2 },
    },
};

const descriptionVariants = {
    hidden: { opacity: 0, y: 15, filter: 'blur(3px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.45, delay: 0.3 },
    },
};

const lottieVariants = {
    hidden: { scale: 0.85, opacity: 0, rotate: -8 },
    visible: {
        scale: 1,
        opacity: 1,
        rotate: 0,
        transition: { duration: 0.55, ease: 'easeOut' },
    },
};

const AnimatedSkills = () => {
    const skills = [
        {
            title: 'Uygulama Geliştirme',
            description: 'Masaüstü uygulama geliştirme alanında, Python ve PyQt5 kullanarak çok pencereli ve kullanıcı dostu grafik arayüzlü yazılımlar geliştiriyorum. Ayrıca, MySQL gibi veritabanı sistemleriyle entegrasyon sağlayarak kalıcı veri yönetimi, kullanıcı bilgileri ve geçmiş kayıtların saklanması gibi işlemleri güvenli ve etkili bir şekilde gerçekleştiriyorum. ',
            animation: codeDark,
        },
        {
            title: 'Frontend Geliştirme',
            description: 'Modern ve kullanıcı odaklı web arayüzleri geliştirme konusunda HTML, CSS, JavaScript, React ve Tailwind CSS gibi güncel teknolojileri etkin bir şekilde kullanıyorum.Kod yapısını okunabilir, yeniden kullanılabilir ve ölçeklenebilir olacak şekilde organize ederek sürdürülebilir projeler üretmeye özen gösteriyorum.',
            animation: frontend,
        },
        {
            title:  'Oyun Geliştirme',
            description: 'Pygame kullanarak 2D oyun geliştirme üzerine çalışmalar yapıyorum. Oyun mekaniği tasarımı, grafiklerin yönetimi, kullanıcı etkileşimi ve animasyonlar gibi temel oyun geliştirme süreçlerine hakimim. Oyunlarda akıcı kontrol, görsel efektler ve ses entegrasyonu gibi öğeleri başarılı şekilde uygulayarak eğlenceli ve sürükleyici deneyimler yaratıyorum. ',
            animation: gamedevelopment,
        }
    ];

    return (
        <AnimationContainer
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
        >
            {skills.map(({ title, description, animation }, index) => (
                <AnimationWrapper key={index} variants={cardVariants} whileHover={{ scale: 1.08 }}>
                    <LottieWrapper variants={lottieVariants}>
                        <Lottie animationData={animation} loop={true} />
                    </LottieWrapper>
                    <AnimationTitle variants={titleVariants}>{title}</AnimationTitle>
                    <AnimationDescription variants={descriptionVariants}>{description}</AnimationDescription>
                </AnimationWrapper>
            ))}
        </AnimationContainer>
    );
};

export default AnimatedSkills;
