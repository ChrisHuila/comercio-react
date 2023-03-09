
import NavLogin from '../auth/NavLogin';
import FormularioBusqueda from "../producto/FormularioBusqueda";


const Header = () => {
    return ( 
         
          <header className='header'>
            <div className="container-xl header-container">
              <div className="header-login">
                <NavLogin/>
              </div>

              <div className="header-top">
                <h1 className='heading-font no-margin'><span>E</span>l Comerciante</h1>
                
                 <FormularioBusqueda/>
              </div>
            </div>
            
          </header>
     )
}
 
export default Header;