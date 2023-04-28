import React, {Fragment} from 'react'

const Listados = (props) => {
    console.log(props.datos);
    return (
    <Fragment>

        <h3>Ejemplo de listado</h3>
        <ul>
            {
                props.datos.map( item=>(
                    <li key = {item.id}>{item.nombre} - {item.edad}</li>
                ))
            }
        </ul>
    </Fragment>
  )
}

export default Listados