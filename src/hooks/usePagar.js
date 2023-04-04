import { useState, useEffect } from "react";

const usePagar = (carrito, valortotal) => {
    const [comprarealizada, guardarCompra] = useState({
        compra: [],
        total: "",
        usuarioid:"" 
    })

    useEffect(() => {
        guardarCompra({
            compra: [...carrito],
            total:  valortotal,
            usuarioid: "" 
        })
    }, [])
    return {comprarealizada}
}
 
export default usePagar;