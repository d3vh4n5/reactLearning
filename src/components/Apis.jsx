import React, {useEffect, useState} from 'react'
import axios from 'axios';
import '../css/apis.css'

const Apis = () => {

    const [usuarios, setUsuarios] = useState([])
    const [productos, setProductos] = useState([])

    const ObtenerUsuarios = async ()=>{
        const data = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsuarios(data.data)
    }
    const ObtenerProductos = async ()=>{
        const data = await axios.get('https://mercadolan.000webhostapp.com/API/app.php?opcion=1')
        setProductos(data.data)
    }

    useEffect( ()=>{
        //console.log('Renderizado por primera vez');
        ObtenerUsuarios()
        ObtenerProductos()
    }, [])

    const obtenerChiste =  async () => {
        //estas dos lineas tienen que ir antes del fetch
        let respuesta = document.getElementById("contenedor")// Si tomo el contenedor de un efecto en el que borra todo el contenido, se convierte en el buscador, y luego en la respuesta
        //let respuesta = document.getElementById("respuesta")// Sino puedo tomar solo el elemento
        respuesta.innerHTML = "<p class='buscando'>Buscando Información</p>" //Imprimimos esto como pre-load para entender que se activó y estámos esperando la respuesta
        
        fetch('https://api.chucknorris.io/jokes/random')
            .then((response) => response.json())
            .then((data) => {
    
                respuesta.innerHTML = (`<p class='respuesta'>La respuesta de la api fue: 
                    <br><br> 
                    ${data.value}
                </p>`);
            })
    }

    function obtenerChiste2(){
        let respuesta = document.getElementById("respuesta2")
        respuesta.innerHTML = "<p class='buscando'>Buscando Información</p>" 
        
        fetch('https://api.chucknorris.io/jokes/random')
            .then((response) => response.json())
            .then((data) => {
    
                respuesta.innerHTML = (`La respuesta de la api fue: 
                <br><br> 
                ${data.value}`);
            })
    }

    function obtenerValor(){
        let respuesta = document.getElementById("contenedorDolar")
        respuesta.innerHTML = "<p class='buscando'>Buscando Información</p>"
        
        fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                respuesta.innerHTML = (`Precios del dólar: 
                <br>
                <br> <u>${data[0].casa.nombre}</u>
                <br> Compra: ${data[0].casa.compra}
                <br> Venta:  <b>${data[0].casa.venta}</b>
                <br>
                <br> <u>${data[1].casa.nombre}</u>
                <br> Compra: ${data[1].casa.compra}
                <br> Venta:  <b>${data[1].casa.venta}</b>
                
                `);
            })
    }
  return (
    <div>

        <h1>Ejercicios de APIs</h1>

        <div className="contenedor">
            <h1>Componete user</h1>
            <p>Estamos dentro del componente user.</p>
            <p>Este componente esta consumiendo la api <a href='https://jsonplaceholder.typicode.com/users'>'https://jsonplaceholder.typicode.com/users'</a> y listando a los usuarios.</p>
            <p>También estamos aprendiendo lo que hace el useEffect.</p>
            <ul className='usuarios'>
                {
                    usuarios.map(item=>(
                        <li key={item.id}>{item.name} -- {item.email}</li>
                    ))
                }
            </ul>
        </div>
         <hr />
        <h1>Listado automático:</h1>
        <h5><b><i>
            El siguiente listado de tarjetas viene de una miniAPI propia desarrollada 
            en PHP,
            la cual está listando los mismos productos que están en mi proyecto de 
            <a href="https://mercadolan.000webhostapp.com/index.php"> Mercado Lan</a>
            </i></b>
        </h5>
        <br />
        <div className="contenedorTarjetas">
            {
                productos.map(item=>(
                    <div className="tarjetaProducto">
                        <p><b>Producto: </b>{item.nombre_producto}</p>
                        <img src={'https://mercadolan.000webhostapp.com/assets/img/productos/' + item.imagen} alt="Imagen del producto" />
                        <p><b>Precio: $</b> {item.precio}</p>
                        <p><b>Descripción:</b> {item.descripcion}</p>
                    </div>
                ))
            }
        </div>
        <hr />
        <h1>Api de chistees de chuck norris</h1>

        <div class="contenedor" id="contenedor">
            <h3>Activacion de api con boton y prueba de texto pre-load con reemplazo total del contenido</h3>
            <p class="respuesta" id="respuesta"></p>
            <button onClick={obtenerChiste}>Obtener chiste</button>
        </div>

        <div class="contenedor" id="contenedor">
            <h3>Activacion de api con boton y prueba de texto pre-load</h3>
            <p class="respuesta" id="respuesta2"></p>
            <button onClick={obtenerChiste2}>Obtener chiste</button>
        </div>

        <h1>Api de "dolarsi" para consultar cotizaciones del dolar</h1>

        <div class="contenedorDolar" id="contenedorDolar">
            <h1>Consulte el valor del Dólar</h1>
            <p class="valor" id="valor"></p>
            <button onClick={obtenerValor}>Obtener Valor</button>
        </div>


    </div>
  )
}

export default Apis