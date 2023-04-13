import { useContext, Fragment, useEffect } from 'react';
import Header from '../components/layout/Header';
import Banner from '../components/layout/Banner';
import Footer from '../components/layout/Footer';
import SeccionesProducto from "../components/producto/SeccionesProducto";
import Notificacion from '../components/helpers/Notificacion';
import CarritoContextprin from '../context/carrito/carritoContext';
import productos from './productos';
import { categorias } from './productos';


const Home  = () => {
   
   const {mensaje, obtenerDatosStorage, handleCarrito} = useContext(CarritoContextprin);

   useEffect(() => {
      // Obtiene los datos de local storage
      obtenerDatosStorage()
      handleCarrito(true)
   }, [])
    return ( 
        <Fragment>
            <Header />
            <Banner />
         
           <div className=" px-4">
           <SeccionesProducto
           productos={productos}
           categorias={categorias}
            />
               
           </div>
            {mensaje ? <Notificacion tipo='agregado' mensaje='Agregado al Carrito' />:null}
            
           <Footer />
        
        </Fragment>
     )
}
 
export default Home;