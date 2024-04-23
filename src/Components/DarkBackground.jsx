import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    position: relative;
    width: 100vw;
    height: 50vh;
    background-image: linear-gradient(to bottom, #00176c, #000029);
    display:flex;
    align-items: center;
    justify-content: center;
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 1; 
    }
`;

const DarkContainerBackground = ({ children })  => {
  return (
    <Background>
      {children}
    </Background>
  );
};

export default DarkContainerBackground