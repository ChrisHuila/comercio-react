import {Fragment, useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import productos, {categorias} from "./productos";
import Categoria from "../components/categorias/categoria";
import { CarritoContext } from "../context/carritoContext";

import "../components/categorias/style/categoria.css";

const Categorias = () => {
  // toma los parametros de la categoria
  const {nombrecategorias: categoria, idcategoria} =useParams();
  // toma la funcion del context
  const { guardarMostrarCarrito} = useContext(CarritoContext)

  useEffect(() => {
    // Muestra el carrito si no esta visible
    guardarMostrarCarrito(true);

  },[])


    return (
      <Fragment>
        <Header />
        <h1 className="categorias-heading">{categoria}</h1>
        <div className="categorias-contenedor row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5
        g-2 g-lg-1 px-4">
          { productos.map(producto => (producto.categoria === idcategoria 
          && <div className="col" key={producto.id}>
              <Categoria 
                articulo={producto}
              />
          </div>
          ))}
        </div>
        <div className="categorias-visor"></div>
        <Footer />
      </Fragment>
      );
}
 
export default Categorias;