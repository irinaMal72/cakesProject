import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";

const CakePage = () => {
    const cake={id:1, name: 'Сладкоежка', price: 1500, img: '', description: 'Домашний бисквит с прослойкой из вареной сгущенки. Оформлен дробленым арахисом, шоколадной глазурью и ванильным гелем.'}
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={cake.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex align-items-center">
                        <h2>{cake.name}</h2>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        stylr={{width: 300, height: 300, fontsize: 32, border: "5px solid lightgray"}}
                    >
                        <h3>
                            От: {cake.price}
                        </h3>
                        <Button variant={"outline-dark"}>
                            Добавить в корзину
                        </Button>
                    </Card>
                </Col>
            </Row>
            <Row>
                <h1>Описание:</h1>
                {cake.description}
            </Row>
        </Container>

    );
};

export default CakePage;