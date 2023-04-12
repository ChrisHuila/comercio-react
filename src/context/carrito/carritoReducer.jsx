import {
    ACTUALIZAR_CARRITO,
    MOSTRAR_NOTIFICACION
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
        default:
            return state;
    }
}