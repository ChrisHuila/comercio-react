import { useReducer } from "react"
import  carritoContext  from "./carritoContext"
import carritoReducer from "./carritoReducer"
import {
    ACTUALIZAR_CARRITO,
    MOSTRAR_NOTIFICACION,
    ELIMINA_PRODUCTO
} from '../../types/index';

const CarritoState = props=> {

    const stateInicial = {
        carrito: [],
        notificacioncarrito: false,
    }

    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(carritoReducer, stateInicial)

    // funciones
  
    const actualizarCarrito = carrito => {
        dispatch({
           type: ACTUALIZAR_CARRITO,
           payload: carrito
        })
    }

   const ocultaNotificacion = () => {
        dispatch({
            type:MOSTRAR_NOTIFICACION
        })
   }
   const eliminaProducto = carrito => {
        dispatch({
            type:ELIMINA_PRODUCTO,
            payload: carrito
        })
   }
    return(
        <carritoContext.Provider
            value={{
                carrito: state.carrito,
                notificacioncarrito: state.notificacioncarrito,
                actualizarCarrito,
                ocultaNotificacion,
                eliminaProducto
            }}
        >
            {props.children}
        </carritoContext.Provider>
    )
}

export default CarritoState;