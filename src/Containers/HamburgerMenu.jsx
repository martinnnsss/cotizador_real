import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import PrimaryButton from '../Components/PrimaryButton';

const HeaderMenu = styled.div`
    @media only screen and (min-width: 820px) {
    display: none;
  }
  `

const HamburgerDiv = styled.div`
  cursor: pointer;
  position:fixed;
  top: 1.2rem;
  left: 1.5rem;
  width: 100%;
  padding-right: 3.5rem;
  display:flex;
  justify-content: flex-start;
  align-items:center;

  & > :nth-child(1),
  & > :nth-child(2) {
    margin-right: 5%; /* Espacio entre el primer y segundo elemento */
  }
  & > :nth-child(3) {
    position:fixed;
    right:5%;
  }
`;

const MenuContainer = styled.div`
  position: fixed;
  top: ${props => (props.isOpen ? '4.5rem' : '100vh' )}; /* Controla la posición desde arriba */
  right: 0;
  height: auto;
  width: 90vw;
  background-color: rgb(255, 255, 255, 0.993);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.35);
  border-radius:2rem ;
  transition: top 0.3s ease-in-out; 
`;

const MenuList = styled.ul`
  list-style-type: none;
  padding: 20px;
  
`;

const MenuItem = styled.li`
  padding: 20px 0;
  
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

const HamburgerMenu = () => {

  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate('/signup');
  };
  const navigateToLogin = () => {
    navigate('/login');
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderMenu>
      <HamburgerDiv >
        <span onClick={toggleMenu} class="material-symbols-outlined">menu</span>
        <h1>Saul AI</h1>
        <PrimaryButton onClick={navigateToSignup} text="Empezar" />
      </HamburgerDiv>
      <MenuContainer isOpen={isOpen}>
        <MenuList>
          <MenuItem>
            Como Funciona
          </MenuItem>
          <MenuItem onClick={navigateToLogin}>
            <strong>Iniciar sesión</strong>
          </MenuItem>
          <MenuItem>
          <PrimaryButton onClick={navigateToSignup} text="Empezar" />
          </MenuItem>
        </MenuList>
      </MenuContainer>
    </HeaderMenu>
  );
};

export default HamburgerMenu;
