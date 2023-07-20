'use client'
import React, { useState } from 'react'
import { Persona } from '../Interfaces/IFormulario'
import { registrarPersona } from '../Firebase/Promesas'

export const Formulario = () => {
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [edad, setEdad] = useState("")
  const [errorNombre, setErrorNombre] = useState("")
  const registrar = ()=>{

    if(nombre.trim()==""){
      setErrorNombre("No valen espacios en blanco")
    }else{
      setNombre(nombre.trim())
    }

    //Asuman que se valido todo
    const p:Persona = {
        nombre,
        apellido,
        edad:parseInt(edad)
    }
    registrarPersona(p)
    console.log(nombre);
    console.log(apellido);
    console.log(edad);
    alert("Bienvenido "+nombre+" "+apellido);
  }
  const validarNombre = (valor:string)=>{
    setNombre(valor);
    if(valor.length<3){
      setErrorNombre("Debe tener mas de 3 letras")
    }
    else{
      setErrorNombre("")
    }


  }
  return (
    <form>
        <label>Nombre: </label><br/>
        <input type="text" 
          onChange={(e)=>validarNombre(e.target.value)}
          value={nombre}
          /><br/>
        <span>{errorNombre}</span><br/>
        <label>Apellido: </label><br/>
        <input type="text"
          onChange={(e)=>setApellido(e.target.value)}
          value={apellido}
        /><br/>
        
        <label>Edad: </label><br/>
        <input type="number"
          onChange={(e)=>setEdad(e.target.value)}
          value={edad}
          /><br/>

        <button type='button' onClick={registrar}>Registrar</button>
    </form>
  )
}
