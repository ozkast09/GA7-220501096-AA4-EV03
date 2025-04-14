import React from "react";
import"./StockTable.css"; // Importa estilos para este componente

function StockTable({stockData}){
    if(!stockData || stockData.length ===0 ){
        return<p>No hay productos en stock.</p>;
    }

    return(
        <div className="stock-table-container">
            <h2>Stock de bodega</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre del producto:</th>
                        <th>Codigo</th>
                        <th>Cantidad</th>
                        <th>Unidad de medidad</th>
                        <th>Ubicacion</th>
                        <th>Marca</th>
                        <th>Proveedor</th>
                    </tr>
                </thead>
                <tbody>
                    {stockData.map(item=>(
                        <tr key={item.id}>
                            <td>{item.nombre}</td>
                            <td>{item.codigo}</td>
                            <td>{item.cantidad}</td>
                            <td>{item.unidadMedida}</td>
                            <td>{item.ubicacion}</td>
                            <td>{item.marca}</td>
                            <td>{item.proveedor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StockTable;