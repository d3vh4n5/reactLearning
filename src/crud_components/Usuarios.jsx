import React, {useState} from 'react'

const Usuarios = () => {

    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')
    const [lista, setLista] = useState([])
    const [fallo, setFallo] = useState(false)
    const [error, setError] = useState('')

    const agergarUsuario = (e)=>{
        e.preventDefault()

        if (!nombre.trim()){
            setFallo(true)
            setError('Introduce un nombre por favor')
            return
        } else if (!edad.trim()) {
            setFallo(true)
            setError('Introduce una edad por faovr')
            return
        }

        const usuario = {
            nombre,
            edad
        }
        setLista([...lista, usuario])
        setNombre('')
        setEdad('')
        setFallo(false)
    }

  return (
    <div>
        <div className="row">
            <div className="col-5">
                <h2>Listado de Usuarios</h2>
                <hr />
                <ul className='list-group'>
                    {
                        lista.map( i=>(
                            <li className='list-group-item m-2'>
                                <p>se llama {i.nombre} con {i.edad} años</p>
                                
                                <button className='btn btn-sm btn-primary m-1 float-right'>EDITAR</button>
                                <button className='btn btn-sm btn-primary m-1 float-right'>BORRAR</button>
                            </li> 
                        ))
                    }
                </ul>
            </div>
            <div className="col-7">
                <h2>Formulario de Usuarios</h2>
                <hr />
                {
                    fallo ? (
                        <span>{error}</span>
                    ) : (
                    <span></span>
                    )
                }
                <form className='form-group'>
                    <input
                        onChange={(e)=>{setNombre(e.target.value)}}
                        className='form-control mb-2' type="text" placeholder='Introduce el nombre' 
                        value={nombre}
                    />
                    <input 
                        onChange={(e)=>{setEdad(e.target.value)}}
                        className='form-control mb-2' type="text" placeholder='Introduce la edad' 
                        value={edad}
                    />
                    <button 
                        onClick={(e)=>{agergarUsuario(e)}}
                        className='btn btn-info btn-block' type='submit'
                    >AGREGAR</button>
                </form>
            </div>


        </div>

    </div>
  )
}

export default Usuarios