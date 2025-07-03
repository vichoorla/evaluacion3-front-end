'use client'
import { useEffect, useState } from "react";
import { Persona} from "./interfaces/Ipersona";

const  initialStatePersona:Persona = {
  apellido: "",
  nombre: ""
}
export default function Home() {
  const miStorage = window.localStorage
  const [persona, setPersona] = useState(initialStatePersona)
  const [personaA,setPersonaA] = useState(initialStatePersona)
  const [personas, setPersonas] = useState<Persona[]>([])
  const [eNombre, setENombre] = useState("")

    useEffect(()=>{
        let listadoStr = miStorage.getItem("personas")
        if(listadoStr != null){
            let listado = JSON.parse(listadoStr)
            setPersonas(listado)
        }
    },[])
}
