import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    position: relative;
    width: 100vw;
    height: 50vh;
    background-image: linear-gradient(to bottom, #f1f1f1, #bfbfe7);
    display:flex;
    align-items: center;
    justify-content: center;
    z-index: 0;
`;

const ClearBackground = ({ children }) => {
  return (
    <Background>
      { children }
    </Background>
  );
};

export default ClearBackground