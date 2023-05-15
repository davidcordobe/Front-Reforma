import React, { useState } from 'react';
import { Card, Row, Col, Modal } from 'react-bootstrap';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import '../css/productos.css';
import imagenes from '../components/imagenes';

const Productos = () => {
    const [expandedProductIndex, setExpandedProductIndex] = useState(-1);
    const [expandedImageIndex, setExpandedImageIndex] = useState(-1);

    const openImageModal = (productIndex, imageIndex) => {
        setExpandedProductIndex(productIndex);
        setExpandedImageIndex(imageIndex);
    };

    const closeImageModal = () => {
        setExpandedProductIndex(-1);
        setExpandedImageIndex(-1);
    };

    const showNextImage = () => {
        const product = imagenes[expandedProductIndex];
        const nextIndex = (expandedImageIndex + 1) % product.imagenes.length;
        setExpandedImageIndex(nextIndex);
    };

    const showPrevImage = () => {
        const product = imagenes[expandedProductIndex];
        const prevIndex = (expandedImageIndex - 1 + product.imagenes.length) % product.imagenes.length;
        setExpandedImageIndex(prevIndex);
    };

    return (
        <div className="container">
            <br />
            <Row>
                {imagenes.map((producto, productIndex) => (
                    <Col md={4} key={producto.id} className="mb-3">
                        <Card
                            className="fade-in"
                            onClick={() => openImageModal(productIndex, 0)}
                            style={{ cursor: 'pointer' }}
                        >
                            <Card.Img variant="top" src={producto.imagenes[0].ruta} alt={producto.imagenes[0].titulo} />
                            <Card.Body>
                                <Card.Title className="title">{producto.nombre}</Card.Title>
                                <Card.Text className="descripcion">{producto.descripcion}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Modal show={expandedProductIndex !== -1} onHide={closeImageModal} centered>
                <Modal.Body className={expandedProductIndex !== -1 ? 'expanded' : ''}>
                    {expandedProductIndex !== -1 && (
                        <>
                            <button className="btn-prev" onClick={showPrevImage}>
                                <BsChevronLeft />
                            </button>
                            <img
                                src={imagenes[expandedProductIndex]?.imagenes[expandedImageIndex]?.ruta}
                                alt={imagenes[expandedProductIndex]?.imagenes[expandedImageIndex]?.titulo}
                            />
                            <button className="btn-next" onClick={showNextImage}>
                                <BsChevronRight />
                            </button>
                        </>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Productos;


