import {
    ACTUALIZAR_CARRITO,
    MOSTRAR_MENSAJE,
    ELIMINA_PRODUCTO,
    ACTIVA_NOTIFICACION,
    LIMPIAR_CARRITO,
    OBTENER_STORAGE,
    OBTENER_VALORTOTAL
} from '../../types/index';

export default (state, action) => {
    switch(action.type){
        case ACTUALIZAR_CARRITO: 
            return{
                ...state,
               carrito: action.payload,
               mensaje: true
            }
        case MOSTRAR_MENSAJE:
            return{
                ...state,
                mensaje: false
            }
        case ELIMINA_PRODUCTO:
            return{
                ...state,
                carrito: action.payload
            }
        case ACTIVA_NOTIFICACION: 
            return{
                ...state,
                notificacion: action.payload
            }
        case LIMPIAR_CARRITO:
            return{
                ...state,
                carrito: action.payload
            }
        case OBTENER_STORAGE:
            return{
                ...state,
                carrito: action.payload.productosIniciales,
                notificacion: action.payload.notificacionesIniciales,
                valortotal: action.payload.valorTotalInicial
            }
        case OBTENER_VALORTOTAL:
            return{
                ...state,
                valortotal:action.payload
            }
        default:
            return state;
    }
}