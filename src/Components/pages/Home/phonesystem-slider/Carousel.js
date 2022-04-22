import { React, useState } from 'react'
import CarouselItem from './CarouselItems';
import CarouselIndicators from './CarouselIndicators';
import './Carousel.scss'

const Carousel = ({ slider }) => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [width, height] = useState();
    const switchIndex = (index) => {
        setCurrentSlide(index);
    }
    return (
        <div className='slider'>
            <div className='phone-carousel'>
                <div className="phone-carousel-inner"
                    style={{ transform: `translateX(${-currentSlide * 100}%)`}}
                >
                    {slider.map((slide, index) => {
                        return (
                            <CarouselItem slide={slide} key={index} />
                        )
                    })}
                </div>
            </div>
            <CarouselIndicators slider={slider} currentIndex={currentSlide} switchIndex={switchIndex} />
        </div>
    )
}

export default Carousel