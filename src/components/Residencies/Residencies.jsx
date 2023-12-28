import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from "swiper/react"
import "swiper/css"
import data from '../../utils/slider.json'
const Residencies = () => {

    console.log(data)

  return (
   <section className="r-wrapper">
    <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
            <span className='orangeText'>Best Choices</span>
            <span className='secondaryText'>Popular Residencies</span>
        </div>

        <Swiper>
            {data.map((card, i) => {
                <SwiperSlide key={i}>
                   <div className='fleColStart r-card'>
                    <img src={'./r1.png'} alt='mage'/>
                   
                   <span>
                    <span style={{color: "orange"}}>$</span>
                    <span>{card.price}</span>
                   </span>
                   </div>
                </SwiperSlide>
            })}
        </Swiper>  
    </div>
   </section>
  )
}

export default Residencies