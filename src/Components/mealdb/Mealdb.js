import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const Mealdb = () => {
    const { id } = useParams()
    // console.log(id);
    const [details, setdetails] = useState()
    // console.log(details);
    const [founddetails, setfounddetails] = useState({})

    // const { strMeal, strInstructions, strMealThumb } = founddetails
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setdetails(data?.meals))
    }, [id])

    useEffect(() => {
        const Mymeal = details?.find(meal => meal?.idMeal === id)
        console.log(Mymeal)
        setfounddetails(Mymeal)
    }, [id, details])

    const history = useHistory()

    const backHanler = () => {
        history.push('/resturent')
    }

    return (

        <Card className='text-align-center' style={{ width: '20rem' }}>
            <Card.Img variant="top" src={founddetails?.strMealThumb} />
            <Card.Body>
                <Card.Title>{founddetails?.strMeal}</Card.Title>
                <Card.Text>
                    {founddetails?.strInstructions.slice(0, 150)}
                </Card.Text>
                <Button onClick={backHanler} variant="primary"> Back
                </Button>{''}
            </Card.Body>
        </Card>
    );
};

export default Mealdb;