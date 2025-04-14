import React from 'react';
// Importa los componentes necesarios de la librería de enrutamiento de React
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// Importa el componente de diseño general de la aplicación
import Layout from './components/Layout';

// Importa los componentes que representan las diferentes secciones de la aplicación
import StockTable from './components/StockTable';
import ProductEntryForm from './components/ProductEntryForm';
import ProductCreationForm from './components/ProductCreationForm';
import SupplierCreationForm from './components/SupplierCreationForm';
import BrandCreationForm from './components/BrandCreationForm';
import LocationCreationForm from './components/LocationCreationForm';
import UnitOfMeasureCreationForm from './components/UnitOfMeasureCreationForm';
import ProductOutflowForm from './components/ProductOutflowForm';
// ... otros imports de componentes de utilidad si los tienes ...

function App() {
  return (
    // El componente Router habilita el enrutamiento en toda la aplicación
    <Router>
      {/* El componente Layout proporciona la estructura visual general (header, main, footer, etc.) */}
      <Layout>
        
        {/* El componente Routes define un contenedor para las diferentes rutas de la aplicación */}
        <Routes>
          {/* Cada Route define una ruta específica y el componente que se renderizará cuando esa ruta coincida */}
          {/* Ruta para mostrar la tabla de stock */}
          <Route path="/stock" element={<StockTable />} />
          {/* Ruta para el formulario de ingreso de productos */}
          <Route path="/ingresar-producto" element={<ProductEntryForm />} />
          {/* Ruta para el formulario de creación de nuevos productos */}
          <Route path="/crear-producto" element={<ProductCreationForm />} />
          {/* Ruta para el formulario de creación de proveedores */}
          <Route path="/crear-proveedor" element={<SupplierCreationForm />} />
          {/* Ruta para el formulario de creación de marcas */}
          <Route path="/crear-marca" element={<BrandCreationForm />} />
          {/* Ruta para el formulario de creación de ubicaciones */}
          <Route path="/crear-ubicacion" element={<LocationCreationForm />} />
          {/* Ruta para el formulario de creación de unidades de medida */}
          <Route path="/crear-unidad-medida" element={<UnitOfMeasureCreationForm />} />
          {/* Ruta para el formulario de registro de salida de productos */}
          <Route path="/registrar-salida" element={<ProductOutflowForm />} />
          {/* Ruta por defecto (la página que se muestra al cargar la aplicación por primera vez) */}
          {/* En este caso, al acceder a la raíz "/", se mostrará el componente StockTable */}
          <Route path="/" element={<StockTable />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;