import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaInstagram } from 'react-icons/fa'; // Importa el icono de Instagram
import '../css/formulario.css';


const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Verificar que todos los campos estén completos
        if (!name || !email || !message) {
            alert('Por favor, complete todos los campos');
            return;
        }
    
        // Construir el mensaje con los datos del usuario
        const query = `Nombre: ${name}%0AEmail: ${email}%0AMensaje: ${message}`;
    
        // Abrir la conversación de WhatsApp con los datos predefinidos
        window.open(`https://wa.me/+543517163782?text=${query}`, '_blank');
    
        // Reiniciar el formulario
        setName('');
        setEmail('');
        setMessage('');
    };
    

    return (
        <div className="contact-form-container fade-in">
            <h2>Contacto</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="message">
                    <Form.Label>Mensaje:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </Form.Group>
                <div className="form-actions">
                    <Button variant="primary" type="submit">
                        Enviar consulta
                    </Button>
                </div>
            </Form>

            <div className="instagram-link text-center">
                <h3>Seguinos en Instagram</h3>
                <a href="https://www.instagram.com/reforma2.7/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={50} className='icono'/>
                </a>
            </div>
        </div>
    );
};

export default ContactForm;
