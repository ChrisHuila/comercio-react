
const ArticuloPagar = ({articulo}) => {
    return (
      <div className="articuloPagar">
          <div className="articuloPagar-img">
              <img src={articulo.imagen} alt={articulo.nombre} />
          </div>
          <div className="articuloPagar-informacion">
              <h4>{articulo.nombre}</h4>
              <ul>
                  <li><span>Precio: </span>{articulo.precio} </li>
                  <li><span>Cantidad: </span>  {articulo.cantidad}</li>
                  <li><span>Subtotal: <span className="articuloPagar-informacion_total">{`${articulo.cantidad * parseInt(articulo.precio) }`}</span></span></li>
              </ul>
          </div>
      </div>
    );
}
 
export default ArticuloPagar;