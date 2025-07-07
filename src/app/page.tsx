'use client'
import { useEffect, useState } from "react"
import { Proyecto } from "./interfaces/IProyecto";

const  initialStateProyecto :Proyecto  = {
  tipo : "",
  nombre: "",
  voluntarios : "",
  fecha : ""
}
export default function Home() {
  const miStorage = window.localStorage
  const [Proyecto, setProyecto] = useState(initialStateProyecto)
  const [ProyectoA,setProyectos] = useState<Proyecto[]>([])
  const [eNombre, setENombre] = useState("")
  const [eTipo, setETipo] = useState("")
  const [eVoluntarios, setEVoluntarios] = useState("")
  const [eFecha, setEFecha] = useState("")



  // Cargar datos del localstorage
    useEffect(()=>{
        let listadoStr = miStorage.getItem("Proyectos")
        if(listadoStr != null){
            let listado = JSON.parse(listadoStr)
            setProyectos(listado)
        }
    },[])
}
