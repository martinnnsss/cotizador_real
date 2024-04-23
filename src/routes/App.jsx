import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home.jsx';
import Tools from '../Pages/Tools.jsx';



import '../Styles/App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}  />
        <Route exact path='/tools' element={<Tools />} />     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
