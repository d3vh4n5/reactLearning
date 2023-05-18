import React from 'react'
import { useParams } from 'react-router-dom'

const Especifico = () => {
    const {id} = useParams()
  return (
    <div>Especifico
        <h1>{id}</h1>
    </div>
  )
}

export default Especifico