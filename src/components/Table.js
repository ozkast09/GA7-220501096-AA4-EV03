import React from 'react';
import './Table.css'; // Importa los estilos para la tabla (opcional)

function Table({ data, columns }) {
  if (!data || data.length === 0) {
    return <p>No hay datos para mostrar.</p>;
  }

  if (!columns || columns.length === 0) {
    return <p>No se han definido las columnas para la tabla.</p>;
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={`${index}-${column.key}`}>
                  {/* Renderiza el valor de la celda utilizando la función de renderizado si existe, */}
                  {/* o directamente el valor de la propiedad especificada en column.key */}
                  {column.render ? column.render(item) : item[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;