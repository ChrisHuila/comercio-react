
const CarritoProductos = ({articulo, carrito, eliminaProducto, actualizarCarrito}) => {
    // Elimina el producto
    const restaProducto = () => {
        eliminaProducto(articulo);
    } 
    const adicionaProducto = () => {
        const carritoActualizado  = carrito.map(producto => {
            if(producto.id === articulo.id){
                producto.cantidad ++;
                return producto;
            }else{
                return producto;
            }

        })
        actualizarCarrito(carritoActualizado);
    }
    return (
        <tr>
            <td><img className=" " style={{width: '90px'}} src={articulo.imagen} alt={articulo.nombre} /></td>            
            <td>{articulo.nombre}</td>
            <td>{`$ ${articulo.precio}`}</td>
            <td>
                <ul className="pagination">
                    <li className="page-item">
                        <a 
                        className="page-link" 
                        href="#" 
                        onClick={restaProducto} 
                        aria-label="Previous"
                        >
                            <span aria-hidden="true">&laquo;</span>
                        </a>                   
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">{articulo.cantidad}</a>
                    </li>
                    <li className="page-item">
                        <a 
                        className="page-link" 
                        href="#" 
                        onClick={adicionaProducto} 
                        aria-label="Previous"
                        >
                            <span aria-hidden="true">&raquo;</span>
                        </a>                   
                    </li>
                </ul>
            </td>           
        </tr>
      );
}
 
export default CarritoProductos;