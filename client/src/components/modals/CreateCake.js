import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form} from "react-bootstrap";
import {Context} from "../../index";
import {createCake, fetchCakes, fetchTypes} from "../../http/cakeAPI";
import {observer} from "mobx-react-lite";

const CreateCake = observer(({show, onHide}) => {
    const {cake}=useContext(Context)
    const [name,setName] = useState('')
    const [price,setPrice] = useState(0)
    const [img,setImg] = useState(null)
    const [description, setDescription] = useState('')
    const [type,setType] = useState(null)

    useEffect(()=>{
        fetchTypes().then(data => cake.setTypes(data))
    },[])
    const selectFile = e =>{
        setImg(e.target.files[0])
    }

    const addCake = () =>{
        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('price', `${price}`)
        formData.append('img', img)
        formData.append('typeId', cake.selectedType.id)
        console.log(formData)

        createCake(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новое изделие
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle>{cake.selectedType.name|| "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {cake.types.map(type =>
                                <Dropdown.Item onClick={()=>cake.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e=>setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название изделия"
                    />
                    <Form.Control
                        value={price}
                        onChange={e=>setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите стоимость изделия"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <Form.Control
                        value={description}
                        onChange={e =>setDescription(e.target.value)}
                        className="mt-3"
                        placeholder="Введите описание изделия"
                    />
                    <hr/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addCake}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateCake;