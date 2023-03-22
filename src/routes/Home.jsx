import { useContext, Fragment } from 'react';
import Header from '../components/layout/Header';
import Banner from '../components/layout/Banner';
import Footer from '../components/layout/Footer';
import SeccionesProducto from "../components/producto/SeccionesProducto";
import Notificacion from '../components/helpers/Notificacion';
import { CarritoContext } from '../context/carritoContext';


const Home  = () => {

   const {mensaje} = useContext(CarritoContext);
    const productos = [
        {id:1 , nombre: 'pc',categoria:'tecnologia', precio:'50', comentario: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ', imagen: 'https://img.freepik.com/foto-gratis/mujer-negocios-que-trabajan-computadora-portatil_1388-67.jpg?w=740&t=st=1677514541~exp=1677515141~hmac=c709b5edd4000f60a1a0012b5fa05d70cb3649a5aafdf4ff40057a8cf7273a6c' },
        {id:2 , nombre: 'pc',categoria:'tecnologia', precio:'50', comentario: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ', imagen: 'https://img.freepik.com/foto-gratis/mujer-negocios-que-trabajan-computadora-portatil_1388-67.jpg?w=740&t=st=1677514541~exp=1677515141~hmac=c709b5edd4000f60a1a0012b5fa05d70cb3649a5aafdf4ff40057a8cf7273a6c' },
        {id:3 , nombre: 'pc',categoria:'tecnologia', precio:'50', comentario: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ', imagen: 'https://img.freepik.com/foto-gratis/mujer-negocios-que-trabajan-computadora-portatil_1388-67.jpg?w=740&t=st=1677514541~exp=1677515141~hmac=c709b5edd4000f60a1a0012b5fa05d70cb3649a5aafdf4ff40057a8cf7273a6c' },
        {id:4 , nombre: 'pc',categoria:'tecnologia', precio:'50', comentario: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ', imagen: 'https://img.freepik.com/foto-gratis/mujer-negocios-que-trabajan-computadora-portatil_1388-67.jpg?w=740&t=st=1677514541~exp=1677515141~hmac=c709b5edd4000f60a1a0012b5fa05d70cb3649a5aafdf4ff40057a8cf7273a6c' },
        {id:5 , nombre: 'shoes',categoria:'moda', precio:'50', comentario: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ', imagen: 'https://img.freepik.com/foto-gratis/mujer-deportista-asiatica-atleta-atando-cordones-trotar-carretera-parque-zapatos-correr-parque-publico-mujer-asiatica-activa-atando-cordones-zapatos-antes-correr-mujer-atando-cordones-zapatos_609648-2980.jpg?w=740&t=st=1677514757~exp=1677515357~hmac=2df688d5cd402bc29b28ab2911b213eddc74d6da7b1aa004600ffaa4d8a56531' },
        {id:6 , nombre: 'shoes',categoria:'moda', precio:'50', comentario: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ', imagen: 'https://img.freepik.com/foto-gratis/mujer-deportista-asiatica-atleta-atando-cordones-trotar-carretera-parque-zapatos-correr-parque-publico-mujer-asiatica-activa-atando-cordones-zapatos-antes-correr-mujer-atando-cordones-zapatos_609648-2980.jpg?w=740&t=st=1677514757~exp=1677515357~hmac=2df688d5cd402bc29b28ab2911b213eddc74d6da7b1aa004600ffaa4d8a56531' },
        {id:7 , nombre: 'shoes',categoria:'moda', precio:'50', comentario: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ', imagen: 'https://img.freepik.com/foto-gratis/mujer-deportista-asiatica-atleta-atando-cordones-trotar-carretera-parque-zapatos-correr-parque-publico-mujer-asiatica-activa-atando-cordones-zapatos-antes-correr-mujer-atando-cordones-zapatos_609648-2980.jpg?w=740&t=st=1677514757~exp=1677515357~hmac=2df688d5cd402bc29b28ab2911b213eddc74d6da7b1aa004600ffaa4d8a56531' },
        {id:8 , nombre: 'shoes',categoria:'moda', precio:'50', comentario: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ', imagen: 'https://img.freepik.com/foto-gratis/mujer-deportista-asiatica-atleta-atando-cordones-trotar-carretera-parque-zapatos-correr-parque-publico-mujer-asiatica-activa-atando-cordones-zapatos-antes-correr-mujer-atando-cordones-zapatos_609648-2980.jpg?w=740&t=st=1677514757~exp=1677515357~hmac=2df688d5cd402bc29b28ab2911b213eddc74d6da7b1aa004600ffaa4d8a56531' },
        {id:9 , nombre: 'estufa',categoria:'tecnologia', precio:'50', comentario: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ', imagen: 'https://img.freepik.com/foto-gratis/habitacion-moderna-vacia-muebles_23-2149178335.jpg?w=740&t=st=1677515079~exp=1677515679~hmac=9aed4cab2a1f1587be784610dbd6dc11ad97aba78a7ccf2b23a073faf1060905' },
        {id:10 , nombre: 'estufa',categoria:'tecnologia', precio:'50', comentario: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ', imagen: 'https://img.freepik.com/foto-gratis/habitacion-moderna-vacia-muebles_23-2149178335.jpg?w=740&t=st=1677515079~exp=1677515679~hmac=9aed4cab2a1f1587be784610dbd6dc11ad97aba78a7ccf2b23a073faf1060905' },
        {id:11 , nombre: 'estufa',categoria:'tecnologia', precio:'50', comentario: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ', imagen: 'https://img.freepik.com/foto-gratis/habitacion-moderna-vacia-muebles_23-2149178335.jpg?w=740&t=st=1677515079~exp=1677515679~hmac=9aed4cab2a1f1587be784610dbd6dc11ad97aba78a7ccf2b23a073faf1060905' },
        {id:12 , nombre: 'estufa',categoria:'tecnologia', precio:'50', comentario: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ', imagen: 'https://img.freepik.com/foto-gratis/habitacion-moderna-vacia-muebles_23-2149178335.jpg?w=740&t=st=1677515079~exp=1677515679~hmac=9aed4cab2a1f1587be784610dbd6dc11ad97aba78a7ccf2b23a073faf1060905' },
        {id:13 , nombre: 'estufa',categoria:'tecnologia', precio:'50', comentario: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ', imagen: 'https://img.freepik.com/foto-gratis/habitacion-moderna-vacia-muebles_23-2149178335.jpg?w=740&t=st=1677515079~exp=1677515679~hmac=9aed4cab2a1f1587be784610dbd6dc11ad97aba78a7ccf2b23a073faf1060905' }
    ]


    // Categorias
    const categorias = [
    {id: 1, nombre: 'tecnologia'},
    {id:2, nombre: 'moda'}
    ];

    
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