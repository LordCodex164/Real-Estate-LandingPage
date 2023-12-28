import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from "swiper/react"
import "swiper/css"
import "./Residencies.css"
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/Common'

const SliderButtons = () => {
    const swiper = useSwiper()
    return (
        <div className="flexCenter r-buttons">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    )
}


const Residencies = () => {

  return (
   <section className="r-wrapper">
    <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
            <span className='orangeText'>Best Choices</span>
            <span className='secondaryText'>Popular Residencies</span>
        </div>

        <Swiper 
        spaceBetween={50}
        breakpoints={{
            480: {
                slidesPerView: 1,
            },
            600:{
                slidesPerView: 2,
            },
            750:{
                slidesPerView: 3,
            },
            1100: {
                slidesPerView: 4
            }
        }}>
            <SliderButtons/>
            {data.map((card, i) => (
                <SwiperSlide key={i}>
                   <div className='flexColStart r-card'>
                    <img src={card.image} alt='mage'/>
                   
                   <span className='secondaryText r-price'>
                    <span style={{color: "orange"}}>$</span>
                    <span>{card.price}</span>
                   </span>

                   <span className='primaryText'>{card.name}</span>
                   <span className="secondaryText">{card.detail}</span>
                   </div>
                </SwiperSlide>
            ))}
        </Swiper>  
    </div>
   </section>
  )
}

export default Residencies