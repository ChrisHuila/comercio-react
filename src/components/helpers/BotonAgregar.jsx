import { useContext } from "react"
import { CarritoContext } from "../../context/carritoContext"

const BotonAgregar = ({articulo, estilo}) => {
    const{cambio,guardarCambio, agregarCarrito, agregarMensaje} = useContext(CarritoContext);

    const productoAgregado = () => {

        agregarCarrito(articulo)
        // Indica que se ha agregado un producto
        guardarCambio(!cambio);
        // Muestra mensaje agregado
        agregarMensaje(true);

        setTimeout(() => {
            // Despues de 3seg lo oculta
            agregarMensaje(false);
        },3000)
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