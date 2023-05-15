import React from 'react';
import { Card } from 'react-bootstrap';


const producto = (props) => {
    return (
        <div className='container'>
            <Card style={{ width: '30rem', gap: '5px', marginBottom: '10px', textAlign: 'center' }}>
                <Card.Img variant="top" src={ props.img } />
            </Card>
        </div>
    )
}

export default producto;



