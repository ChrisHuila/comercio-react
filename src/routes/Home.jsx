import { useContext, Fragment } from 'react';
import Header from '../components/layout/Header';
import Banner from '../components/layout/Banner';
import Footer from '../components/layout/Footer';
import SeccionesProducto from "../components/producto/SeccionesProducto";
import Notificacion from '../components/helpers/Notificacion';
import { CarritoContext } from '../context/carritoContext';
import productos from './productos';
import { categorias } from './productos';


const Home  = () => {

   const {mensaje} = useContext(CarritoContext);
    
    
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