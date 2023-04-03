import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import PerfilHeader from "../components/perfil/PerfilHeader";
import SelectCompra from "../components/perfil/SelectCompra";
import ArticuloPagar from "../components/pagar/ArticuloPagar";

import { CarritoContext } from "../context/carritoContext";
import {compras} from "./productos";
import "./style/perfil.css";

const Perfil = () => {
   const [filtrocompra, guardarFiltroCompra] = useState("");
  const {usuario, id}  = useParams();
  // state del context
  const {carritocompra} = useContext(CarritoContext);

    return (
      <div className="">
        <PerfilHeader />

        <main className="perfil-main container">
          <div className="perfil-contenedor sombra-dark ">

            <SelectCompra compras={compras} guardarFiltroCompra={guardarFiltroCompra}/>
            {compras.map((compras) => ( (new Date(compras.fecha)).toLocaleDateString() === filtrocompra &&
              compras.compra.map((compra, i )=> (
                <ArticuloPagar
                  key={i}
                  articulo={compra}
                  />
              ))
            ))}
         </div>
        </main>
      </div>
      );
}
 
export default Perfil;