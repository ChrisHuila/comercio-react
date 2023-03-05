
import { Link } from "react-router-dom";
import BotonAgregar from "../helpers/BotonAgregar";


const Articulo = ({articulo}) => {
    // style={{Width: '100%', height: '100%'}}
    // style={{height: '200px'}}
    return (
            <div className="card mb-3" style={{maxWidth: '100%'}} >
                <h2 className="card-header headingCard">{articulo.nombre}</h2>
                <div className="d-flex justify-content-center slide">
                    <Link to={`/Producto/${articulo.nombre}/${articulo.id}`} >
                        <img className=" "  style={{maxWidth: '100%'}} src={articulo.imagen} alt={articulo.nombre} /> 
                    </Link> 
                </div>

                <div className="card-body position-relative mb-3 slide2" >
                    <p className="card-text">{articulo.comentario.slice(0, 90)} ...</p>
                    <h4 className="headingPrice">Precio: <span className="text-success-emphasis"> {`$${parseInt(articulo.precio)}`} </span></h4> 
                    <div className=" position-absolute bottom-0 end-0">                          
                            <BotonAgregar 
                                articulo={articulo}
                                estilo="btn btn-danger btn-sm me-2"
                            />

                            <Link to={`/Producto/${articulo.nombre}/${articulo.id}`} className='btn btn-danger btn-sm  me-2'>
                                ver mas
                            </Link>                

                        </div> 
                </div>
              
            </div>
    )
}
 
export default Articulo;