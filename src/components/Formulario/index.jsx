import React, { useState, useEffect } from 'react'

const Formulario = () => {

   const [materiaA, setMateriaA] = useState(0)
   const [materiaB, setMateriaB] = useState(0)
   const [materiaC, setMateriaC] = useState(0)
   const [nome, setNome] = useState("")

    useEffect(()=>{
      console.log("O componente iniciou")

      return()=>{
        console.log("O componente encerrou")
      }
    },[])
    useEffect(()=>{
      console.log("O estado nome mudou")
    },[nome])
    useEffect(()=>{
      console.log("Materia A mudou para " + materiaA)
    },[materiaA, materiaB, materiaC])


    const alteraNome = (e) =>{
        setNome(e.target.value)
    }

    const renderizaResultado = () =>{
        const soma = materiaA + materiaB + materiaC
        const media= soma/3


        if(media>= 7){
            return(
                <p>Olá {nome}, foi aprovado</p>
            )
        }else{
            return(<p>Olá {nome}, não foi aprovado</p>)
            
        }
    }

  return (
    <div>
      <form action="">
        <ul>
        {[1,2,3,4,5].map(item => (
          <li key={item}>{item}</li>
        ))}
        </ul>
        <input type="text" placeholder='Seu nome' onChange={alteraNome} />
        <input type="number" placeholder="Nota matéria A" max={10} min={0}  onChange={(e)=>setMateriaA(parseInt(e.target.value))} />
        <input type="number" placeholder="Nota matéria B" max={10} min={0}  onChange={(e)=>setMateriaB(parseInt(e.target.value))} />
        <input type="number" placeholder="Nota matéria C"  max={10} min={0} onChange={(e)=>setMateriaC(parseInt(e.target.value))} />
      </form>
      {renderizaResultado()}
    </div>
  )
}

export default Formulario
