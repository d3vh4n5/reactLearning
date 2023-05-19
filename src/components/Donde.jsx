import React from 'react'

const Donde = () => {
  return (
    <div>
        <h1>Estás en el componente Donde</h1>
        <p>Este es el terrible pedazo de componente donde</p>
        <p><b>Enrutamiento con parámetros con distintas tecnologías:</b></p>
        <p>Desde una api con Node = "ruta/:id"</p>
        <p>Desde React cuando defino las rutas en el componente Route = "path={'/especifico/:id'}"</p>
        <p>Desde Django en el gestor de urls: "ruta/{'<'}str:nombrebar{'>'}"</p>
    </div>
  )
}

export default Donde