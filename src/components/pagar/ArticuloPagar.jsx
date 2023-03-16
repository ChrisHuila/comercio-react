
const ArticuloPagar = ({articulo}) => {
    return (
      <div className="articuloPagar">
          <div className="articuloPagar-img">
              <img src={articulo.imagen} alt={articulo.nombre} />
          </div>
          <div className="articuloPagar-informacion">
              <h4>{articulo.nombre}</h4>
              <ul>
                  <li>Precio: {articulo.precio} </li>
                  <li>Cantidad: {articulo.cantidad}</li>
                  <li><span>Total: {`${articulo.cantidad * parseInt(articulo.precio) }`}</span></li>
              </ul>
          </div>
      </div>
    );
}
 
export default ArticuloPagar;