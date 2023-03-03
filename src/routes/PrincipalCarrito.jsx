import useCarrito from "../hook/useCarrito";
import CarritoProductos from "../components/carrito/CarritoProductos";

const PrincipalCarrito = () => {
    // se toman los productos del carrito del custom hook
    const {carrito, eliminaProducto, actualizarCarrito, agregarNotificacion} = useCarrito();

    return (
        <div className="carrito">
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
                   
                    <CarritoProductos 
                    key={i}
                    articulo ={articulo}
                    carrito = {carrito}
                    actualizarCarrito={actualizarCarrito}
                    eliminaProducto = {eliminaProducto}
                    />
                ))}
            </tbody>
        </table>
        <div className="d-grid ">
            <button 
            className="btn btn-primary mt-3" 
            type="button"
            onClick={() => (agregarProducto([]), agregarNotificacion( 1 ))}
            >Vaciar carrito</button>
        </div>
    </div>
     );
}
 
export default PrincipalCarrito;