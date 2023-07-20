'use client'
import React from 'react'
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <nav style={{background:'red',
                 display: 'flex',
                 alignItems:'center',
                 justifyContent:'space-between',
                 paddingTop:'3px',
                 paddingBottom:'3px',
                 paddingLeft:'2%',
                 paddingRight:'2%',
                 fontSize:'12px',
                 }}>
        <Link to={"/"}>Home</Link>
        <Link to={"/formulario"}>Formulario</Link>
        <Link to={"/mostrar"}>Registros</Link>
    </nav>
  )
}
