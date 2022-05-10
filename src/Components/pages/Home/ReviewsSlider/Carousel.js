import React from 'react'
import { useState } from "react";
import CarouselItems from "./CarouselItems";
import useWindowDimensions from "./UseWindowDimensions";
import CarouselIndicators from './CarouselIndicators';
import "./ReviewCarousel.scss"
// import './ReviewCarousel.scss'

const Carousel = ({ slides }) => {


    const [currentSlide, setCurrentSlide] = useState(0);
    const { width, height } = useWindowDimensions();

    const switchIndex = (index) => {
        setCurrentSlide(index);
    }


    return (
        <div className='review-carousel'>
            <div className="review-carousel-inner"
            style={
                    width > 1068
                      ? { transform: `translateX(${-currentSlide * 55}%)` }
                      : width < 1068 && width >= 462
                      ? { transform: `translateX(${-currentSlide * 100}%)` }
                      : { transform: `translateX(${-currentSlide * 100}%)` }
                }
            
            >
                <div className="review-carousel-item">
                    {slides.map((slide, i) => {
                        return (
                            <CarouselItems slide={slide} key={i} />
                        )
                    })}
                </div>
            </div>

            <CarouselIndicators currentIndex={currentSlide} switchIndex={switchIndex} />

        </div>
    )
}

export default Carousel