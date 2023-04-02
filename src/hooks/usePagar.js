import { useState, useEffect } from "react";

const usePagar = (carrito, valortotal) => {
    const [comprarealizada, guardarCompra] = useState({
        compra: [],
        total: ""
    })

    useEffect(() => {
        guardarCompra({
            compra: [...carrito],
            total:  valortotal
        })
       
    }, [])
    return {comprarealizada}
}
 
export default usePagar;