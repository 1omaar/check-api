import { Link } from 'react-router-dom';
import React from 'react'
import { Card, Button } from "react-bootstrap";
function Cocktail({cocktails}) {
    
    return (
        <div >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={cocktails.strDrinkThumb} />
                <Card.Body>
                    <Card.Title>{cocktails.strDrink}</Card.Title>
                    <Link to={`/Cocktail/${cocktails.idDrink}`}> <Button variant="dark">Detail</Button></Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cocktail
