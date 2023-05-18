import React from 'react'

const Inicio = () => {
  return (
    <div>
        <h1>Estás en el componente Inicio</h1>
        <h1>Bienvenid@ a mi página de pruebas de React.js</h1>
        <hr />
        <br />
        <p>Esta es una página en la que estoy practicando y aprendiendo al tecnología de react.js</p>
        <br />
        <p>En este proyecto no hay diseño visual, solo lo mínimo para que la aplicación sea entendible.
          La importancia de la misma es solo es estudio funcional de cada uno de los ejercicios y funcionalidades de React.
        </p>
        <ul className='listaInicio'>
          <label htmlFor="">En la misma vemos tecnologias como:</label>
          <li>yarn</li>
          <li>Bootstrap</li>
          <li>Axios</li>
          <li>APIs</li>
        </ul>
    </div>
  )
}

export default Inicio