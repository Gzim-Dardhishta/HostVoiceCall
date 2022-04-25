
import React from 'react'

const CarouselIndicators = ({ currentIndex, switchIndex }) => {
    return (
        <div className='carousel-indicators'>

            {Array(5)
                .fill()
                .map((_, index) => {
                    return (
                        <button
                            className={`carousel-indicator${currentIndex === index ? 'active' : ''}`}
                            onClick={() => switchIndex(index)}
                        ></button>
                    )
                })
            }
        </div>
    )
}

export default CarouselIndicators