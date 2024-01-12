import { personajes } from '../utils/DataPersonaje'
import { CardPersonajes } from './CardPersonajes'
export const MostrarPersonajes = () => {
    return (
        <div className="container">
            <h1>Mi primera aplicacion en React</h1>
            <div className='contenedorPersonajes'>
                {
                    personajes.map((personaje) => (
                        <CardPersonajes
                            key={personaje.nombre}
                            {...personaje}
                        />
                    ))
                }
            </div>
        </div>
    )
}
