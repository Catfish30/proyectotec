import React from 'react'

import { useState, useEffect } from "react";
import { Card, Button,Row,Col } from "react-bootstrap"

import { obtenerCursos } from "../services/CursoService";



export default function CursoView() {

    const [cursos,setCurso] = useState([])    

    const getCursos = async () => {
        try {
            const cursosObtenidos = await obtenerCursos()
            setCurso(cursosObtenidos)
            
        } catch (error) {
            console.log(error)
        }   

    }

    useEffect(() => {
        getCursos()
    },[])


    return (
        <div>
            
            <h1 className="py-3">Cursos Matriculados</h1>
            <Row xs={1} md={3} className="g-4">
            {cursos.map((curso,i) => (
                <Col key={i}>
                    <Card style={{ width: '14rem' }} >
                        <Card.Img variant="top" src={curso.curso_imagen} />
                        <Card.Body>
                            <Card.Title>{curso.curso_nombre}</Card.Title>
                            <Card.Text>
                            Docente: {curso.curso_docente}
                            </Card.Text>
                            <Button variant="primary btn-sm ">Ingresar</Button>
                        </Card.Body>
                        </Card>
                </Col>
                ))}
            </Row>

        </div>
    )
}

