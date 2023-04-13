import { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Notificacion from "../components/helpers/Notificacion";
import PaginaCarrito from "../components/carrito/PaginaCarrito";
import CarritoContext from "../context/carrito/carritoContext";
import ScrollLink from "../components/helpers/ScrollLink";
import limpiaLocalStorage from "../components/helpers/limpiaLStorage";
const PrincipalCarrito = () => {
   
    // useContext
   const {carrito, limpiarCarrito, handleNotificacion, obtenerValorTotal, handleCarrito} = useContext(CarritoContext);

    //    Oculta el carrito
    useEffect(() => {
        handleCarrito(true);
    }, [])

    const handleVaciarCarrito = () => {
        // Valores iniciales
        limpiarCarrito([])
        handleNotificacion( 1 )
        obtenerValorTotal(1)
        // Limpiamos localStorage
        limpiaLocalStorage()
    }

    return (
        <Fragment>
            <Header />
            <div className="container principalcarrito carrito">
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
                            />
                        ))}
                    </tbody>
                  
                </table>
                {carrito.length 
                ?
                <div className="principalcarrito-botones">
                    <Link
                        to={'/pagar'} 
                        className="btn btn-success boton-compra mt-3" 
                        type="button"
                        onClick={ScrollLink}
                    >Continuar con la Compra
                    </Link>

                    <button 
                    className="btn btn-primary mt-3" 
                    type="button"
                    onClick={handleVaciarCarrito}
                    >Vaciar carrito
                    </button>
                </div>
                :
                <div className="principalcarrito-boton--notificacion">
                    <Link to={'/'} onClick={ScrollLink}>
                        <Notificacion 
                        tipo= 'informacion'
                        mensaje= 'Agrega productos al Carrito'
                        />                    
                    </Link>
                </div>
                }
        </div>
        <Footer />

        </Fragment>
    );
}
 
export default PrincipalCarrito;