import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { FormattedMessage } from 'react-intl';

const CarouselItems = ({ slide }) => {
    return (
        <div className="review-card" data-aos="flip-left">
            <div className="head">
                <div className="border">
                    <div className="photo" style={{ content: `url(${slide.photo})` }}></div>
                </div>
                <div className="name">{slide.name}</div>
            </div>
            <div className="text">{slide.text}</div>
            <div className="ratings">
                <div className="stars">
                    <AiFillStar className='star purple' />
                    <AiFillStar className='star purple' />
                    <AiFillStar className='star purple' />
                    <AiFillStar className='star gray' />
                    <AiFillStar className='star gray' />
                </div>
                <div className="number">
                    <FormattedMessage id='num' defaultMessage="3.0" />
                </div>
            </div>
        </div>
    )
}

export default CarouselItems