import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Especifico = () => {
    const {id} = useParams()
    const [especifico, setEspecifico] = useState({})
    const obtenerUsuario = async ()=>{
      const datos = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      setEspecifico(datos.data)
    }

    useEffect(()=>{
      obtenerUsuario()
    }, [])

  return (
    <div>Especifico
        <h2>El nombre es {especifico.name}</h2>
        <h2>El email es {especifico.email}</h2>
    </div>
  )
}

export default Especifico