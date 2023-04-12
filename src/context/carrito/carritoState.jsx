import { useReducer } from "react"
import  carritoContext  from "./carritoContext"
import carritoReducer from "./carritoReducer"
import {
    ACTUALIZAR_CARRITO
} from '../../types/index';

const CarritoState = props=> {

    const stateInicial = {
        carrito: [],
    }

    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(carritoReducer, stateInicial)

    // Serie de funciones para el CRUD
    const actualizarCarrito = carrito => {
        dispatch({
           type: ACTUALIZAR_CARRITO,
           payload: carrito
        })
    }
   
    return(
        <carritoContext.Provider
            value={{
                carrito: state.carrito,
                actualizarCarrito
            }}
        >
            {props.children}
        </carritoContext.Provider>
    )
}

export default CarritoState;