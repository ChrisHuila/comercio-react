
import { useEffect, useRef, useState } from 'react';
import NavLogin from '../auth/NavLogin';
import IconoCarrito from "../carrito/IconoCarrito";
import Logo from '../helpers/Logo';
import FormularioBusqueda from "../producto/FormularioBusqueda";


const Header = () => {

  const headerRef = useRef(null);
  const [visible, guardarVisible] = useState(true);

  const indicadorFn = entries => {
    const [entry] = entries;
    guardarVisible(entry.isIntersecting)
  }

  const opciones = {
    root: null,
    rootMargin: "0px",
    theresHold:1.0
  }

  useEffect(() => {
   
// Hace el llamado  api
    const navegacionFija = () => {
       // detecta si el header esta visible y si no lo muestra en pantalla
        const observer = new IntersectionObserver(indicadorFn, opciones);

        if(headerRef.current) observer.observe(headerRef.current);

        return () => {
          if(headerRef.current) observer.unobserve(headerRef.current);
        }
    }
    navegacionFija();
  }, [headerRef, opciones])
  let fijo = {

  }
  if(visible) {
    fijo = {
      position: 'fixed'
    }
  }


    return ( 
          <header className='header'  ref={headerRef}>
            <div className="container-xl header-container" >
              <div className="header-enlaces">
                <div className="header-carrito">
                  <IconoCarrito />
                </div>    

                <NavLogin/>
              </div>
              <div className="header-top">
                <Logo 
                  estilo=""
                />
                
                 <FormularioBusqueda />
              </div>
            </div>
            
          </header>
     )
}
 
export default Header;