import React from 'react'

const CarouselItems = ({ slide }) => {
    return (
        <div className='phone-carousel-item'>
            <div className="card">
                <div className="icon" style={{ content: `url(${slide.icon})` }}></div>
                <div className="text">"{slide.text}"</div>
                <div className="author">{slide.author}</div>
            </div>
        </div>
    )
}

export default CarouselItems