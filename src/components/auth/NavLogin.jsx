import { Link } from "react-router-dom";
import Carrito from "../carrito/Carrito";


const NavLogin = () => {
    return ( 
      <nav className="navbar navbar-expand pb-3 mt-1">
        <div className="collapse navbar-collapse" >
          <div className="navbar-nav">
            <a className="nav-link fw-bold fst-italic" href="#">Sign in </a>
            <Link to={'/Login'}  className="nav-link fw-bold fst-italic">
              Log in
            </Link>            
            <Carrito />
          </div>
        </div>
      </nav>
     )
}
 
export default NavLogin;