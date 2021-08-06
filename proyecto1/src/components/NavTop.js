import React from 'react'
import { Navbar,Container,Nav,Image,Button } from 'react-bootstrap'
import logo from '../assets/logo-vizcaya.png'

export default function NavTop() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Container>
                <Image src={logo} rounded style={{height:'50px'}} />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                <Nav>
                    <Nav.Item>
                        <Nav.Link>Inicio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Noticias</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" >Admision</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-3" >Alumnos</Nav.Link>
                    </Nav.Item>                
                </Nav>
                </Navbar.Collapse>
                <Button variant="danger">Ingresar</Button>
            </Container>
            </Navbar>
        </div>
    )
}
