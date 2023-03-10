import { Fragment } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";


import useCarrito from "../hook/useCarrito";
import PaginaCarrito from "../components/carrito/PaginaCarrito";

const PrincipalCarrito = () => {
    // se toman los productos del carrito del custom hook
    const {carrito, eliminaProducto, actualizarCarrito, agregarNotificacion} = useCarrito();

    return (
        <Fragment>
            <Header />
            <div className="principalcarrito carrito">
                <table>
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>total</th>
                        </tr>
                    </thead>
                    <tbody>                            
                        {carrito.map((articulo, i) => (
                        
                            <PaginaCarrito 
                            key={i}
                            articulo ={articulo}
                            carrito = {carrito}
                            actualizarCarrito={actualizarCarrito}
                            eliminaProducto = {eliminaProducto}
                            />
                        ))}
                    </tbody>
                  
                </table>
                <div className="">
                    <button 
                    className="btn btn-primary mt-3" 
                    type="button"
                    onClick={() => (agregarProducto([]), agregarNotificacion( 1 ))}
                    >Vaciar carrito
                    </button>
                </div>
        </div>
        <Footer />

        </Fragment>
    );
}
 
export default PrincipalCarrito;