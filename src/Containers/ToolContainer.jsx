import React, {useState} from 'react';

import styled from 'styled-components';

const UploadContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UploadBox = styled.div`
  background: #FFFFFF;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 5px 38px rgba(0, 0, 0, 0.156);
  text-align: center;
  height: 50%;
  width: 40%;
`;


const UploadArea = styled.div`
  border: 2px dashed #C4C4C4;
  padding: 20px;
  border-radius: 8px;
  margin-top: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F6F6F6;
  cursor: pointer;
  height:60%;
`;

const UploadIcon = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  height:100%;
`;

const Icon = styled.span`
    font-size: 3rem;
    margin-right: 10px;
`;



function ToolContainer({ type }){
    const [driveLink, setDriveLink] = useState('');

    const handleTemplateClick = () => {
        // Aquí puedes agregar más casos dependiendo de los type
        if (type === "cotizador") {
            setDriveLink('https://drive.google.com/cotizador');
        } else if (type === "ruteador") {
            setDriveLink('https://drive.google.com/ruteador');
        }
    };



    let title = 'Upload your files here';
    if (type === "cotizador") {
        title = "💰Cotizador💰";
    } else if (type === "ruteador") {
        title = "🗺️Ruteador🗺️";
    }


    const handleFileUpload = (event) => {
        const file = event.target.files[0]; // Obtiene el primer archivo seleccionado
        // Aquí puedes realizar el procesamiento del archivo, por ejemplo, enviarlo a un servidor o procesarlo localmente
        console.log('Archivo seleccionado:', file);
    };

    return (
        <UploadContainer>
        <UploadBox>
            <h1 className='title-tool-container'>{title}</h1>
            <p onClick={handleTemplateClick} className='template-downloader'>
                    <a href={driveLink}>Template</a>
            </p>
            <UploadArea  >
                <UploadIcon>
                    <Icon className="material-symbols-outlined">cloud_upload</Icon>
                    <p>Deja tu template</p>
                </UploadIcon>
                <input
                    id="file-upload"
                    type="file"
                    style={{ position: 'absolute', opacity: 0 , width: '100%', height:'100%', cursor: 'pointer'}}
                    onChange={handleFileUpload}
                />
            </UploadArea>
        </UploadBox>
        </UploadContainer>
    );
}

export default ToolContainer;
