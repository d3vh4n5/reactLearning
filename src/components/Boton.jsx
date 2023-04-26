import React from 'react'

const Boton = () => {
  const pulsar = ()=>{
    console.log('Me has pulsado')
  }

  return (
    <div>
        <button 
          className='btn btn-dark'
          onClick={pulsar}
        >
          Púlsame
        </button>
    </div>
  )
}

export default Boton