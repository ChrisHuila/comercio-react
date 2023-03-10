import { Link } from "react-router-dom";

const NavLogin = () => {
    return ( 
      <nav className="navbar navbar-expand ">
        <div className="collapse navbar-collapse" >
          <div className="navbar-nav">
            <a className="nav-link fw-bold fst-italic text-white" href="#">Sign in </a>
            <Link to={'/Login'}  className="nav-link fw-bold fst-italic text-white">
              Log in
            </Link>            
          </div>
        </div>
      </nav>
     )
}
 
export default NavLogin;