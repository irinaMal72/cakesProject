import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import CakeList from "../components/CakeList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchCakes, fetchTypes} from "../http/cakeAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {cake} = useContext(Context)

    useEffect(()=>{
        fetchTypes().then(data => cake.setTypes(data))
        fetchCakes(null,1,3).then(data =>{
            cake.setCakes(data.rows)
            cake.setTotalCount(data.count)
        })
    },[])

    useEffect(() => {
        fetchCakes(cake.selectedType.id,  cake.page, 3).then(data => {
            cake.setCakes(data.rows)
            cake.setTotalCount(data.count)
        })
    }, [cake.page, cake.selectedType, ])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <CakeList/>
                    <Pages/>
                </Col>
            </Row>

        </Container>

    );
});

export default Shop;