import React from 'react'
import styled, { keyframes } from 'styled-components';



const moveUpAnimation = keyframes`
  to {
    transform: translateY(-10px);
  }
`;

const moveDownAnimation = keyframes`
  to {
    transform: translateY(10px);
  }
`;

const Card = styled.div`
  width: 190px;
  height: 254px;
  transition: all 0.2s;
  position: relative;
  cursor: pointer;

  &:hover {
    transform: scale(1.04) rotate(1deg);
  }
`;

// Estilos para el contenido interno de la tarjeta
const CardInner = styled.div`
  width: inherit;
  height: inherit;
  background: ${(props) => (props.mode === 'light' ? 'rgba(255, 255, 255, 0.503)' : 'rgba(0, 0, 0, 0.28)')};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 8px;
`;

// Estilos para los círculos
const Circle = styled.div`
  width: 100px;
  height: 100px;
  background: radial-gradient(#b0e633, #53ef7d);
  border-radius: 50%;
  position: absolute;
  animation: ${moveUpAnimation} 2s ease-in infinite alternate-reverse;

  &:nth-child(1) {
    top: -25px;
    left: -25px;
  }

  &:nth-child(2) {
    bottom: -25px;
    right: -25px;
    animation-name: ${moveDownAnimation};
  }
`;

const CardWithCircles = ({mode}) => {
  return (
    <Card>
        <Circle />
        <Circle />
        <CardInner mode={mode}>
        </CardInner>
    </Card>
  )
}

export default CardWithCircles