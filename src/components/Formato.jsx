import React from 'react'

const Formato = () => {
    const nombre = 'Juan'

    const obj = {
        nombre: 'Hans',
        apellido: 'Basg'
    }
    const renderobj = (obj)=>{
        return obj.nombre+' '+obj.apellido
    }
  return (
    <div>
        <p>El nombre es: {nombre}</p>
        <p>23 + 32 es: {23 + 32}</p>
        <p>El nombre es: {renderobj(obj)}</p>
    </div>
  )
}

export default Formato