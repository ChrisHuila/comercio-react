import { useEffect, useState } from 'react';
import Portadas from '../Banner/Portadas';

import banner from '../Banner/banner';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
    
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
   
                   {banner.map((portada, i) => (
                        <SwiperSlide key={i}>
                        <Portadas 
                            portada={portada.img}
                        />
                        </SwiperSlide>
                   ))}
                                         
            </Swiper>
        </div>
      );
}
 
export default Banner;