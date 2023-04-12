import BotonEliminar from "../helpers/BotonEliminar";
import formatoPrecio from "../helpers/FormatoPrecio";

const ProductoCarrito = ({articulo}) => {
  
    const url = `https://firebasestorage.googleapis.com/v0/b/ecommercereact-ccb1d.appspot.com/o/${articulo.imagen}?alt=media&token=fba7ec21-ca5e-4d2b-8cc3-2830309b446a`;
    return (
        <tr>
            <td><img className=" " style={{width: '90px'}} src={url} alt={articulo.nombre} /></td>            
            <td>{articulo.nombre}</td>
            <td>{`$${formatoPrecio(articulo.precio)}`}</td>
            <td>{articulo.cantidad}</td>
            
            <td>
                <BotonEliminar 
                    producto={articulo}
                    contador={false}
                />
            </td>    
        </tr>
      );
}
 
export default ProductoCarrito;