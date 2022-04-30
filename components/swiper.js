import Image from 'next/image'

import React , {useState, useEffect} from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default ({items}) => {
    const [slideP, setSlideP] = useState(3)
    useEffect(() => {
        const doIt =() => {
            let w = window.innerWidth;
            if( w < 450)
                setSlideP(1)
            else if( w > 450 && w < 1000)
                setSlideP(2)
            else 
                setSlideP(3)
        }
      document && document.addEventListener('load', doIt())
    })
    
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={25}
      slidesPerView={slideP}
      navigation
      scrollbar={{ draggable: true }}
      className="h-full"
    >
        {
            items.map((item, index)=> (
                <SwiperSlide
                    key={item}
                    className="bg-white bg-opacity-50 rounded-full aspect-square"
                    style={{
                        backgroundImage: `url(/${item})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}
                >
                
                </SwiperSlide>
            ))
        }
      
    </Swiper>
  );
}