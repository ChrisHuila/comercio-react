import {Fragment} from "react";
import { useParams } from 'react-router-dom';

import Banner from "../components/layout/Banner";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import productos, {categorias} from "./productos";
import Categoria from "../components/categorias/categoria";
import Articulo from "../components/producto/Articulo";

const Categorias = () => {
  // toma los parametros de la categoria
  const {nombrecategorias: categoria, idcategoria} =useParams();


 
    return (
      <Fragment>
        <Header />
        {/* <Banner /> */}
        <h1>{categoria}</h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5
        g-2 g-lg-1 px-4">
          {productos.map(producto => (producto.categoria === idcategoria 
          && <div className="col">
              <Categoria 
                key={producto.id}
                articulo={producto}
              />
          </div>
          
          ))}
        </div>
  
        
        <Footer />
      </Fragment>
      );
}
 
export default Categorias;