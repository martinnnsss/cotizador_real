import React, {useState} from 'react';
import * as XLSX from 'xlsx'

import styled from 'styled-components';
import PrimaryButton from '../Components/PrimaryButton'
import LoadingPopup from '../Components/Popup';

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
  height: 75%;
  width: 40%;
  @media only screen and (max-width: 700px) {
    width: 80%;
  }
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
  height:42%;
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


const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  color: var(--moradul);
  padding: 10px;
  font-size: 12px;
  border: none;
  cursor: pointer;
  width: 20vw;
  border-radius: 1rem;
`;

const DropdownContent = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  width:100%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 3;
  border-radius: 10px;
`;

const Option = styled.div`
    padding: 8px 12px;
    cursor: pointer;
    font-size: 11px;

    &:hover {
        background-color: #f1f1f1;
    }

`;


function ToolContainer({ type }){
    const [driveLink, setDriveLink] = useState('');
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const [loading, setLoading] = useState(false);
    const [notionLink, setNotionLink] = useState('')

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handleTemplateClick = () => {
        // Aquí puedes agregar más casos dependiendo de los type
        if (type === "cotizador") {
            setDriveLink('https://docs.google.com/spreadsheets/d/1DR6ywVb7tYKUJHxvXurA1iFk3HuVdIBe/edit?usp=sharing&ouid=102814924398908057654&rtpof=true&sd=true');
            setNotionLink('https://aware-wildflower-210.notion.site/Uso-de-Cotizador-57c147c4af184dba98c135e2129e0f4e');
        } else if (type === "ruteador") {
            setDriveLink('https://drive.google.com/ruteador');
            setNotionLink('https://drive.google.com/ruteador');
        }
    };
    
    let title = 'Upload your files here';
    if (type === "cotizador") {
        title = "💰Cotizador💰";
    } else if (type === "ruteador") {
        title = "🗺️Ruteador🗺️";
    }
    
    const options = ["Normal", "Conductor Fijo", "Viaje Interregional", "Conductor Bilingüe", "Espera en Aeropuerto con Cartel"];
    

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
      };
    
    const handleFileUpload = (event) => {
        const selectedFile = event.target.files[0]
        setFile(selectedFile);
        setFileName(selectedFile.name);
    };

    const handleSubmit = async () => {

        if (!file) {
            alert('Selecciona un archivo a cotizar');
            return;
        }
        if (selectedOption ===""){
            alert ("Elige un tipo de cotización")
            return;
        }

        if (  selectedOption ==="Conductor Fijo" || selectedOption ==="Conductor Bilingüe" || selectedOption ==="Espera en Aeropuerto con Cartel"){
            alert("🚨 Viaje Especial 🚨 Has seleccionado un tipo de viaje que necesita ser gestionado por C-OPS. A continuación, te mostramos los precios finales, pero es importante que te comuniques con C-OPS para confirmar los detalles del servicio.")
        }
        const formData = new FormData();
        formData.append('file', file);

        try {
            setLoading(true);

            console.log(formData)
            const response = await fetch('https://copscl.pythonanywhere.com/cotizar', {
            method: 'POST',
            body: formData
            });

            if (!response.ok) {
                setLoading(false);
                
                throw new Error(`Failed to upload file`);
            }

            // Process response if needed
            const jsonData = await response.json();
            
            const jsonArray = JSON.parse(jsonData);
            // Convert JSON data to XLSX
            console.log("-------------",selectedOption)
            console.log(jsonArray)
            

            let multiplier =1

            if (selectedOption ==="Normal"){
                multiplier=1
            } else if (selectedOption ==="Conductor Fijo" || selectedOption ==="Conductor Bilingüe" || selectedOption ==="Espera en Aeropuerto con Cartel"){
                multiplier=1.2
            } else if (selectedOption ==="Viaje Interregional"){
                multiplier=1.5
            } 

            const updatedArray = jsonArray.map(item => {
                const roundToNearestThousand = (number) => Math.ceil(number / 1000) * 1000;

                const cabifyMixCorp = roundToNearestThousand(item["Cabify Mix Corp"] * multiplier);
                const cabifyCorp = roundToNearestThousand(item["Cabify Corp"] * multiplier);
                const taxiCorp = roundToNearestThousand(item["Taxi Corp"] * multiplier);
                const cabifyGroup8Pax = roundToNearestThousand(item["Cabify Group (8 pax)"] * multiplier);
                const cabifyGroup6Pax = roundToNearestThousand(item["Cabify Group (6 pax)"] * multiplier);
              
                // Retornamos un nuevo objeto con los valores actualizados
                return {
                  ...item,
                  "Cabify Mix Corp": cabifyMixCorp,
                  "Cabify Corp": cabifyCorp,
                  "Taxi Corp": taxiCorp,
                  "Cabify Group (8 pax)": cabifyGroup8Pax,
                  "Cabify Group (6 pax)": cabifyGroup6Pax
                };
            });
            console.log(updatedArray)
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
            alert('Template Erroneo, favor verificar el formato');
        } finally {
            setLoading(false); // Set loading to false when API call completes
        }
        };


    return (
        <UploadContainer>
        <LoadingPopup isLoading={loading} />
        <UploadBox>
            <h1 className='title-tool-container'>{title}</h1>
            <p onClick={handleTemplateClick} className='template-downloader'>
                    <a href={driveLink} target="_blank">Template |</a>
                    <a href={notionLink} target="_blank">| Manual de uso</a>
            </p>
            <DropdownContainer>
                <DropdownButton onClick={() => setIsOpen(!isOpen)}>
                    { selectedOption.includes("Normal") || selectedOption.includes("Conductor Fijo") || selectedOption.includes("Viaje Interregional") || selectedOption.includes("Conductor Bilingüe") || selectedOption.includes("Espera en Aeropuerto con Cartel")  ? selectedOption : 'Tipo de Cotización' }
                </DropdownButton>
                <DropdownContent open={isOpen}>
                    {options.map((option, index) => (
                    <Option key={index} onClick={() => handleOptionClick(option)}>
                        {option}
                    </Option>
                    ))}
                </DropdownContent>
            </DropdownContainer>
            <UploadArea  >
                <UploadIcon>
                    <Icon className="material-symbols-outlined">cloud_upload</Icon>
                    <p>Deja tu template</p>
                </UploadIcon>
                <p> <i>{fileName}</i></p>
                <input
                    id="file-upload"
                    type="file"
                    style={{ position: 'absolute', opacity: 0 , width: '100%', height:'100%', cursor: 'pointer'}}
                    onChange={handleFileUpload}
                />
            </UploadArea>
            <div onClick={handleSubmit} style={{ marginTop: '1rem'}} >
                < PrimaryButton text="Upload File"/>
            </div>
        </UploadBox>
        </UploadContainer>
    );
}

export default ToolContainer;
