
const Carrito = () => {
    return (        
        <ul style={{listStyle: "none", margin: "0", padding: "0"}}>
            <li className="submenu border">
                <a className="nav-link fw-bold" href="#">
                    <i className="bi bi-cart4">Carrito</i>
                </a>
                <div className="carrito">
                    <table>
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>

            </li>

        </ul>

      );
}
 
export default Carrito;