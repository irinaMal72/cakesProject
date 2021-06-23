import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {useHistory} from "react-router-dom"
import {CAKE_ROUTE} from "../utils/consts";

const CakeItem = ({cake}) => {
    const history = useHistory()
    return (
        <Col md={3} className={"mt-3"} onClick={() => history.push(CAKE_ROUTE + '/'+cake.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL +cake.img}/>
                <div className="mt-1 d-flex justify-content-between align-items-center">
                    <div>{cake.name}</div>
                </div>

            </Card>
        </Col>
    );
};

export default CakeItem;