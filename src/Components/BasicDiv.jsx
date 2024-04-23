import React from 'react'
import styled from 'styled-components';

import PrimaryButton from './PrimaryButton';

const Div = styled.div`
/* Initial styles for the section (e.g., hidden) */
transform: translateY(100%); // Adjust this for desired starting position
transition: transform 0.5s ease-in-out; // Adjust transition duration and easing

/* Styles when section becomes visible */
transform: translateY(0);
`;

const BasicDiv = ({children}) => {
  return (
    <Div>
        {children}
        <PrimaryButton text="Lo que sea"/>
        <h1>testerando</h1>
    </Div>
  )
}

export default BasicDiv