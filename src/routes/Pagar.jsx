import { Fragment, useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ArticuloPagar from "../components/pagar/ArticuloPagar";
import usePagar from "../hooks/usePagar";

import formatoPrecio from "../components/helpers/FormatoPrecio";
import ScrollLink from "../components/helpers/ScrollLink";
import "./style/pagar.css";

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CarritoContextprin from "../context/carrito/carritoContext";
import limpiaLocalStorage from "../components/helpers/limpiaLStorage";
const style = {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 600,
    width:'95%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 0,
  };

const Pagar = () => {
    
    //   State del modal 
    const [open, setOpen] = useState(false);

    // Utiliza el reducer
    const {carrito, valortotal, limpiarCarrito, handleNotificacion, obtenerValorTotal, handleCarrito, productosComprados} = useContext(CarritoContextprin)

    // Se le quita 1 porque es su valor inicial
    let totalValor = parseInt(valortotal) - 1;
    // Custom hook
    const {comprarealizada} = usePagar(carrito, totalValor)
    const navigate = useNavigate();

    useEffect(() => {
        // Oculta carrito
        handleCarrito(false) 
    },[])
    
    const compraConfirmada =  () => {
        // Muestra modal de agradecimiento
        setOpen(true);
        // Crea el objeto de la compra
        comprarealizada.fecha = new Date();
        productosComprados(comprarealizada)
        // guardarCarritoCompra(comprarealizada)
        // console.log(comprarealizada);
        ScrollLink();

        // Retorna a los valores iniciales
        limpiarCarrito([])
        handleNotificacion( 1 )
        obtenerValorTotal(1)

        // Limpiamos localStorage
        limpiaLocalStorage()

        // Despues de 5 seg redirecciona
        setTimeout(() => {
            navigate("/", { replace: true }); 
        }, 5000);
    }
    return (
        <Fragment>
            <Header />
            <div className="pagar container">
                <div className="pagar-contenedor sombra-dark ">
                    <h2>Por favor confirma tu Compra</h2>
                    {carrito.map(articulo => (
                        <ArticuloPagar
                            key={articulo.id}
                            articulo={articulo}
                        />
                    ))}
                    <hr />
                    <div className="pagar-confirmacion">
                        {totalValor > 0 && 
                            <h3>Total: <span>{`$${formatoPrecio(totalValor)}`}</span> </h3>
                        }
                        <button
                            className="btn btn-success"
                            onClick={compraConfirmada}
                        >
                            Confirmar Compra
                        </button>
                        <Modal
                        open={open}
                        >
                            <Box sx={style}>
                                <h2 className="bg-success bg-gradient text-white text-center no-margin">Gracias por tu compra</h2>
                                <img src="https://images.pexels.com/photos/2072168/pexels-photo-2072168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{maxWidth: '100%'}} alt="thank-you" />
                            </Box>
                        </Modal>
                  
                    </div>
                    
                </div>

            </div>

            <Footer />
        </Fragment>
    );
}
 
export default Pagar;