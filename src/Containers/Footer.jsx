import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
    background-color: var(--darkblue);
    height:30vh;
    color:white;

    @media only screen and (max-width: 820px) {
    height: 100%
  }
`
const Container = styled.div`
  display: flex;
  flex-wrap:wrap;
  width: 100vw;
  height: 100%;


`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: left;
  border: 1px solid black;
  padding: 0 7rem;

  @media only screen and (max-width: 820px) {
    height: 10rem
  }
`;
const Footer = () => {
  return (
    <FooterContainer>
    <Container>
      <Column>
        <p>logo</p> <br />
        <h1>Saul AI</h1> <br />
        <p>Tu area legal un 90% más barato</p>
      </Column>
      <Column>
        <h3>Contáctanos</h3>
          <p>correo1@saulai.com</p>
          <p>correo2@saulai.com</p>
      </Column>
      <Column>
        <h3>Síguenos</h3>
          <p>Linkdin</p>
          <p>Instagram</p>
      </Column>
    </Container>
    </FooterContainer>
  )
}

export default Footer