import React from 'react';
import '../css/servicios.css';
// import imagen1 from '../img/servicio1.jpg'; // Importa la imagen 1
// import imagen2 from '../img/servicio2.jpg'; // Importa la imagen 2
// import imagen3 from '../img/servicio3.jpg'; // Importa la imagen 3

const Servicios = () => {
    return (
        <div className="servicios-container fade-enter-active">
            <div className="servicio">
                {/* <img src={} alt="Servicio 1" className="servicio-imagen" /> */}
                <h3 className="servicio-titulo">Servicio 1</h3>
                <p className="servicio-descripcion">
                    Descripción del servicio 1. Aquí puedes escribir el texto relacionado con el servicio.
                </p>
            </div>
            <div className="servicio">
                {/* <img src={imagen2} alt="Servicio 2" className="servicio-imagen" /> */}
                <h3 className="servicio-titulo">Servicio 2</h3>
                <p className="servicio-descripcion">
                    Descripción del servicio 2. Aquí puedes escribir el texto relacionado con el servicio.
                </p>
            </div>
            <div className="servicio">
                {/* <img src={imagen3} alt="Servicio 3" className="servicio-imagen" /> */}
                <h3 className="servicio-titulo">Servicio 3</h3>
                <p className="servicio-descripcion">
                    Descripción del servicio 3. Aquí puedes escribir el texto relacionado con el servicio.
                </p>
            </div>
        </div>
    );
};

export default Servicios;
