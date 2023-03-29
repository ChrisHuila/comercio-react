import { Link } from "react-router-dom";
import BotonAgregar from "../helpers/BotonAgregar";
import formatoPrecio from "../helpers/FormatoPrecio";

const Categoria = ({articulo}) => {

    const url = `https://firebasestorage.googleapis.com/v0/b/ecommercereact-ccb1d.appspot.com/o/${articulo.imagen}?alt=media&token=fba7ec21-ca5e-4d2b-8cc3-2830309b446a`;
    return (
            <div className="card categoria-contenedor" >
                <h2 className="card-header card-header__font">{articulo.referencia.substring(0, 15)}</h2>
                <div className="" style={{textAlign: 'center', background:'white', paddingTop:'1rem'}}>
                    <Link to={`/Producto/${articulo.nombre}/${articulo.id}`} >
                        <img 
                        className="categoria-card__img"
                        src={url} 
                        alt={articulo.referencia}
                            /> 
                    
                    </Link>
                </div>

                <div className="card-body card-body__contenedor" >
                   
                    <h3 className="categoria-descuento__texto">60% off envio gratis<i className="bi bi-lightning-fill"></i> <p className="categoria-descuento__precio"> {`$${formatoPrecio(parseInt(articulo.precio)*2.5)}`} </p></h3>

                    <h4 className="categoria-precio">Precio: <span className="text-success-emphasis"> {`$${formatoPrecio(parseInt(articulo.precio))}`} </span></h4> 

                    <div className="card-botones">                          
                            <BotonAgregar 
                                articulo={articulo}
                                estilo="btn btn-outline-secondary btn-sm"
                            />
                    </div> 
                </div>
              
            </div>
    )
}
 
export default Categoria;