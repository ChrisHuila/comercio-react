import PropTypes from "prop-types";

const Notificacion = ({tipo, mensaje,}) => {
    
    switch (tipo) {
        case 'agregado':
            return(
                <p className='mensaje'>{mensaje} <i className="bi bi-cart4"></i></p>
            )            
        case 'informacion':
            return(
                <p className='btn btn-warning'>{mensaje} </p>
            )            
        default:            
            break;
    }   
    
}
Notificacion.propTypes = {
    tipo: PropTypes.string.isRequired,
    mensaje: PropTypes.string.isRequired
}

export default Notificacion;