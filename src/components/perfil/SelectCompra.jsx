import { useState, useEffect  } from "react";

const SelectCompra = ({compras, guardarFiltroCompra}) => {
    // State del componente
    const [fechas, guardarFecha] = useState([]);
    const [fselect, guardarFSelect] = useState("");

 
    useEffect(() =>{
        // Crea el array de fechas
        const fecha = [];
        for( let i = 0; i < compras.length; i++){
           if(!fecha.includes(fechaLocal(compras[i].fecha))){
            fecha.push(fechaLocal(compras[i].fecha))
           } 
        }
        guardarFecha(fecha)
        if(fselect === ""){
            // Muestra el ultimo elemento en el array
            guardarFSelect(fecha[fecha.length -1])
        }
    }, [compras])
   // Convierte a la fecha local
   const fechaLocal = newDate => {
    return new Date(newDate).toLocaleDateString()
  }

  const handleDate = e => {
    guardarFSelect(e.target.value)
    guardarFiltroCompra(fselect)
  }
    return (
        <form>
            <label htmlFor="fecha">Filtra por fecha</label>
            <select 
            onChange={ handleDate}
            id="fecha" 
            value={fselect}
            >
                {fechas.map(fecha => (
                    <option key={fecha} value={fecha}>{fecha}</option>
                ))}
                
            </select>
        </form>
    );
}
 
export default SelectCompra;