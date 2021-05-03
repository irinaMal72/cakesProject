import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateCake from "../components/modals/CreateCake";


const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [cakeVisible, setCakeVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setCakeVisible(true)}
            >
                Добавить изделие
            </Button>
            <CreateType show={typeVisible} onHide={() =>setTypeVisible(false)}/>
            <CreateCake show={cakeVisible} onHide={() =>setCakeVisible(false)}/>

        </Container>

    );
};

export default Admin;