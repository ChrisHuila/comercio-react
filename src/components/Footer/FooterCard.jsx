
const FooterCard = ({icono, titulo, descripcion, span}) => {
    return (        
        <div className="footer-contacto-card">
            <div className="footer-contacto-icono">
                <i className={icono}></i>
            </div>
            <div className="footer-contacto-informacion">
                <h4>{titulo}</h4>
                <p className="no-margin">{descripcion} <span>{span}</span></p>
            </div>
        </div>
      );
}
 
export default FooterCard;