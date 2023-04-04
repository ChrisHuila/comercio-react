import {  useState } from "react";
import { useParams } from "react-router-dom";
import PerfilHeader from "../components/perfil/PerfilHeader";
import SelectCompra from "../components/perfil/SelectCompra";
import ArticuloComprado from "../components/perfil/ArticuloComprado";
import formatoPrecio from "../components/helpers/FormatoPrecio";
import {compras} from "./productos";
import "./style/perfil.css";

const Perfil = () => {
  // State dle componente
  const [filtrocompra, guardarFiltroCompra] = useState("");
  // ==========TODO============ (Asignar valores)//
  const {usuario, id}  = useParams();

    return (
      <div className="perfil">
        <PerfilHeader />

        <main className="perfil-main container">
          <div className="perfil-contenedor">
            <h2 >Tu historial de compras</h2>
            <SelectCompra compras={compras} guardarFiltroCompra={guardarFiltroCompra}/>
            {/* filtra deacuerdo a la fecha local */}
            {compras.map((compras, i) => ( (new Date(compras.fecha)).toLocaleDateString() === filtrocompra &&
                compras.compra.map((compra, i )=> (
                <ArticuloComprado 
                  key={i}
                  compra={compra}
                />
              ))
            ))}
         </div>
        </main>
      </div>
      );
}
 
export default Perfil;