import React from 'react'

import { BussinesContactCards } from '../data'
import Carousel from 'react-elastic-carousel';
import Item from 'react-elastic-carousel';


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
]
function Cards() {

    const carouselRef = React.useRef(null);
    const onNextStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
            carouselRef.current.goTo(0);
        }
    };
    const onPrevStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
            carouselRef.current.goTo('single-slide'.length);
        }
    };
    return (
        <div>
            <Carousel className='slider'
                breakPoints={breakPoints}
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                disableArrowsOnEnd={false}
            >
                <div className="cards">
                    {BussinesContactCards.map((props) => {
                        return (
                            <div className={`card ${props.cls}`} data-aos="zoom-in">
                                <div className={`icon ${props.iconcls}`} style={{ content: `url(${props.icon})` }}></div>
                                <p className='text'>{props.text}</p>
                                <div className={`link ${props.linkcls}`}>
                                    <p>{props.link}</p>
                                    <span style={{ content: `url(${props.arrow})` }}></span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Carousel>
        </div>
    )
}

export default Cards