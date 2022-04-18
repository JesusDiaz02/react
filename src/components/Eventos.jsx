import React from "react";

const Eventos = ()=>{
    const[texto, setTexto]= React.useState('texto inicial')
    const eventoClick = ()=>{
        console.log('me diste click')
        setTexto('cambiando al texto . . . ')
    }
    return (
        <>
        <h2>{texto}</h2>
        <button onClick={eventoClick}>click</button>
        </>
    )
}
export default Eventos