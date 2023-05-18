import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio';
import Donde from './components/Donde';
import Menu from './components/Menu';
import User from './components/User';
import Ejercicios from './components/Ejercicios';
import Apis from './components/Apis';
import Especifico from './components/Especifico';

function App() {
  /*
  */
  
return (
  <Router>
    <div className='container'>
    

      <h1>RUTAS EN REACT</h1>

      <Menu></Menu>
      
      <Routes>
        <Route path={'/inicio'} Component={Inicio} ></Route>
        <Route path={'/donde'} Component={Donde} ></Route>
        <Route path={'/apis'} Component={Apis} ></Route>
        <Route path={'/user'} Component={User} ></Route>
        <Route path={'/ejercicios'} Component={Ejercicios} ></Route>
        <Route path={'/especifico/:id'} Component={Especifico} ></Route>
      </Routes>








      
    

    </div>
  </Router>
  );
}

export default App;
