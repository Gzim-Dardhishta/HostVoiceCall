import React from 'react'

function CarouselItem({ slide }) {

    return (

        <div className={`carousel-item ${slide.cls}`}>
            <div className="icon" style={{ content: `url(${slide.icon})` }}></div>
            <div className="text">{slide.text}</div>
            <div className="link">
                <p>{slide.link}</p>
                <span style={{ content: `url(${slide.arrow})`}}></span>
            </div>
        </div>
    )
}

export default CarouselItem