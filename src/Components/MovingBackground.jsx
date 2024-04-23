import React from 'react'
import styled, { keyframes } from 'styled-components';

// Keyframes for animations
const shapeAnimation1 = keyframes`
  0% {
    transform: translate(0, 0);
    border-radius: 24% 76% 77% 23% / 30% 30% 70% 70%;
  }
  25% {
    transform: translate(-250%, 0);
    border-radius: 28% 72% 81% 19% / 78% 25% 75% 22%;
    height: 25rem;
    width: 25rem;
  }
  50% {
    transform: translate(-100%, -55%);
    border-radius: 60% 40% 0% 100% / 1% 74% 26% 99%;
    height: 45rem;
    width: 65rem;
  }
  75% {
    transform: translate(0, 0);
    border-radius: 0% 100% 100% 0% / 0% 100% 100% 0%;
    height: 10rem;
    width: 10rem;
  }
  95% {
    transform: translate(0, 0);
    border-radius: 24% 76% 77% 23% / 30% 30% 70% 70%;
    height: 45rem;
    width: 45rem;
  }
  100% {
    transform: translate(0, 0);
    border-radius: 24% 76% 77% 23% / 30% 30% 70% 70%;
  }
`;

// Styled components
const AnimationContainer = styled.div`
    background: linear-gradient(180deg, #f8f6fe 0%, #fcfbfd 90%);
    position: fixed;
    height: 100%;
    width: 100%;
`;

const Shape = styled.div`
  position: absolute;
  width: ${({ width }) => width || '25rem'};
  height: ${({ height }) => height || '25rem'};
  background: ${({ bgColor }) => bgColor || '#f0ecfa'};
  filter: blur(10rem);
  animation: ${({ animation }) => animation} 20s infinite;
`;

// Apply keyframes to styled component
const Shape1 = styled(Shape)`
  top: 42%;
  left: 70%;
  border-radius: 24% 76% 77% 23% / 30% 30% 70% 70%;
  animation-name: ${shapeAnimation1};
`;


const ChildrenContainer = styled.div`
  position: relative;
  z-index: 2; /* Ensure children are rendered above Shape1 */
`;

const MovingBackground = ({ children }) => {
  return (
    <AnimationContainer>
        <Shape1 />
        <ChildrenContainer>
            {children}
        </ChildrenContainer>
    </AnimationContainer>
  );
};

export default MovingBackground;

