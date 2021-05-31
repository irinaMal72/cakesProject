import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import CakeList from "../components/CakeList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchTypes} from "../http/cakeAPI";

const Shop = observer(() => {
    const {cake} = useContext(Context)

    useEffect(()=>{
        fetchTypes().then(data => cake.setTypes(data))
    },[])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <CakeList/>
                </Col>
            </Row>

        </Container>

    );
});

export default Shop;