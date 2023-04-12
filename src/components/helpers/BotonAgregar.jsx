import { useContext } from "react"
import CarritoContext from "../../context/carrito/carritoContext";
import { agregaCarritoStorage, agregarNotificacionStorage, agregarValorTotalStorage } from "./agregarLocalStorage";

const BotonAgregar = ({articulo, estilo}) => {

    const {carrito, notificacion, valortotal ,actualizarCarrito, ocultamensaje, handleNotificacion, obtenerValorTotal } = useContext(CarritoContext);

    const productoAgregado = () => {
        // Agrega la cantidad por defecto
        if(!articulo.cantidad){
            articulo.cantidad = 1;
        }
        // Valida si ya se encuentra en el carrito
        const existe = carrito.some(producto => producto.id === articulo.id)
        // Agrega el producto
        if(existe){
            // Actualizamos la cantidad
            const carritoActualizado  = carrito.map(producto => {
                    if(producto.id === articulo.id){
                        producto.cantidad ++;
                        return producto;
                    }else{
                        return producto;
                    }
    
                })
                // Almacena el valor en el carrito
                actualizarCarrito(carritoActualizado);
                // Actualiza carrito en localStorage
                agregaCarritoStorage(carritoActualizado)
            }else {
                // agregamos el articulo
                actualizarCarrito(
                    [...carrito, articulo]
                )
                // Actualiza carrito en localStorage
                agregaCarritoStorage([...carrito, articulo])
            }
            // Muestra la notificacion
            handleNotificacion(notificacion + 1)
            // Actualiza notificacion en localStorage
            agregarNotificacionStorage(notificacion + 1)
            // Oculta el mensaje despues de 3 seg

            // valor total de la compra
            obtenerValorTotal(valortotal + parseInt(articulo.precio));
            // Actualiza valor total en localStorage
            agregarValorTotalStorage(valortotal + parseInt(articulo.precio))

            setTimeout(() => {
                ocultamensaje()
                
            }, 3000);

    }
   
    return (
        <button 
            className={estilo}
            onClick={productoAgregado}
        >
            <i className="bi bi-cart4"></i> Agregar
        </button> 
      );
}
 
export default BotonAgregar;