export const CardPersonajes = (props) => {
  return (
    <div className="cardPersonaje">
        <img src={`/img/${props.imagen}`} alt="" />
        <div>
            <h2>{props.nombre}</h2>
            <p>{props.edad}</p>
            <p>{props.afiliación}</p>
            <p>{props.jutsu_destacado}</p>
            <p>{props.estado}</p>
            <p>{props.rango}</p>
            <p>{props.aldea}</p>
        </div>
    </div>
  )
}