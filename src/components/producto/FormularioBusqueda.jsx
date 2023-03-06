
const FormularioBusqueda = () => {
    return(
        <form className="form-busqueda">
            <div className="form-container">
                <div className="form-div-busqueda">
                    <input type="text" className="input-busqueda" placeholder="Busca por Articulo o por Categoría" />
                </div> 

                <div className="form-div-busqueda ">
                    <input 
                    type="submit" className="bton bton--busqueda"
                    value='Buscar'
                     />
                </div>
            </div>
        </form>
    )
}

export default FormularioBusqueda;