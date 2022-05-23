import React from 'react'
import SignupCarouselItems from './SignupCarouselItems'
import { useState } from "react";
import useWindowDimensions from './UseWindowDimensions';
import './SignupCarousel.scss';
import Indicators from './SignupCarouselIndicators';

const SignUpCarousel = ({ slider }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { width, height } = useWindowDimensions();

    const switchIndex = (index) => {
        setCurrentSlide(index);
    }

    return (
        <div className='signup-carousel'>
            <div className="signup-carousel-inner"
                style={
                    width > 1068
                        ? { transform: `translateX(${-currentSlide * 100}%)` }
                        : width < 1068 && width >= 462
                            ? { transform: `translateX(${-currentSlide * 100}%)` }
                            : { transform: `translateX(${-currentSlide * 100}%)` }
                }
            >
                <div className="signup-carousel-item">
                    {slider.map((slide, i) => {
                        return (
                            <div className="container">
                                <SignupCarouselItems slide={slide} key={i} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <Indicators slider={slider} currentIndex={currentSlide} switchIndex={switchIndex} />
        </div>
    )
}

export default SignUpCarousel