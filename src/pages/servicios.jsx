import React, { useState } from 'react';
import '../css/servicios.css';
import imagenes from '../components/imagenes-servicios';
import { Card, Row, Col } from 'react-bootstrap';



const Servicios = () => {
    const [selectedImageIndices, setSelectedImageIndices] = useState(
        Array(imagenes.length).fill(0)
    );

    const showNextImage = (index) => {
        setSelectedImageIndices((prevIndices) => {
            const newIndices = [...prevIndices];
            newIndices[index] = (newIndices[index] + 1) % imagenes[index].imagenes.length;
            return newIndices;
        });
    };

    const showPrevImage = (index) => {
        setSelectedImageIndices((prevIndices) => {
            const newIndices = [...prevIndices];
            newIndices[index] = (newIndices[index] - 1 + imagenes[index].imagenes.length) %
                imagenes[index].imagenes.length;
            return newIndices;
        });
    };

    return (
        <div className="container">
            <br />
            <Row>
                {imagenes.map((servicio, index) => (
                    <Col md={4} key={servicio.id} className="mb-3">
                        <Card>
                            {servicio.imagenes.length > 0 && (
                                <Card.Img
                                    variant="top"
                                    src={servicio.imagenes[selectedImageIndices[index]].ruta}
                                    alt={servicio.nombre}
                                />
                            )}
                            <Card.Body>
                                <Card.Title className="title">{servicio.nombre}</Card.Title>
                                <Card.Text className="descripcion">{servicio.descripcion}</Card.Text>
                                <div className="botones-imagen">
                                    <button className="btn-anterior" onClick={() => showPrevImage(index)}>
                                        Anterior
                                    </button>
                                    <button className="btn-siguiente" onClick={() => showNextImage(index)}>
                                        Siguiente
                                    </button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Servicios;


