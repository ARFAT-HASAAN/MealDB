import React from 'react';
import { Col, Stack, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';


const Manu = (props) => {
    // console.log(props.meal)

    const { strMealThumb, strMeal, idMeal } = props?.meal
    return (

        <Col>
            <Card>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Stack direction="horizontal" gap={3}>

                        <Link to={`/resturent/${idMeal}`}>Details</Link>

                        <Link to={`/resturent/${idMeal}`}><Button variant="primary"> click
                        </Button>{''} </Link>

                    </Stack>
                </Card.Body>

            </Card>
        </Col>
    )
};

export default Manu;