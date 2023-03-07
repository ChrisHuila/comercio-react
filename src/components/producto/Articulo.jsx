
import { Link } from "react-router-dom";
import BotonAgregar from "../helpers/BotonAgregar";


const Articulo = ({articulo}) => {    
    return (
            <div className="card card-contenedor" >
                <h2 className="card-header card-header__font">{articulo.nombre}</h2>
                <div className="">
                        <img className="card-header__img"src={articulo.imagen} alt={articulo.nombre} /> 
                    
                </div>

                <div className="card-body  position-relative mb-3 " >
                    {/* <p className="card-text">{articulo.comentario.slice(0, 90)} ...</p> */}
                   
                    <h3 className="card-descuento__texto">60% off envio gratis <span className="card-descuento__precio"> {`$${(parseInt(articulo.precio)*2.5)}`} </span></h3> 
                    <h4 className="headingPrice card-precio">Precio: <span className="text-success-emphasis"> {`$${parseInt(articulo.precio)}`} </span></h4> 
                    {/* <div className=" position-absolute bottom-0 end-0">                          
                            <BotonAgregar 
                                articulo={articulo}
                                estilo="btn btn-danger btn-sm me-2"
                            />

                            <Link to={`/Producto/${articulo.nombre}/${articulo.id}`} className='btn btn-danger btn-sm  me-2'>
                                ver mas
                            </Link>                

                        </div>  */}
                </div>
              
            </div>
    )
}
 
export default Articulo;