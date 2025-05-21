import React from 'react';
import Layout from './components/Layout';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #f5f5dc; 
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(144, 238, 144, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    background: #a67c52; 
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #8c644b; 
  }
  
  section {
    min-height: 100vh;
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
      
  }
`;

function App() {
  return (
      <>
        <GlobalStyle />
        <Layout />
      </>
  );
}

export default App;