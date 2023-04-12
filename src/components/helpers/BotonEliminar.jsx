import {useContext} from "react"
import CarritoContext from "../../context/carrito/carritoContext";
import { agregaCarritoStorage, agregarNotificacionStorage, agregarValorTotalStorage } from "./agregarLocalStorage";

const BotonEliminar = ({producto}) => {
    const {carrito, notificacion, valortotal, eliminaProducto, handleNotificacion, obtenerValorTotal} = useContext(CarritoContext);
      // Elimina el producto
      const eliminarProducto = () => {

        // elimina segun la cantidad
        if(producto.cantidad > 1){
            // Actualiza la cantidad
            const cantidadCarrito  = carrito.map(articulo => {
                if(articulo.id === producto.id){
                    articulo.cantidad --;
                     return articulo;
                }else{
                    return articulo;
                }

            })
            eliminaProducto(cantidadCarrito);
            // Actualiza carrito en localStorage
            agregaCarritoStorage(cantidadCarrito)
        }else if(producto.cantidad === 1){
            // Elimina del carrito
            const carritoActualizado  = carrito.filter(articulo => articulo.id !== producto.id);
            eliminaProducto(carritoActualizado);
            // Actualiza carrito en localStorage
            agregaCarritoStorage(carritoActualizado)
        }

        // actualiza notificacion
        handleNotificacion(notificacion - 1);
        // Actualiza notificacion en localStorage
        agregarNotificacionStorage(notificacion - 1)

         // valor total de la compra
         obtenerValorTotal(valortotal - parseInt(producto.precio));
         // Actualiza valor total en localStorage
         agregarValorTotalStorage(valortotal - parseInt(producto.precio))
    } 
    return (
        <a 
        href="#!" 
        className="borrar-curso"
        onClick={eliminarProducto}
        >X</a>
      );
}
 
export default BotonEliminar;