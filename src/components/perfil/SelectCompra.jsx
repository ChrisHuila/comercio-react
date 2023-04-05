import { useState, useEffect  } from "react";

const SelectCompra = ({compras, guardarFiltroCompra}) => {
    // State del componente
    const [fselect, guardarFSelect] = useState("");
 
    useEffect(() =>{
        if(fselect === ""){
            guardarFSelect(fechaLocal (compras[0].fecha))
            guardarFiltroCompra(fechaLocal (compras[0].fecha))
        }
    }, [compras])
    
    // Cuando cambia la fecha selecciona la guarda
    useEffect(() => {
        guardarFiltroCompra(fselect)

    }, [fselect])

   // Convierte a la fecha local
   const fechaLocal = newDate => {
    return new Date(newDate).toLocaleDateString()
  }

  const handleDate = e => {
    guardarFSelect(e.target.value)
  }
    return (
        <form>
            <label htmlFor="fecha">Filtra por fecha</label>
            <select 
            onChange={ handleDate}
            id="fecha" 
            value={fselect}
            >
                 {compras.map(compra => (
                   <option key={compra.fecha} value={fechaLocal(compra.fecha)}>{fechaLocal(compra.fecha)}</option> 
                 ))}
            </select>
        
        </form>
    );
}
 
export default SelectCompra;