import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import PieDePagina from './components/PieDePagina';
import Productos from './components/Productos';

function App() {
  return (
    <>
      <Navbar/>
      <Productos />
      <PieDePagina />
      
    </>
  );
}

export default App;
