import React, {useState, useEffect} from 'react';
import axios from 'axios';

import '../Styles/tools.css'; 

import ToolContainer from '../Containers/ToolContainer';

const Tools = () => {
    const [activeTool, setActiveTool] = useState("cotizador"); // Estado para controlar qué contenedor está abierto
    const [authorized, setAuthorized] = useState(false);

    // Función para cambiar el contenedor activo cuando se hace clic en un elemento de la barra de herramientas
    const handleToolClick = (tool) => {
      setActiveTool(tool);
    };


    useEffect(() => {
      // Check if user is authorized
      const checkAuthorization = async () => {
        const token = localStorage.getItem('token');
        console.log(token)
        if (token) {
          console.log(token)
          try {
            /* Include the token in the Authorization header
            const response = await axios.post('https://copscl.pythonanywhere.com/check-auth', {
              headers: {
                Authorization: token
              }
            });
            */
            const response = await axios.post('https://copscl.pythonanywhere.com/check-auth', {
              Authorization: token
            });
            console.log(response)
            if (response.status === 200) {
              setAuthorized(true);
              
            } else {
              setAuthorized(false);
              window.location.href = '/';
            }
          } catch (error) {
            console.error(error);
            window.location.href = '/';
          }
        } else {
          // Handle if token is not present
          setAuthorized(false);
          window.location.href = '/';
        }
      };

      checkAuthorization();
    }, []);

    return (
      <div className="container">
        <div className="toolbar">
          <h1 className='toolbar-h1'>B2B tools</h1>
          <ul>
            <li className='toolbar-li' onClick={() => handleToolClick("cotizador")}>
              <span className="material-symbols-outlined check-money">
                monetization_on
              </span>
              <span>
                Cotizador
              </span>
            </li>
          </ul>
          <p className='madewithlove'> Made with 💜 From COPS</p>
        </div>
        <div>
    </div>
        <div className="tool-container">
          {activeTool === "cotizador" && <ToolContainer type="cotizador" />}
          {activeTool === "ruteador" && <ToolContainer type="ruteador" />}
        </div>
      </div>
    );
  }
  
  export default Tools;