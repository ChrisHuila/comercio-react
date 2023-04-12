import formatoPrecio from "../helpers/FormatoPrecio";
import BotonAgregar from "../helpers/BotonAgregar";
import BotonEliminar from "../helpers/BotonEliminar";

const PaginaCarrito = ({articulo}) => {

    const url = `https://firebasestorage.googleapis.com/v0/b/ecommercereact-ccb1d.appspot.com/o/${articulo.imagen}?alt=media&token=fba7ec21-ca5e-4d2b-8cc3-2830309b446a`;
    return (
        <tr>
            <td><img className=" " style={{width: '90px', borderRadius: '50%', height: '90px'}} src={url} alt={articulo.nombre} /></td>            
            <td>{articulo.nombre}</td>
            <td>{`$ ${formatoPrecio(articulo.precio)}`}</td>
            <td>
                <ul className="carrito-contador pagination no-margin">
                    <li className="page-item">
                        <BotonEliminar 
                            producto={articulo}
                            contador={true}
                        />
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">{articulo.cantidad}</a>
                    </li>
                    <li className="page-item">
                        <BotonAgregar 
                            articulo={articulo}
                            estilo=""
                            contador={true}
                        />
                    </li>
                </ul>
            </td>            
            <td>{`$ ${formatoPrecio(articulo.cantidad * parseInt(articulo.precio)) }`}</td>         
        </tr>
      );
}
 
export default PaginaCarrito;