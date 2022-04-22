
import React from 'react'

const CarouselIndicators = ({ currentIndex, switchIndex }) => {
    return (
        <div className='carousel-indicators'>

            {Array(4)
                .fill()
                .map((_, index) => {
                    return (
                        <button
                            className={`carousel-indicators-item${currentIndex === index ? 'active' : ''}`}
                            onClick={() => switchIndex(index)}
                        ></button>
                    )
                })
            }
        </div>
    )
}

export default CarouselIndicators