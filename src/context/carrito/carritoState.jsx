import { useReducer } from "react"
import  carritoContext  from "./carritoContext"
import carritoReducer from "./carritoReducer"
import {
    ACTUALIZAR_CARRITO,
    MOSTRAR_MENSAJE,
    ELIMINA_PRODUCTO,
    ACTIVA_NOTIFICACION,
    LIMPIAR_CARRITO,
    OBTENER_STORAGE,
    OBTENER_VALORTOTAL
} from '../../types/index';
import { localStorageInicial } from "../../components/helpers/agregarLocalStorage";

const CarritoState = props=> {
    const storageInicial = localStorageInicial();

    const stateInicial = {
        carrito: [],
        mensaje: false,
        notificacion: 1,
        valortotal: 1
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
    const limpiarCarrito = carrito => {
        dispatch({
            type: LIMPIAR_CARRITO,
            payload: carrito
         })
    }
   const ocultamensaje = () => {
        dispatch({
            type:MOSTRAR_MENSAJE
        })
   }
   const eliminaProducto = carrito => {
        dispatch({
            type:ELIMINA_PRODUCTO,
            payload: carrito
        })
   }
   const handleNotificacion = notificacion =>{
        dispatch({
            type:ACTIVA_NOTIFICACION,
            payload: notificacion
        })
   }
   const obtenerDatosStorage = () => {
        dispatch({
            type: OBTENER_STORAGE,
            payload: storageInicial 
        })
   }
   const obtenerValorTotal = valortotal => {
    dispatch({
        type: OBTENER_VALORTOTAL,
        payload: valortotal
    })
   }
    return(
        <carritoContext.Provider
            value={{
                carrito: state.carrito,
                mensaje: state.mensaje,
                notificacion: state.notificacion,
                valortotal: state.valortotal,
                actualizarCarrito,
                ocultamensaje,
                eliminaProducto,
                handleNotificacion,
                limpiarCarrito,
                obtenerDatosStorage,
                obtenerValorTotal
            }}
        >
            {props.children}
        </carritoContext.Provider>
    )
}

export default CarritoState;