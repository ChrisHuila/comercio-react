import { useContext } from "react"
import { CarritoContext } from "../../context/carritoContext" //este se va a borrar
import CarritoContextprinc from "../../context/carrito/carritoContext";

const BotonAgregar = ({articulo, estilo}) => {
    const{cambio,guardarCambio, agregarCarrito, agregarMensaje} = useContext(CarritoContext); //se va a borrar

    const {carrito, actualizarCarrito, ocultaNotificacion} = useContext(CarritoContextprinc);

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
                actualizarCarrito(carritoActualizado);
    
            }else {
                // agregamos el articulo
                actualizarCarrito(
                    [...carrito, articulo]
                )
            }
        // Oculta la notificacion despues de 3 seg
        setTimeout(() => {
            ocultaNotificacion()
            
        }, 3000);


        // // Se van a borrar de aqui para abajo
        // agregarCarrito(articulo)
        // // Indica que se ha agregado un producto
        // guardarCambio(!cambio);
        // // Muestra mensaje agregado
        // agregarMensaje(true);

        // setTimeout(() => {
        //     // Despues de 3seg lo oculta
        //     agregarMensaje(false);
        // },3000)
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