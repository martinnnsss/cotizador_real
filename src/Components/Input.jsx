import React, { useState } from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';

const InputWrapper = styled.div`
  display: flex;
  align-items: center; /* Asegura que los elementos hijos se centren verticalmente */
  justify-content: start; 

  border-radius: 20px;
  background-color: #f4f4f433;
  padding: 10px;
  width: 50rem;
  border: 1px solid #b1b1b195;
  transition: height 0.3s ease; /* Transición para el cambio de ancho */

  @media only screen and (max-width: 820px) {
    width: 80%;
  }
`;

const StyledTextarea = styled.textarea`
  flex: 1; 
  border: none;
  outline: none;
  background: none;
  resize: none; 
  overflow: auto;
  min-height: 90%;
  &::placeholder {
    color: black;
  }
`;
const Input = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <InputWrapper style={{ height: inputValue ? '8rem' : '4rem' }}>
        <StyledTextarea
          placeholder="¿Qué dudas tienes?"
          value={inputValue}
          onChange={handleInputChange}
        />
        <PrimaryButton text="Pruébalo" />
    </InputWrapper>
  );
};

export default Input;
