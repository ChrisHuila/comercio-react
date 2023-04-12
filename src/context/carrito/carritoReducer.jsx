import {
    ACTUALIZAR_CARRITO,
    MOSTRAR_NOTIFICACION,
    ELIMINA_PRODUCTO
} from '../../types/index';

export default (state, action) => {
    switch(action.type){
        case ACTUALIZAR_CARRITO: 
            return{
                ...state,
               carrito: action.payload,
               notificacioncarrito: true
            }
        case MOSTRAR_NOTIFICACION:
            return{
                ...state,
                notificacioncarrito: false
            }
        case ELIMINA_PRODUCTO:
            return{
                ...state,
                carrito: action.payload
            }
        default:
            return state;
    }
}