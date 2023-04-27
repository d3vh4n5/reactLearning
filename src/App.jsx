import React, {useState} from 'react';
import Formato from './components/Formato';
import Hello from './components/Hello';
import Saludo from './components/Saludo';
import Frag from './components/Frag';
import Boton from './components/Boton';
import Listado from './components/Listado';

function App() {

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
  return (
    <div className='container'>
      <h1>Test site de React con Yarn, y bootstrap</h1>
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
      <h2>07 EVENTO ONCHANGE</h2>
      <Listado></Listado>

      <hr />
      <h2>08 EN ESTADO O useState en REACT</h2>
      <br />
      <h3>Ejemplo de contador con useState</h3>
      <p>el valor del dato o contador es: {valor}</p>
      <p>{texto} </p>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>

    </div>
  );
}

export default App;
