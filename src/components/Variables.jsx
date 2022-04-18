

const Variables =()=>{
const saludo = "hola mundo"
const imagen = 'https://picsum.photos/300'
const texto_alternativo = 'esto es una imagen picsum'

    return (
        <div>
            <h2>{saludo}</h2>
            <img src={imagen} alt = {texto_alternativo}/>
        </div>
    )
}
export default Variables