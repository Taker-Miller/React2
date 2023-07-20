import { Persona } from "../Interfaces/IFormulario";
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { db } from "./FirebaseApp";


export const registrarPersona = async(p:Persona)=>{
    
    
      const docRef = await addDoc(collection(db, "personas"), p)

}

export const obtenerPersonas = async()=> {
      const querySnapshot = await getDocs(collection(db, "personas"));
      var personas:Persona[] = []
      querySnapshot.forEach((d)=> {
            console.log(d.id)
            console.log(d.data())
            var p:Persona = {
                  nombre:d.data().nombre,
                  apellido:d.data().apellido,
                  edad:d.data().edad,
                  idPersona:d.id,
            }
            personas.push(p)
      })
      return personas

}