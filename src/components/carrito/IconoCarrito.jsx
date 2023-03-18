import { Link } from "react-router-dom";
import Notificacion from "../helpers/Notificacion";

import useCarrito from "../../hooks/useCarrito";
import ProductoCarrito from "./ProductoCarrito";
import ScrollLink from "../helpers/ScrollLink";

const IconoCarrito = () => {   
    
    // Utiliza el hook useCarrito
    const {carrito, notificacion, eliminaProducto, actualizarCarrito, agregarNotificacion, guardarValorTotal} = useCarrito();

    return (        
        <ul style={{listStyle: "none", margin: "0", padding: "0"}}>
            <li className="submenu">
                <Link 
                to={'/carrito'} 
                className="nav-link fw-bold text-white position-relative" 
                onClick={ScrollLink}
                >
                     <i className="bi bi-cart4 h4 m-0"></i>
                    {notificacion > 1 
                    ? 
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {/* Se le quita 1 porque es su valor inicial */}
                            {notificacion - 1}+
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    :null}                    
                </Link>            
                <div className="carrito" >
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
                
                    {carrito.length > 0 
                        ?   <div className="iconoCarrito-botones">
                                <Link
                                    to={'/pagar'} 
                                    className="btn btn-success mt-3"
                                    onClick={ScrollLink} 
                                >Continuar con la Compra
                                </Link>
                                
                                <button 
                                    className="btn btn-primary " 
                                    type="button"
                                    onClick={() => (actualizarCarrito([]), agregarNotificacion( 1 ), guardarValorTotal(1))}
                                    >Vaciar Carrito
                                </button>
                                <Link 
                                    to={'/carrito'} 
                                    className="btn btn-outline-info" 
                                    onClick={ScrollLink}
                                    >
                                        Ir a la pagina de Carrito
                                </Link>
                            </div>
                        
                        : 
                            <div className="d-grid">
                                <Notificacion 
                                    tipo= 'informacion'
                                    mensaje= 'Agrega productos al Carrito'
                                />                    
                            </div>
                        }
                    
                </div>
            </li>

        </ul>

      );
}
 
export default IconoCarrito;