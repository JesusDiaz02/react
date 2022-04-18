import React from "react"
const Contador =()=>{
    const [contador, setContador]= React.useState(0)
    const aumentar=() =>setContador(contador+1)
    const decrementar=()=>setContador(contador-1)
    return(
        <>
        <hr/>
        <h1>Contador</h1>
        <h1>El valor de la variable contador es: {contador}</h1>
        <h1>
            {
                contador > 2 ?'es mayor a dos':'es menor o igual a dos'
            }
        </h1>
        <button onClick={aumentar}>aumentar </button>
        <button onClick={decrementar}>decrementar </button>
        </>
    )

}
export default Contador