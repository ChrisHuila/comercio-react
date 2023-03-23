import { Fragment, useEffect, useState } from "react";
import Articulo from "./Articulo";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

const SeccionesProducto = ({productos, categorias}) => {

    const getWidth = () => window.innerWidth || document.documentElement.clientWidth 
    || document.body.clientWidth;

    // Establece width en el state local
    const [width, setWidth] = useState(getWidth());

    useEffect(() => {

        // para limpiar el timeout
        let timeoutId = null;

        const resizeListener = () => {
            //previene la ejecucion antes del timeout
            clearTimeout(timeoutId);
            // cambia el estado despues de 100milisegundos
            timeoutId = setTimeout(() => setWidth(getWidth())
            , 150);
        }
   
        // agregamos el listener rezise
        window.addEventListener('resize', resizeListener);

    },[])

    const getNumber = () => {
        
        if(width > 992){
            return 5;
        }else if (width > 792) {
            return 4;
        }else if (width > 576){
            return 2;
        } else{
            return 1;
        }

        
    }

    return ( 
        <Fragment>
                        
            {categorias.map( (categoria, i) => (
                <div key={i} >
                    <h2 className=" categoria-header">{categoria.nombre}</h2>
                   
                        <Swiper                    
                        navigation={true}
                        pagination={true} 
                        modules={[Navigation, Pagination]}
                        spaceBetween={10}
                        slidesPerView={getNumber()}
                      
                        >       
                            <div className=" mt-3">
                                {productos.map( articulo => ( articulo.categoria === categoria.id && articulo.imagen
                                /* no se le pone "return" porque jsx no lo acepta aqui */
                                ?<SwiperSlide key={articulo.id}>
                                    <Articulo                                        
                                    articulo={articulo}
                                    />
                                </SwiperSlide>
                                : null))}
                            </div>                      
                        </Swiper>

                    
                    <div className=" d-flex justify-content-end mt-2">
                        <Link to={'/'} className='btn btn-sm btn-dark '>
                            Ver todos...
                        </Link> 
                    </div>
                      

                </div>
            ))}

             

        </Fragment>
     );
}
 
export default SeccionesProducto;