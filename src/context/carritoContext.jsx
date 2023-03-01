import { createContext, useState } from "react";

export const CarritoContext = createContext();

const CarritoProvaider = (props) => {

    const [ producto, agregarCarrito] = useState({});
    const [cambio , guardarCambio] = useState(false);
    const [ mensaje, agregarMensaje] = useState(false);

    return ( 
        <CarritoContext.Provider
            value={{
                producto,
                cambio,
                mensaje,
                agregarCarrito,
                guardarCambio,
                agregarMensaje
            }}
        >

            {props.children}
        </CarritoContext.Provider>
     );
}
 
export default CarritoProvaider;