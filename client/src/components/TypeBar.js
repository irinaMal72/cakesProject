import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import ListGroup from "react-bootstrap/ListGroup";
import {Context} from "../index";

const TypeBar = observer(() => {
    const {cake} = useContext(Context)
    return (
        <ListGroup>
            {cake.types.map(type =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={type.id===cake.selectedType.id}
                    onClick={()=>cake.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;