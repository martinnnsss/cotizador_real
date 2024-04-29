import React from 'react';
import styled, { keyframes } from 'styled-components';


const darkenBackground = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Fade in the popup content
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const spin = keyframes`
  from {
    transform: rotate(0deg) translateX(0.6rem) translateY(0.6rem);
  }
  to {
    transform: rotate(360deg) translateX(0.6rem) translateY(0.6rem);
  }
`;
// Container for the popup, covers full screen and is fixed
const PopupContainer = styled.div`
  display: ${({ isLoading }) => (isLoading ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  animation: ${darkenBackground} 0.3s forwards;
`;

// Content of the popup, now larger and centered
const PopupContent = styled.div`
  background-color: #fff;
  padding: 50px 10px; 
  border-radius: 10px;
  width: 30%; 
  height: 40%;
  display: flex;
  margin-left:15%;
  justify-content: center; 
  align-items: center; 
  animation: ${fadeIn} 0.3s forwards;
`;

// Spinner with the car emoji, made smaller
const Spinner = styled.div`
  width: 60px; 
  height: 60px;
  font-size: 28px; 
  animation: ${spin} 1.5s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
`;
const LoadingPopup = ({ isLoading }) => {
  return (
    <PopupContainer isLoading={isLoading}>
      <PopupContent>
        <Spinner>🏎️</Spinner>
        <h2>Loading...</h2>
      </PopupContent>
    </PopupContainer>
  );
};

export default LoadingPopup;
