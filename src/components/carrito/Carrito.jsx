import { useContext, useState, useEffect } from "react";
import { CarritoContext } from "../../context/carritoContext";
import ProductoCarrito from "./ProductoCarrito";

const Carrito = () => {
    // utiliza los datos del state en el context
    const {cambio, producto, agregarCarrito} = useContext(CarritoContext);

    // muestra los productos de localStorage
    let productosIniciales = JSON.parse(localStorage.getItem('productos'));
    if(!productosIniciales){
        productosIniciales = [];
    }

    // Muestra las notificacion de localStorage
    let notificacionesIniciales = JSON.parse(localStorage.getItem('notificaciones'));
    if(!notificacionesIniciales){
        notificacionesIniciales = 0;
    }
    // state del componente
    const [carrito, agregarProducto] = useState(productosIniciales);
    const [notificacion , agregarNotificacion] = useState(notificacionesIniciales);

  

    // elimina un producto del carrito  
    const eliminaProducto = (producto) => {

        if(producto.cantidad > 1){
            // Actualiza la cantidad
            const cantidadCarrito  = carrito.map(articulo => {
                if(articulo.id === producto.id){
                    articulo.cantidad --;
                     return articulo;
                }else{
                    return articulo;
                }

            })
            agregarProducto(cantidadCarrito);
        }else if(producto.cantidad === 1){
            // Elimina del carrito
            const carritoActualizado  = carrito.filter(articulo => articulo.id !== producto.id);
            agregarProducto(carritoActualizado);
        }
      
        let numero = notificacion - 1;
        agregarNotificacion( numero )
    }

    const agregaLocalStorage = () => {
        // Valida productos
        if(productosIniciales){
            localStorage.setItem('productos', JSON.stringify(carrito));
        }else{
            localStorage.setItem('productos', JSON.stringify([]));
        }
        // Valida notificaciones 
        if(notificacionesIniciales){
            localStorage.setItem('notificaciones', JSON.stringify(notificacion));
        }else{
            localStorage.setItem('notificaciones', JSON.stringify(0));
        }
    }

    const carritoAgregar = () => {
        //  Se valida si ya el producto se encuentra en el carrito
        const existe = carrito.some(articulo => (articulo.id === producto.id));
    
        if(existe){
        // Actualizamos la cantidad
        const cantidadCarrito  = carrito.map(articulo => {
                if(articulo.id === producto.id){
                    articulo.cantidad ++;
                    return articulo;
                }else{
                    return articulo;
                }

            })
            agregarProducto(cantidadCarrito);

        }else {
            // agregamos el producto
            agregarProducto(
                [...carrito, producto]
            )
        }
       
        let numero = notificacion + 1;
        agregarNotificacion( numero )
        // coloca el valor por defecto para poder agregar otro producto
        agregarCarrito({})
    }
 

    useEffect(() => {
     
        const muestraProducto = () => {

            // Agrega a localStorage
            agregaLocalStorage();

            // valida que se le haya dado agregar a un producto
            if(Object.entries(producto).length === 0) return;

            // Se coloca la cantidad por defecto en caso de no tenerla  
            if(!producto.cantidad){
                producto.cantidad = 1;
            }
            // Se agrega al carrito
            carritoAgregar();
           
            }

        muestraProducto();
      
    }, [cambio, carrito, notificacion])

    return (        
        <ul style={{listStyle: "none", margin: "0", padding: "0"}}>
            <li className="submenu">
                <a className="nav-link fw-bold position-relative" href="#">
                    <i className="bi bi-cart4">Carrito</i>
                    {notificacion > 0 
                    ? 
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {notificacion}+
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    :null}                    
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
                        <tbody>                            
                            {carrito.map((articulo, i) => (
                               
                                <ProductoCarrito 
                                key={i}
                                articulo ={articulo}
                                eliminaProducto = {eliminaProducto}
                                />
                            ))}
                        </tbody>
                    </table>
                    <div className="d-grid ">
                        <button 
                        className="btn btn-primary mt-3" 
                        type="button"
                        onClick={() => (agregarProducto([]), agregarNotificacion( 0 ))}
                        >Vaciar carrito</button>
                    </div>
                </div>
            </li>

        </ul>

      );
}
 
export default Carrito;