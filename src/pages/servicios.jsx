import React from 'react';
import '../css/servicios.css';
import ImgServicios from '../components/imagenes-servicios';

const Servicios = () => {
    return (
        <div className="servicios-container fade-enter-active container">
            {ImgServicios.map((servicio) => (
                <div key={servicio.id} className="servicio">
                    <img src={servicio.imagenes[0].ruta} alt={servicio.nombre} className="servicio-imagen" />
                    <h3 className="servicio-titulo">{servicio.nombre}</h3>
                    <p className="servicio-descripcion">
                        {servicio.descripcion}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Servicios;

