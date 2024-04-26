import React, {useState} from 'react';
import * as XLSX from 'xlsx'

import styled from 'styled-components';
import PrimaryButton from '../Components/PrimaryButton'

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
    const [file, setFile] = useState(null);

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
        setFile(event.target.files[0]);
    };

    const handleSubmit = async () => {
        if (!file) {
            alert('Please select a file');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            
            // agregar endpoint ruteo!!!


            const response = await fetch('http://127.0.0.1:5000/cotizar', {
            method: 'POST',
            body: formData
            });
            
            if (!response.ok) {
            throw new Error('Failed to upload file');
            }

            // Process response if needed
            const jsonData = await response.json();

            const jsonArray = JSON.parse(jsonData);
            // Convert JSON data to XLSX
            console.log(jsonArray)


            const worksheet = XLSX.utils.json_to_sheet(jsonArray);
        
            // Create workbook
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        
            // Convert workbook to binary XLSX
            const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        
            // Create a Blob from the XLSX data
            const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        
            // Create a temporary URL for the Blob
            const url = window.URL.createObjectURL(blob);
        
            // Create a link element to initiate the download
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'data.xlsx');
            document.body.appendChild(link);
        
            // Initiate the download
            link.click();
        
            // Clean up by removing the temporary URL and link element
            window.URL.revokeObjectURL(url);
            document.body.removeChild(link);

        } catch (error) {
            console.error('Error:', error);
            alert('Failed to upload file');
        }
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
            <div onClick={handleSubmit} >
                < PrimaryButton text="Upload File"/>
            </div>
            
        </UploadBox>
        </UploadContainer>
    );
}

export default ToolContainer;
