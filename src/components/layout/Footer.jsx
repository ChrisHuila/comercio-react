
const Footer = () => {
    return ( 

      <div className="footer">
        <div className="container">

          <div className="footer-header">
            <h1 className='footer-titulo heading-font'><span>El</span> Comerciante</h1>
            <p>Lorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>          
            <div className="footer-redes">enlaces</div>

          </div>

          <div className="footer-contacto">
            <h2> Informacion de la <span>Tienda</span></h2>
            <div className="footer-contacto-card">
              <div className="footer-contacto-icono">
                icono
              </div>
              <div className="footer-contacto-informacion">
                informacion
              </div>
            </div>
            {/* fin telefono */}

           

          </div>
           {/*fin contacto  */}

        </div>
      </div>
     )
}
 
export default Footer;