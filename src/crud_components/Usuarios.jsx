import React from 'react'

const Usuarios = () => {
  return (
    <div>
        <div className="row">
            <div className="col-5">
                <h2>Listado de Usuarios</h2>
                <hr />
                <ul className='list-group'>
                    <li className='list-group-item m-2'>
                        <p>DATOS INTRODUCIDOS</p>
                        <p>DATOS INTRODUCIDOS</p>
                        <p>DATOS INTRODUCIDOS</p>
                        <button className='btn btn-sm btn-primary m-1 float-right'>EDITAR</button>
                        <button className='btn btn-sm btn-primary m-1 float-right'>BORRAR</button>
                    </li>
                    <li className='list-group-item m-2'>
                        <p>DATOS INTRODUCIDOS</p>
                        <p>DATOS INTRODUCIDOS</p>
                        <p>DATOS INTRODUCIDOS</p>
                        <button className='btn btn-sm btn-primary m-1 float-right'>EDITAR</button>
                        <button className='btn btn-sm btn-primary m-1 float-right'>BORRAR</button>
                    </li>
                    <li className='list-group-item m-2'>
                        <p>DATOS INTRODUCIDOS</p>
                        <p>DATOS INTRODUCIDOS</p>
                        <p>DATOS INTRODUCIDOS</p>
                        <button className='btn btn-sm btn-primary m-1 float-right'>EDITAR</button>
                        <button className='btn btn-sm btn-primary m-1 float-right'>BORRAR</button>
                    </li>
                </ul>
            </div>
            <div className="col-7">
                <h2>Formulario de Usuarios</h2>
                <hr />
                <form className='form-group'>
                    <input className='form-control mb-2' type="text" placeholder='Introduce el nombre' />
                    <input className='form-control mb-2' type="text" placeholder='Introduce la edad' />
                    <button className='btn btn-info btn-block' type='submit'>AGREGAR</button>
                </form>
            </div>


        </div>

    </div>
  )
}

export default Usuarios