import {
    ACTUALIZAR_CARRITO
} from '../../types/index';

export default (state, action) => {
    switch(action.type){
        case ACTUALIZAR_CARRITO: 
            return{
                ...state,
               carrito: action.payload
            }
        default:
            return state;
    }
}