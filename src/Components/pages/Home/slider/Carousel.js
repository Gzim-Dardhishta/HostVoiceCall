import React from 'react'
import { useState } from "react";
import CarouselItem from "./CarouselItem";
import CarouselIndicators from "./CarouselIndicators";
import "./Carousel.scss";
import useWindowDimensions from "./UseWindowDimensions";

function Carousel({ slider }) {

    const [currentSlide, setCurrentSlide] = useState(0);
    const { width, height } = useWindowDimensions();

    const switchIndex = (index) => {
        setCurrentSlide(index);
    }
    return (
        <div className='carousel'>
            <div
                className="carousel-inner"
                style={{ transform: `translateX(${-currentSlide * 50}%)`}}
            // style={
            //     width > 1068
            //         ? { transform: `translateX(${-currentSlide * 20}%)` }
            //         : width < 1068 && width >= 462
            //             ? { transform: `translateX(${-currentSlide * 50}%)` }
            //             : { transform: `translateX(${-currentSlide * 100}%)` }
            // }
            >
                {slider.map((slide, i) => {
                    return (
                        <CarouselItem slide={slide} key={i} />
                    )
                })}
            </div>
            <CarouselIndicators slider={slider} currentIndex={currentSlide} switchIndex={switchIndex} />
        </div>
    )
}

export default Carousel