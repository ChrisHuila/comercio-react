
const Portadas = ({portada}) => {
    
    // Retorna el mes actual
    let mesActual = new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date());
    return (
        <div className={`portadas ${portada}`} >
            <div className="portadas-container">
                <div className="container portada-container__header">
                    <h1 className="portada-header">Las mejores ofertas de {mesActual}<span>Descuebre lo que tenemos para ti</span></h1>
                </div>
            </div>          
            
        </div>
      );
}
 
export default Portadas;