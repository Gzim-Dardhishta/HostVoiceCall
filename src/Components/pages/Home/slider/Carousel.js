import React from 'react'
import { useState } from "react";
import CarouselItem from "./CarouselItem";
import CarouselIndicators from "./CarouselIndicators";
import "./Carousel.scss";
import useWindowDimensions from "./UseWindowDimensions";

function Carousel({ slider }) {

    const [currentSlide, setCurrentSlide] = useState(0);
    
    const switchIndex = (index) => {
        setCurrentSlide(index);
    }
    return (
        <div className='carousel'>
            <div 
                className="carousel-inner"
                style={{ transform: `translateX(${-currentSlide * 100}%)`}}
                >
                {slider.map((slide, index) => {
                    return (
                        <CarouselItem slide={slide} key={index} />
                    )
                })}
            </div> 
            <CarouselIndicators slider={slider} currentIndex={currentSlide} switchIndex={switchIndex} />
        </div>
    )
}

export default Carousel