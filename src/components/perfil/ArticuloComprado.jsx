import formatoPrecio from "../helpers/FormatoPrecio";

const ArticuloComprado = ({compra}) => {
    const url = `https://firebasestorage.googleapis.com/v0/b/ecommercereact-ccb1d.appspot.com/o/${compra.imagen}?alt=media&token=fba7ec21-ca5e-4d2b-8cc3-2830309b446a`;
    return (
      <div className="articuloPagar">
          <div className="articuloPagar-img" style={{paddingBottom: '1rem'}}>
              <img src={url} alt={compra.nombre} />
          </div>
          <div className="articuloPagar-informacion">
              <h4>{compra.referencia}</h4>
              <ul>
                  <li><span>Precio: </span>{` $${formatoPrecio(compra.precio)}`} </li>
                  <li><span>Cantidad: </span>  {compra.cantidad}</li>
                  <li><span>Total: <span className="articuloPagar-informacion_total">{`$${formatoPrecio(compra.cantidad * parseInt(compra.precio)) }`}</span></span></li>
              </ul>
          </div>
      </div>
    )
}
 
export default ArticuloComprado;