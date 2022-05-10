import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import Carousel from './ReviewsSlider/Carousel'
import './styles/reviews.scss'
import { ReviewsSliderData } from './data'

const Reviews = () => {
    return (
        <div className='reviews'>
            <div className="phone">
                <div className="logo"></div>
                <div className="text">
                    <FormattedMessage id='message' defaultMessage="The phone system for modern business" />
                </div>
            </div>

            <div className="head">
                <div className="title">
                    <FormattedMessage id='title' defaultMessage="Ready to build better conversations?" />
                </div>
                <div className="text">
                    <FormattedMessage id='text' defaultMessage="HostVoiceCalls runs on the device that you're using right now." />
                </div>
                <div className="demo">
                    <Link to='/'>
                        <FormattedMessage id='demo' defaultMessage="Scheudle a demo" />
                    </Link>
                </div>
            </div>

            <div className="review">
                <div className="review-title">
                    <FormattedMessage id='title' defaultMessage="Reviews from our clients" />
                </div>

                <div className="slider">
                    <Carousel slides={ReviewsSliderData} />
                </div>
            </div>
        </div>
    )
}

export default Reviews