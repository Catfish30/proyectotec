import React from 'react'
import { Route } from 'react-router-dom'
import CursosView from './views/CursosView'
import NotasView from './views/NotasView'


export default function Routes() {
    return (
        <div>
            <Route path="/" exact component={CursosView} />
            <Route path="/cursos/:id" exact component={NotasView} />
        </div>
    )
}
