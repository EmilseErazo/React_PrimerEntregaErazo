import React from 'react';
//import './Navbar.css'; // Asegúrate de tener estilos específicos para Navbar si es necesario.

const Navbar = () => {
  return (
    <nav className="navB">
      <h1 className='Titulo'>ZINNIA</h1>
      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contactos</li>
        <li>Mis Compras</li>
      </ul>
    </nav>
  );
}

export default Navbar;
