import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {SHOP_ROUTE} from "../utils/consts";
import NavLink from "react-bootstrap/NavLink";
import Button from "react-bootstrap/Button";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";


const NavBar = observer( () => { //отслеживание в режиме реального времени
    const {user}=useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={SHOP_ROUTE} >КупиТорт</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'while'}}>
                        <Button variant={"outline-light"}>Админ панель</Button>
                        <Button variant={"outline-light"} className="ml-2">Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'while'}}>
                        <Button variant={"outline-light"} onClick={()=> user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;