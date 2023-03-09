
import NavLogin from '../auth/NavLogin';
import Logo from '../helpers/Logo';
import FormularioBusqueda from "../producto/FormularioBusqueda";


const Header = () => {
    return ( 
         
          <header className='header'>
            <div className="container-xl header-container">
              <div className="header-login">
                <NavLogin/>
              </div>

              <div className="header-top">
                <Logo 
                  estilo=""
                />
                
                 <FormularioBusqueda/>
              </div>
            </div>
            
          </header>
     )
}
 
export default Header;