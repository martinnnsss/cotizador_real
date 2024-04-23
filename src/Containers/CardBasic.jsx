import React from 'react'
import styled from 'styled-components';

const Card =styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 70vw;
    height: 25vw;
    background-color: red;
    border-radius: 2rem;
`;

const ImageContainer = styled.div`
    flex: 1;
    padding: 20px;
    height: 100%;
`;

const TextContainer = styled.div`
    flex: 2;
    padding: 20px;
    height: 100%;
    overflow: hidden;
`;

const Image = styled.img`
    max-width: 100%;
    height: 100%;
    display: block;
`;

//AGREGAR COLOR Y TEXTO Y TITULO DE MODO PROPS
// MODIFICAR TAMAÑOS DE TEXTOS EN APP.CSS ROOT

const CardBasic = () => {
  return (
    <Card>
        <Container>
 
        <ImageContainer>
            <Image src="https://media.es.wired.com/photos/643d7bcc0a1c25ac00cad726/16:9/w_2560%2Cc_limit/Starship.jpg" alt="Image" />
        </ImageContainer>


        <TextContainer>
            <h1>Title</h1>
            <p>Descriptive text goes here...</p>
        </TextContainer>
        </Container>
    </Card>
  )
}

export default CardBasic