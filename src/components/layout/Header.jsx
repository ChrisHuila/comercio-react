
import { useEffect, useState } from 'react';

import NavLogin from '../auth/NavLogin';
import IconoCarrito from "../carrito/IconoCarrito";
import SideBar from './SideBar';
import Logo from '../helpers/Logo';
import FormularioBusqueda from "../producto/FormularioBusqueda";

import "./style/header.css";

const Header = () => {
// retorna la altura al hacer scroll
const consigueAltura = () => {
  return window.scrollY;
}
// State del componente
  const [visible, guardarVisible] = useState(true);
  const [hight, guardarHight] = useState(consigueAltura);
  

  // Dependiendo al scroll muestra header fijo
  useEffect(() => {
  
    

    const navegacionFija = () => {
        window.addEventListener('scroll', () => (
          guardarHight(consigueAltura)
        ))

        if (hight < 300){
          guardarVisible(true)
        }else{
          guardarVisible(false);
        }

        //  desmonta el listener
        return () => {
          window.removeEventListener('scroll',() => (
            guardarHight(consigueAltura)
          ));
        }
 
    }
    navegacionFija();
    
  }, [hight])

    return ( 
          <header className={`header ${!visible && window.innerWidth > 992 ? 'header-fijo' : ''}`} >
            <div className="container-xl header-container" >
              <div className="header-enlaces">
                <div className="header-carrito">
                  <IconoCarrito />
                </div>    

                <NavLogin/>
                {/* <UserAuth /> */}
              </div>
             <div className="header-principal">
                <SideBar />
                <div className="header-top">
                    <Logo 
                      estilo=""
                    />
                    
                    <FormularioBusqueda />
                </div>
             </div>
             
              
    
            </div>
            
          </header>
     )
}
 
export default Header;