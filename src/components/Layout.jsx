import React from 'react';
import Navigation from './Navigation';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    to bottom,
    #a1866f 0%,
    #8c7b62 50%,
    #7a6651 100%
  );
  color: #4a3b31;
  overflow-x: hidden;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const TopNav = styled.div`
  
`;

const MainContent = styled.main`
    margin-left: 60px;

    @media (max-width: 1023px) {
        margin-left: 0;
        padding: 2rem 2rem 1.5rem 2rem;
    }

    @media (max-width: 768px) {
        padding: 1.5rem 1.5rem 1rem 1.5rem;
    }

    section {
        min-height: 60vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3rem 1.5rem;
        position: relative;

        
        @media (max-width: 768px) {
            padding: 1.5rem 1rem;
            min-height: 50vh;
        }
    }
`;


const Layout = () => {
    return (
        <LayoutWrapper>
            <TopNav>
                <Navigation />
            </TopNav>
            <MainContent>
                <section id="home">
                    <Home />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </MainContent>
        </LayoutWrapper>
    );
};

export default Layout;
