
const Notificacion = ({tipo, mensaje}) => {
    
    switch (tipo) {
        case 'agregado':
            return(
                <p className='mensaje'>{mensaje} <i className="bi bi-cart4"></i></p>
            )            
        case 'informacion':
            return(
                <p className='carrito-vacio btn btn-warning'>{mensaje} </p>
            )            
        default:            
            break;
    }   
    
}
 
export default Notificacion;