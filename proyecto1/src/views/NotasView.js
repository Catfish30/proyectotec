import React from 'react'

import { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { obtenerNota } from "../services/NotaService";



export default function NotasView() {

    const [notas,setNota] = useState([])    

    const {id} = useParams()

    const getNotas = async () => {
        try {
            const notasObtenidas = await obtenerNota(id)
            setNota(notasObtenidas)
            
        } catch (error) {
            console.log(error)
        }   

    }
    useEffect(() => {
        getNotas()
    },[])


    return (
        <div className='container p-4' style={{minHeight:'74vh'}}>
           <h1>Notas</h1>
           
           <table className="table">
                <thead>
                    <tr>
                        <th>Nota 1</th>
                        <th>Nota 2</th>
                        <th>Nota 3</th>
                        <th>Nota 4</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>{notas.nota_1}</td>
                            <td>{notas.nota_2}</td>
                            <td>{notas.nota_3}</td>
                            <td>{notas.nota_4}</td>
                        </tr>
                </tbody>
            </table>
            <Link className="btn btn-primary" to={`/`}>
                Regresar
            </Link>
 
        </div>
    )
}

