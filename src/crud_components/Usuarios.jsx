import React, {useState} from 'react'

const Usuarios = () => {

    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')
    const [lista, setLista] = useState([])
    const [fallo, setFallo] = useState(false)
    const [error, setError] = useState('')
    const [modoedicion, setModoEdicion] = useState(false)

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

    const BorrarUsuario = (nombre)=>{
        const filtro = lista.filter(item => item.nombre !== nombre)
        setLista(filtro)
    }

    const PrimeraEdicion = (objeto)=>{
        setNombre(objeto.nombre)
        setEdad(objeto.edad)
        setModoEdicion(true)
    }

    const EdicionFinal = (e)=>{
        e.preventDefault()
        const editado = lista.map( item => item.nombre === nombre ? {nombre, edad} : item)
        setLista(editado)
        setModoEdicion(false)
        setNombre('')
        setEdad('')
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
                                <p>Se llama {i.nombre} con {i.edad} años</p>
                                
                                <button onClick={() => {PrimeraEdicion(i)}} className='btn btn-sm btn-primary m-1 float-right'>EDITAR</button>
                                <button  onClick={()=>{BorrarUsuario(i.nombre)}} className='btn btn-sm btn-primary m-1 float-right'>BORRAR</button>
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
                    {
                        modoedicion ? ( /* Consulta si modoedicion es true
                                           si lo es imprime el bloque entre () */
                            <button 
                        onClick={(e)=>{EdicionFinal(e)}}
                        className='btn btn-info btn-block' type='submit'
                    >EDITAR</button>
                        ) : ( /* Si no lo es imprime el bloque despues de los ":" */
                            <button 
                        onClick={(e)=>{agergarUsuario(e)}}
                        className='btn btn-info btn-block' type='submit'
                    >AGREGAR</button>
                        )
                    }
                </form>
            </div>


        </div>

    </div>
  )
}

export default Usuarios