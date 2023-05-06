import React from 'react'
import {NavLink} from "react-router-dom"
import '../css/menu.css'

const Menu = () => {
  return (
    <div className='menu'>
        <ul>
            <li><NavLink to={'/inicio'}>Inicio</NavLink></li>
            <li><NavLink to={'/donde'}>Donde</NavLink></li>
        </ul>
    </div>
  )
}

export default Menu