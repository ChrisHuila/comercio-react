import {Fragment} from "react";
import { useParams } from 'react-router-dom';

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import productos, {categorias} from "./productos";
import Categoria from "../components/categorias/categoria";

import "../components/categorias/style/categoria.css";

const Categorias = () => {
  // toma los parametros de la categoria
  const {nombrecategorias: categoria, idcategoria} =useParams();

    return (
      <Fragment>
        <Header />
        <h1 className="categorias-heading">{categoria}</h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5
        g-2 g-lg-1 px-4">
          { productos.map(producto => (producto.categoria === idcategoria 
          && <div className="col" key={producto.id}>
              <Categoria 
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