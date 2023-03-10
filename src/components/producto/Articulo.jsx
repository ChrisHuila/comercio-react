
import { useState } from "react";
import { Link } from "react-router-dom";
import BotonAgregar from "../helpers/BotonAgregar";

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 600,
    width:'95%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 0,
  };

const Articulo = ({articulo}) => { 
//   State del modal 
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);   
    return (
            <div className="card card-contenedor" >
                <h2 className="card-header card-header__font">{articulo.nombre}</h2>
                <div className="">
                        <img 
                        className="card-header__img"
                        src={articulo.imagen} 
                        alt={articulo.nombre}
                        onClick={handleOpen}
                        
                         /> 
                    <Modal
                        open={open}
                        onClose={handleClose}
                    >
                        <Box sx={style}>
                            <img 
                            className="card-header__img"
                            src={articulo.imagen} 
                            alt={articulo.nombre}
                            /> 
                        </Box>
                    </Modal>
                </div>

                <div className="card-body card-body__contenedor" >
                   
                    <h3 className="card-descuento__texto">60% off envio gratis<i className="bi bi-lightning-fill"></i> <span className="card-descuento__precio"> {`$${(parseInt(articulo.precio)*2.5)}`} </span></h3>

                    <h4 className="card-precio">Precio: <span className="text-success-emphasis"> {`$${parseInt(articulo.precio)}`} </span></h4> 

                    <div className="card-botones">                          
                            <BotonAgregar 
                                articulo={articulo}
                                estilo="btn btn-outline-secondary btn-sm"
                            />

                            <Link to={`/Producto/${articulo.nombre}/${articulo.id}`} className='enlace-cuenta'>
                                ver mas
                            </Link>                

                    </div> 
                </div>
              
            </div>
    )
}
 
export default Articulo;