
import React from 'react'

const CarouselIndicators = ({  slider, currentIndex, switchIndex }) => {
    return (
        <div className='carousel-indicators'>
            {slider.map((_, index) => {
                return (
                    <button
                        className={`carousel-indicators-item${currentIndex === index ? 'active' : ''}`}
                        onClick={() => switchIndex(index)}
                    ></button>
                )
            })}
        </div>
    )
}

export default CarouselIndicators