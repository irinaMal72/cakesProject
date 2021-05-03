import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import CakeItem from "./CakeItem";

const CakeList = observer(() => {
    const {cake}=useContext(Context)
    return (
        <Row className="d-flex">
            {cake.cakes.map(cake =>
                <CakeItem key={cake.id} cake={cake}/>
            )}
        </Row>
    );
});

export default CakeList;