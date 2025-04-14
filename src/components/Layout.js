// src/components/Layout.js
import React from 'react';
import './Layout.css'; // Importa los estilos para este componente
import NavigationBar from './NavigationBar'; // Importa el componente de navegación

function Layout({ children }) {
  return (
    <div className="layout-container">
      <header className="layout-header">
        {/* Aquí puedes colocar el logo de la tienda o el título principal */}
        <h1>Minimercado La 43</h1>
      </header>
      <NavigationBar /> {/* Renderiza el componente de navegación */}
      <main className="layout-main">
        {children} {/* Aquí se renderizará el contenido específico de cada página */}
      </main>
      <footer className="layout-footer">
        <p>&copy; 2025 Minimercado La 43. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Layout;