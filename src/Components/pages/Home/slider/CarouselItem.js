import React from 'react'

function CarouselItem({ BussinesContactCards }) {
    return (
        <div className={`card ${BussinesContactCards.cls}`} data-aos="zoom-in">
            <div className={`icon ${BussinesContactCards.iconcls}`} style={{ content: `url(${BussinesContactCards.icon})` }}></div>
            <p className='text'>{BussinesContactCards.text}</p>
            <div className={`link ${BussinesContactCards.linkcls}`}>
                <p>{BussinesContactCards.link}</p>
                <span style={{ content: `url(${BussinesContactCards.arrow})` }}></span>
            </div>
        </div>
    )
}

export default CarouselItem