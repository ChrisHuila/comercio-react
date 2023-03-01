import { useContext } from "react";
import {CarritoContext} from "../../../context/carritoContext";
import { Link } from "react-router-dom";


const Articulo = ({articulo}) => {

    // Extrae la funcion del context
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
            <div className="card mb-3" style={{Width: '100%', height: '100%'}}>
                <h2 className="card-header headingCard">{articulo.nombre}</h2>
                <div className="d-flex justify-content-center slide">
                    <Link to={`/Producto/${articulo.nombre}/${articulo.id}`} >
                        <img className=" " style={{height: '200px'}} src={articulo.imagen} alt={articulo.nombre} /> 
                    </Link> 
                </div>

                <div className="card-body position-relative mb-3 slide2" >
                    <p className="card-text">{articulo.comentario.slice(0, 90)} ...</p>
                    <h4 className="headingPrice">Precio: <span className="text-success-emphasis"> {`$${parseInt(articulo.precio)}`} </span></h4> 
                    <div className=" position-absolute bottom-0 end-0">                          
                            <button 
                                className="btn btn-danger btn-sm me-2"
                                onClick={productoAgregado}
                            >
                                <i className="bi bi-cart4"></i> Agregar
                            </button>                            

                            <Link to={`/Producto/${articulo.nombre}/${articulo.id}`} className='btn btn-danger btn-sm  me-2'>
                                ver mas
                            </Link>                

                        </div> 
                </div>
              
            </div>
    )
}
 
export default Articulo;