import { agregaCarritoStorage, 
    agregarNotificacionStorage, 
    agregarValorTotalStorage 
} from "./agregarLocalStorage";

const limpiaLocalStorage = () => {
    agregaCarritoStorage([])
    agregarNotificacionStorage(1)
    agregarValorTotalStorage(1)
} 

export default limpiaLocalStorage;