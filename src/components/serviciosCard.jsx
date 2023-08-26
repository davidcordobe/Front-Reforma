import React from 'react';
import { Card } from 'react-bootstrap';


const servicioCard = (props) => {
    return (
        <div className='container'>
            <Card style={{ width: '10rem', gap: '5px', marginBottom: '10px', textAlign: 'center', alignItems: 'center' }}>
                <Card.Img variant="top" src={ props.img } />
            </Card>
        </div>
    )
}

export default servicioCard;