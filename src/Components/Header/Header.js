import React, { useEffect, useState } from 'react';
import { Container, Form, FormControl, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Resturen from '../Resturent/Resturen';

const Header = () => {


    // const [meals, setmeals] = useState([])

    // const handler = event => {
    //     const searchtext = event.target.value;
    //     console.log(searchtext)
    //     setText(searchtext)
    // }

    // useEffect(() => {
    //     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${texts}`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setmeals(data?.meals))

    // }, [texts])

    return (
        <>

            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Meal DB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Stack direction="horizontal" gap={5}>
                                <NavLink
                                    to="/home"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "blue"
                                    }}
                                >
                                    HOME
                                </NavLink>

                                <NavLink
                                    to="/resturent"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "blue"
                                    }}
                                >
                                    Resturent
                                </NavLink>
                            </Stack>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>

    );
};

export default Header;