import React, {useState} from 'react';
import '../Styles/tools.css'; 

import ToolContainer from '../Containers/ToolContainer';

const Tools = () => {
    const [activeTool, setActiveTool] = useState("cotizador"); // Estado para controlar qué contenedor está abierto
  
    // Función para cambiar el contenedor activo cuando se hace clic en un elemento de la barra de herramientas
    const handleToolClick = (tool) => {
      setActiveTool(tool);
    };
  
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
            <li className='toolbar-li' onClick={() => handleToolClick("ruteador")}>
              <span className="material-symbols-outlined">
                route
              </span>
              <span>
                Ruteador
              </span>
            </li>
          </ul>
          <p className='madewithlove'> Made with 💜 From COPS</p>
        </div>
        <div className="tool-container">
          {activeTool === "cotizador" && <ToolContainer type="cotizador" />}
          {activeTool === "ruteador" && <ToolContainer type="ruteador" />}
        </div>
      </div>
    );
  }
  
  export default Tools;