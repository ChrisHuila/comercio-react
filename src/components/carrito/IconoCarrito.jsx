import { Link } from "react-router-dom";
import useCarrito from "../../hook/useCarrito";
import ProductoCarrito from "./ProductoCarrito";

const IconoCarrito = () => {   
    
    // Utiliza el hook useCarrito
    const {carrito, notificacion, eliminaProducto, actualizarCarrito, agregarNotificacion} = useCarrito();

    return (        
        <ul style={{listStyle: "none", margin: "0", padding: "0"}}>
            <li className="submenu">
                <Link to={'/carrito'} className="nav-link fw-bold text-white position-relative" href="#">
                    <i className="bi bi-cart4">Carrito</i>
                    {notificacion > 1 
                    ? 
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {/* Se le quita 1 porque es su valor inicial */}
                            {notificacion - 1}+
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    :null}                    
                </Link>            
                <div className="carrito">
                    <table>
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>                            
                            {carrito.map((articulo, i) => (
                               
                                <ProductoCarrito 
                                key={i}
                                articulo ={articulo}
                                eliminaProducto = {eliminaProducto}
                                />
                            ))}
                        </tbody>
                    </table>
                    <div className="d-grid ">
                        <button 
                        className="btn btn-primary mt-3" 
                        type="button"
                        onClick={() => (actualizarCarrito([]), agregarNotificacion( 1 ))}
                        >Vaciar carrito</button>
                    </div>
                </div>
            </li>

        </ul>

      );
}
 
export default IconoCarrito;