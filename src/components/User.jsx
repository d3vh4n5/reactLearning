import React, {useEffect, useState} from 'react'
import axios from 'axios';

const User = () => {

    const [usuarios, setUsuarios] = useState([])

    const ObtenerUsuarios = async ()=>{
        const data = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsuarios(data.data)
    }
    useEffect( ()=>{
        //console.log('Renderizado por primera vez');
        ObtenerUsuarios()
    } )

  return (
    <div>
        <h1>Componete user</h1>
        <p>Estamos dentro del componente user.</p>
        <p>Este componente esta consumiendo la api <a>'https://jsonplaceholder.typicode.com/users</a>' y listando a los usuarios.</p>
        <p>También estamos aprendiendo lo que hace el useEffect.</p>
        <ul className='usuarios'>
            {
                usuarios.map(item=>(
                    <li key={item.id}>{item.name} -- {item.email}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default User