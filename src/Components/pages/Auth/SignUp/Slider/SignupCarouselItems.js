import React from 'react'
import { Link } from 'react-router-dom'

const SignupCarouselItems = ({ slide }) => {
    return (
        <div className={`signup-card ${slide.cls}`} data-aos="zoom-out">
            <div className="icon" style={{ content: `url(${slide.icon})` }}></div>
            <div className="text">{slide.text}</div>
            <Link to='/' className="link">
                <p>{slide.link}</p>
                <span style={{ content: `url(${slide.arrow})` }}></span>
            </Link>
        </div>
    )
}

export default SignupCarouselItems