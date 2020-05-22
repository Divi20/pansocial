import React, { useState, useEffect } from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';

import MainComponent from './components/MainComponent';




export default function App() {

  return (
    <BrowserRouter>
    <div className="App">
    <MainComponent></MainComponent>
   
     </div>
    
    </BrowserRouter>
   
  );
}


