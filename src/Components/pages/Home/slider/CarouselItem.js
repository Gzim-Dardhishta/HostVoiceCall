import React from 'react'
// import { SliderCards } from '../data'

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


        // <div>
        //     {SliderCards.map((props) => {
        //         return (
        //             <div className={`carousel-item ${props.cls}`}>
        //                 <div className="icon" style={{ content: `url(${props.icon})` }}></div>
        //                 <div className="text">{props.text}</div>
        //                 <div className="link">
        //                     <p>{props.link}</p>
        //                     <span style={{ content: `url(${props.arrow})` }}></span>
        //                 </div>
        //             </div>
        //         )
        //     })}
        // </div>
        // <div className={`card ${BussinesContactCards.cls}`} data-aos="zoom-in">
        //     <div className={`icon ${BussinesContactCards.iconcls}`} style={{ content: `url(${BussinesContactCards.icon})` }}></div>
        //     <p className='text'>{BussinesContactCards.text}</p>
        //     <div className={`link ${BussinesContactCards.linkcls}`}>
        //         <p>{BussinesContactCards.link}</p>
        //         <span style={{ content: `url(${BussinesContactCards.arrow})` }}></span>
        //     </div>
        // </div>
    )
}

export default CarouselItem