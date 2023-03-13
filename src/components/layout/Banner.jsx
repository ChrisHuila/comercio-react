import { useEffect, useState } from 'react';
import Portadas from '../Banner/Portadas';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
    // State del componente
    const [numeroportadas, guardasPortadas] = useState([]);

    useEffect(() => {
        // Asigna la cantidad de portadas
        const cantidadPortadas = num => {
            let numero = [];
            for(let i = 1; i <= num; i++){
                numero.push(`portada-${i}`);
            }
            return numero;
        }
        guardasPortadas(cantidadPortadas(4) );       
    }, [])

    
    return (
        <div className="banner">
             <Swiper                    
                pagination={true} 
                modules={[Autoplay, Pagination]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                slidesPerView={1}
                
            >       
                   {numeroportadas.map(portada => (
                        <SwiperSlide  
                        key={portada}
                        >
                        <Portadas
                            portada={portada}
                        />
                        </SwiperSlide>

                   ))}
                                         
            </Swiper>
        </div>
      );
}
 
export default Banner;