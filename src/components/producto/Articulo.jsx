
import { Link } from "react-router-dom";
import BotonAgregar from "../helpers/BotonAgregar";


const Articulo = ({articulo}) => {    
    return (
            <div className="card card-contenedor" >
                <h2 className="card-header card-header__font">{articulo.nombre}</h2>
                <div className="">
                        <img className="card-header__img"src={articulo.imagen} alt={articulo.nombre} /> 
                    
                </div>

                <div className="card-body card-body__contenedor" >
                   
                    <h3 className="card-descuento__texto">60% off envio gratis<i className="bi bi-lightning-fill"></i> <span className="card-descuento__precio"> {`$${(parseInt(articulo.precio)*2.5)}`} </span></h3>

                    <h4 className="headingPrice card-precio">Precio: <span className="text-success-emphasis"> {`$${parseInt(articulo.precio)}`} </span></h4> 

                    <div className="card-botones">                          
                            <BotonAgregar 
                                articulo={articulo}
                                estilo="btn btn-outline-secondary btn-sm"
                            />

                            <Link to={`/Producto/${articulo.nombre}/${articulo.id}`} className='enlace-cuenta'>
                                ver mas
                            </Link>                

                    </div> 
                </div>
              
            </div>
    )
}
 
export default Articulo;