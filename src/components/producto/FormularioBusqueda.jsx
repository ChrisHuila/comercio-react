
const FormularioBusqueda = () => {
    return(
        <form className="form-busqueda">
            <div className="form-container">
                <div className="form-div-busqueda">
                    <input type="text" className="input-busqueda" placeholder="Busca por Articulo o por Categoría" />
                </div> 

                <div className="form-div-busqueda ">
                     <button
                        type="submit" className="bton bton--busqueda"
                     >
                        <i className="bi bi-search"></i>
                     </button>
                </div>
            </div>
        </form>
    )
}

export default FormularioBusqueda;