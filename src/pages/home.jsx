import React from 'react';
import '../css/home.css';

import tuFoto from '../img/perfil-con-rodillo.webp'; // Importa tu foto

const Home = () => {
    return (
        <div className="home-container container-fluid fade-enter-active">
                <h2 className="titulo-home">REFORMA 2.7</h2>
            <div className="intro-container">
                <img src={tuFoto} alt="Tu Foto" className="imagen-tu-foto"/>
                <p className="descripcion-home">
                    ¡Bienvenido a REFORMA, tu destino para la restauración de muebles de madera! Nos enorgullece ser expertos en revivir la vida y la belleza de tus muebles antiguos, respetando su historia y preservando su encanto original. <br />

                    En REFORMA entendemos que cada mueble tiene su propia historia y valor sentimental. Es por eso que dedicamos nuestra pasión y habilidades artesanales a cada proyecto que emprendemos. Nos comprometemos a brindar resultados excepcionales y superar tus expectativas en cada restauración. <br />

                    Nuestro equipo de artesanos altamente capacitados se dedica a tratar cada pieza con el máximo cuidado y atención. Utilizamos técnicas tradicionales y modernas, combinadas con materiales de la más alta calidad, para garantizar que tus muebles recuperen su esplendor original. <br />

                    Ya sea que necesites restaurar una antigua mesa de comedor, una silla clásica o cualquier otro mueble de madera, estamos aquí para ayudarte. Desde la eliminación de daños y manchas hasta el pulido y la reparación de detalles intricados, nuestro equipo se asegurará de que cada aspecto de tu mueble sea tratado con meticulosidad y destreza. <br />

                    Además de la restauración, también ofrecemos servicios de asesoramiento y diseño personalizado para ayudarte a darle un nuevo estilo a tus muebles. Podemos adaptar el acabado, los colores y los detalles para crear una pieza única que se ajuste perfectamente a tu gusto y decoración. <br />

                    En REFORMA, creemos en la importancia de preservar la herencia de cada mueble y mantener viva su historia. Nos comprometemos a trabajar en estrecha colaboración contigo para comprender tus deseos y necesidades, y así asegurarnos de que el resultado final sea exactamente lo que esperas. <br />

                    No importa el estado actual de tus muebles de madera, en REFORMA tenemos la experiencia y la pasión para devolverles su esplendor perdido. Confía en nosotros para rejuvenecer tus tesoros familiares y transformarlos en piezas que serán admiradas durante generaciones. <br />

                    Contáctanos hoy mismo para discutir tu proyecto de restauración. Estamos emocionados de formar parte de la historia de tus muebles y ayudarte a crear un legado duradero de belleza y encanto. En REFORMA, tu satisfacción es nuestra máxima prioridad.
                </p>
            </div>
        </div>
    );
};

export default Home;
