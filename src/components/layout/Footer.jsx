import Logo from "../helpers/Logo";
import FooterRedes from "../Footer/FooterRedes";
import FooterCard from "../Footer/FooterCard";

const Footer = () => {
    return ( 

      <div className="footer">
        <div className="footer-container container-lg grid">

          <div className="footer-header">
            <Logo 
              estilo="footer-titulo"
            />
            <p>Lorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>

            <FooterRedes />
          </div> {/* Fin footer-header */}

          <div className="footer-contacto">
            <h2> Información de la <span>Tienda</span></h2>

            <FooterCard 
              icono="bi bi-telephone-fill"
              titulo="Número de teléfono"
              descripcion="+57 321 5421 2135"
            />
            <FooterCard 
              icono="bi bi-envelope"
              titulo="Direccion de correo Electronico"
              descripcion="Email : "
              span="mail@example.com"
            />
            <FooterCard 
              icono="bi bi-geo-alt"
              titulo="Dirección"
              descripcion="Broome St, NY 10002,California, USA"
            />        
          </div> 

        </div>
      </div>
     )
}
 
export default Footer;