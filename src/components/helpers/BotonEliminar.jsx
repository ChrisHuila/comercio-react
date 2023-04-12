import {useContext} from "react"
import CarritoContext from "../../context/carrito/carritoContext";

const BotonEliminar = ({producto}) => {
    const {carrito, eliminaProducto} = useContext(CarritoContext);
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
        }else if(producto.cantidad === 1){
            // Elimina del carrito
            const carritoActualizado  = carrito.filter(articulo => articulo.id !== producto.id);
            eliminaProducto(carritoActualizado);
        }
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