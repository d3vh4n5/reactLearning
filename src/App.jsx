import React from 'react';
import Formato from './components/Formato';
import Hello from './components/Hello';
import Saludo from './components/Saludo';
import Frag from './components/Frag';
import Boton from './components/Boton';

function App() {
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
      <hr />
      <h6><i>Los botones imprimen un string en la consola</i></h6>




    </div>
  );
}

export default App;
