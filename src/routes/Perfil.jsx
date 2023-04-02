import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CarritoContext } from "../context/carritoContext";
import "./style/perfil.css";

const Perfil = () => {
  const {usuario, id}  = useParams();
  const {carritocompra} = useContext(CarritoContext);
    return (
      <div className="">
        {console.log(carritocompra)}
        <header className="perfil-header">
          <div className="container">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample1.jpg" alt="perfil-img" />
            <h3 className="perfil-nombre">ursula lombardy</h3>
          </div>
        </header>
        <main>
          <p>hola</p>
        </main>
      </div>
  
      );
}
 
export default Perfil;