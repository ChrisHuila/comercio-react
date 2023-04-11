import { useReducer } from "react"
import  carritoContext  from "./carritoContext"
import carritoReducer from "./carritoReducer"
import {
    FORMULARIO_PROYECTO
} from '../../types/index';
const CarritoState = props=> {
    const stateInicial = {
        carro: false
    }

    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(carritoReducer, stateInicial)

    // Serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
           type: FORMULARIO_PROYECTO
        })
    }
    return(
        <carritoContext.Provider
            value={{
                carro: state.carro,
                mostrarFormulario
            }}
        >
            {props.children}
        </carritoContext.Provider>
    )
}

export default CarritoState;