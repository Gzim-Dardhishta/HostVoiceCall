import React from 'react'

const CarouselIndicators = ({ currentIndex, switchIndex }) => {
    return (
        <div className='review-carousel-indicators'>

            {Array(5)
                .fill()
                .map((_, index) => {
                    return (
                        <button
                            className={`review-carousel-indicator${currentIndex === index ? 'active' : ''}`}
                            onClick={() => switchIndex(index)}
                        ></button>
                    )
                })
            }
        </div>
    )
}

export default CarouselIndicators