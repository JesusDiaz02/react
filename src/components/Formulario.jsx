import React from "react";

const Formulario =()=>{
    const[fruta, setFruta] = React.useState('')
    const[descripcion, setDescripcion]=React.useState('')
    const[lista, setLista]= React.useState([])

    const guardarDatos=(e)=>{
        e.preventDefault()
        if(!fruta.trim()){
            return alert('campo fruta vacio')
            
        }
        if(!descripcion.trim()){
            return alert('campo descripcion vacio')
             
        }
        setLista([...lista,
            {nombreFruta: fruta, nombreDescripcion: descripcion}
        ])
    }

    return(
        <div className="container mt-5">
            <h1 className="text-center">CRUD BASICO REACT</h1>
            <hr/>
            <div className="row">
                <div className="col-8">
                    <h4 className="text-center">Listado de frutas</h4>
                    <ul className="list-group">
                    {
                     lista.map((item, index)=>(
                        <li key={index}>
                             <h4>{item.nombreFruta}-{item.nombreDescripcion}</h4>
                         </li>
                     ))
                }

                    </ul>
                </div>
            </div>
            <form onSubmit={guardarDatos}>
                <input
                type="text"
                placeholder="Ingrese Frutas"
                onChange={(e)=>setFruta(e.target.value)}
                />
                    
                <input
                type="text"
                placeholder="Ingrese descripcion"
                onChange={(e)=>setDescripcion(e.target.value)}
                />
                <button type="submit">Agregar</button>
            </form>
            <ul>
                
            </ul>
        </div>
    )
}

export default Formulario