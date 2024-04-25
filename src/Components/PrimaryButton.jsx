import React from 'react';
import styled from 'styled-components';

// Define the styled button outside the component function
const StyledButton = styled.button`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  font-size: 1rem;
  font-weight: 600;
  
  color: ${(props) => (props.mode === 'light' ?  'var(--blue)': '#fff' )};
  
  border-radius: 10px;
  padding: 10px 25px;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.203),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;

  &.primary-button {
    background-color: ${(props) => (props.mode === 'light' ? 'rgba(255, 255, 255, 0.503)' : 'var(--blue)')};
    background-image: ${(props) => (props.mode === 'light' ? '#ffffff8061bbc 0%, #f1f0ff 74%)' : 'linear-gradient(315deg, #261bbc 0%, #2316d5 74%)')};
    border: none;
    z-index: 1;
    border: 1px solid var(--blue);
  }
  &.primary-button:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    border-radius: 5px;
    background-color: ${(props) => (props.mode === 'light' ? 'rgba(208, 220, 255, 0.175)' : 'var(--blue)')};
    background-image: ${(props) => (props.mode === 'light' ? 'linear-gradient(315deg,  #ffffff 0%, #dadfff 74%)' : 'linear-gradient(315deg, #261bbc 0%, #070068 74%)')};
    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
    transition: all 0.3s ease;
  }
  &:hover {
    color: ${(props) => (props.mode === 'light' ?  'var(--blue)': '#fff' )};
  }
  &:hover:after {
    top: 0;
    height: 100%;
  }
  &:active {
    top: 2px;
  }
`;

const PrimaryButton = ({ text, width, height , mode }) => {
  return (
    <StyledButton className="custom-btn primary-button" width={width} height={height} mode={mode} >{text} </StyledButton>
  );
};

export default PrimaryButton;
