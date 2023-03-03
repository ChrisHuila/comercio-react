
const ProductoCarrito = ({articulo, eliminaProducto,}) => {
    // Elimina el producto
    const eliminarProducto = () => {
        eliminaProducto(articulo);
    } 

    return (
        <tr>
            <td><img className=" " style={{width: '90px'}} src={articulo.imagen} alt={articulo.nombre} /></td>            
            <td>{articulo.nombre}</td>
            <td>{`$ ${articulo.precio}`}</td>
            <td>{articulo.cantidad}</td>
            
            <td>
                <a 
                href="#" 
                className="borrar-curso"
                onClick={eliminarProducto}
                >X</a>
            </td>    
        </tr>
      );
}
 
export default ProductoCarrito;