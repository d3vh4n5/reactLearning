import React, {useState} from 'react';
import Formato from './components/Formato';
import Hello from './components/Hello';
import Saludo from './components/Saludo';
import Frag from './components/Frag';
import Boton from './components/Boton';
import Listado from './components/Listado';
import Listados from './components/Listados';
import Usuarios from './crud_components/Usuarios';

function App() {
  /*
  */
const [valor, setValor] = useState(0)
const [texto, setTexto] = useState('')
const aumentar = ()=>{
  if (valor >= 3){ 
    setTexto('No puedes superar el 3')
  } else{
    setValor(valor +1)
    setTexto('')

  }
}
const disminuir = ()=>{
  if (valor <= 3 && valor >0){
    setTexto('')
    setValor(valor -1)
  } else if(valor <= 0){
    setTexto('El valor no puede ser menor a 0')
  }
}

const datos = [
  {
    nombre: 'Manuel',
    edad: 37,
    id: 1
  },
  {
    nombre: 'Juan',
    edad: 32,
    id: 2
  },
  {
    nombre: 'Elena',
    edad: 26,
    id: 3
  },
  {
    nombre: 'Yamila',
    edad: 21,
    id: 4
  },
  {
    nombre: 'Mariela',
    edad: 34,
    id: 5
  },
]
return (
  <div className='container'>
  <h1>Test site de React con Yarn, y bootstrap</h1>
  <br />
  <hr />
  <hr />
  {/*
  */}
  <h1>Primer componente en React</h1>
  <Hello></Hello>
      <Hello></Hello>
      <Hello></Hello>

      <hr />
      <h1>JSX</h1>
      <Formato></Formato>

      <hr />
      <h1>Componentes anidados</h1>
      <Saludo></Saludo>

      <hr />
      <h1>Propiedades de los componentes</h1>
      <Frag saludo='Hola soy una propiedad de saludo' edad='32'></Frag>
      <Frag saludo='Hola soy otro saludo de otro componente'></Frag>

      <hr />
      <h1>xxxxx Eventos xxxxx</h1>
      <Saludo></Saludo>
      <p>Boton separado del componente funciona igual:</p>
      <Boton></Boton>
      <h6><i>ℹ️ -> Los botones imprimen un string en la consola</i></h6>
      
      <hr/>
      <h1>07 EVENTO ONCHANGE</h1>
      <Listado></Listado>

      <hr />
      <h1>08 EN ESTADO O useState en REACT</h1>
      <br />
      <h3>Ejemplo de contador con useState</h3>
      <p>el valor del dato o contador es: {valor}</p>
      <p>{texto} </p>
      <button onClick={aumentar} className='btn btn-success m-2'>Aumentar</button>
      <button onClick={disminuir} className='btn btn-danger m-2'>Disminuir</button>
      <hr />
      <h1>09 LISTAR DATOS CON MAP</h1>

        <Listados datos = {datos}></Listados>
      <hr />
    <h1>CRUD BÁSICO</h1>
    <br />
    <h3>12 Crear formulario y estructura del proyecto</h3>
    <br />
      <Usuarios></Usuarios>
    <h4>⚠️ aún no es funcional. Trabajo en proceso</h4>

    </div>
  );
}

export default App;
