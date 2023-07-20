import React, {useEffect, useState } from 'react'
import { obtenerPersonas } from '../Firebase/Promesas'
import { Persona } from '../Interfaces/IFormulario'



export const Registros = () => {
    const [personas, setPersonas] = useState<Persona[]>([])
    useEffect(()=> {
        obtenerPersonas().then((listado) => {
            console.log("Ya toy listo")
            console.log(listado)
            setPersonas(listado)
        })

    },[])
const renderizarDatos = ()=> {
   var r = personas.map((p) => {
        return <tr>
            <td>{p.nombre}</td>
            <td>{p.apellido}</td>
            <td>{p.edad}</td>
        </tr>
    })
    return r
}

  return (
    <table>
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
        </tr>
        {
            renderizarDatos()
        }
        
    </table>

  )
  }
