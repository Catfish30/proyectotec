import React from 'react'
import { Route } from 'react-router-dom'
import CursoView from './views/CursoView'


export default function Routes() {
    return (
        <div>
            <Route path="/" exact component={CursoView} />
        </div>
    )
}
