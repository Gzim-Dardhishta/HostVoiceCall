import React from 'react'

function CarouselItem({ slide }) {

    return (
        <div className="bussines-card-container">
            <div className={`business-card ${slide.cls}`} data-aos="zoom-out">
                <div className="icon" style={{ content: `url(${slide.icon})` }}></div>
                <div className="text">{slide.text}</div>
                <div className="link">
                    <p>{slide.link}</p>
                    <span style={{ content: `url(${slide.arrow})` }}></span>
                </div>
            </div>
        </div>
    )
}

export default CarouselItem