import { useContext, useState, useEffect } from "react";
import { CarritoContext } from "../context/carritoContext";

const useCarrito = () => {
      // utiliza los datos del context (toma el producto agregado)
    const {cambio, producto, agregarCarrito} = useContext(CarritoContext);
          // muestra los productos de localStorage
    let productosIniciales = JSON.parse(localStorage.getItem('productos'));
    if(!productosIniciales){
        productosIniciales = [];
    }

    // Muestra las notificacion de localStorage
    let notificacionesIniciales = JSON.parse(localStorage.getItem('notificaciones'));
    if(!notificacionesIniciales){
        notificacionesIniciales = 1; // se agrega 1 para que la variable pueda existir
    }
    // state del componente
    const [carrito, actualizarCarrito] = useState(productosIniciales);
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
            actualizarCarrito(cantidadCarrito);
        }else if(producto.cantidad === 1){
            // Elimina del carrito
            const carritoActualizado  = carrito.filter(articulo => articulo.id !== producto.id);
            actualizarCarrito(carritoActualizado);
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
            localStorage.setItem('notificaciones', JSON.stringify(1));
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
            actualizarCarrito(cantidadCarrito);

        }else {
            // agregamos el producto
            actualizarCarrito(
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

    return {
        carrito, 
        notificacion,
        eliminaProducto,
        actualizarCarrito, 
        agregarNotificacion
    };
}
 
export default useCarrito;