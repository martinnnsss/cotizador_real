import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import PrimaryButton from '../Components/PrimaryButton';
import HamburgerMenu from '../Containers/HamburgerMenu';



const HeaderDiv = styled.div`
  position: fixed;
  height: 7rem;
  width: 100vw;
  z-index: 10000;
  
  @media only screen and (max-width: 1200px) {
    
  }
`;


const Header = styled.div`
  border-bottom: 1px solid rgb(223, 221, 221);
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.35);
  left: 50%; /* Posiciona el div en el centro horizontal */
  transform: translate(-50%, -50%); /* Centra el div exactamente */
  position: fixed;
  top: 4rem; 
  width: 70rem;
  height: 5.5rem;
  z-index: 10000; 
  border-radius: 5rem;
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(15px);

  
  @media only screen and (max-width: 1200px) {
    width: 90vw;
    height: 4.5rem;
  }

`;

const HeaderContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 0px 1rem;

  @media only screen and (max-width: 820px) {
    display: none;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0px;

  & > p:first-of-type {
    margin-left: 2rem;
  }
`;

const LogoImg = styled.img`
  max-width: 100%;
  height: 5rem;
`;

const LogoText = styled.h1`
  color: var(--blue);
  margin-bottom: 0px;
  font-size: 2rem;
`;

const LoginContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content:space-around ;

  @media only screen and (max-width: 1200px) {
    width: 40%;
  }
`;

const HamburgerContainer = styled.div`
  
`



const HeaderBar = () => {
  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate('/signup');
  };
  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <HeaderDiv >
    <Header>
      <HamburgerContainer>
        <HamburgerMenu />
      </HamburgerContainer>

      <HeaderContainer>
        <LogoContainer>
          <LogoImg src="https://firebasestorage.googleapis.com/v0/b/saving-expenses-tracker.appspot.com/o/logos%2Foutput-onlinepngtools%20(1).png?alt=media&token=3cc14b4a-0b1f-4fd8-8bd1-b54a2861b3ef" alt="walleton logo, a pig" />
          <LogoText>Saul AI</LogoText>
          <p>Como Funciona</p>
        </LogoContainer>
        <LoginContainer>
          <PrimaryButton onClick={navigateToLogin} text="Iniciar sesión" mode="light" ></PrimaryButton>
          <PrimaryButton onClick={navigateToSignup} text="Empezar" />
        </LoginContainer>
      </HeaderContainer>

      
      
    </Header>
    </HeaderDiv>
  );
};

export default HeaderBar;
