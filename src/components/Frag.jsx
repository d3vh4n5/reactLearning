import React, {Fragment} from 'react'

const Frag = (props) => {
  return (
    <Fragment>
        <h3>Componente con fragment</h3>
        <p>Imprimiento propiedad: {props.saludo}</p>
        <h4>Tiene la edad de: {props.edad}</h4>
    </Fragment>
  )
}

export default Frag