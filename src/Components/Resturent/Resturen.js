import React, { useEffect, useState } from 'react';
import { Form, FormControl, Row } from 'react-bootstrap';
import Manu from '../Manu/Manu';


const Resturen = () => {

    const [meals, setMeals] = useState([])
    const [texts, setText] = useState('')

    // console.log(meals);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${texts}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [texts])



    const Texthandler = event => {
        const searchtext = event.target.value.toLowerCase();
        setText(searchtext)
    }

    return (

        <>
            <Form style={{ width: '300px', margin: 'auto', }} className="d-flex my-2">
                <FormControl
                    onChange={Texthandler}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
            </Form>
            <Row xs={1} md={3} className="g-4 my-2">
                {
                    meals?.map(meal => <Manu meal={meal}></Manu>)
                }

            </Row>
        </>


    );
};

export default Resturen;