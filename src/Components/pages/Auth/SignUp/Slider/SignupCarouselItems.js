import React from 'react'
import { Link } from 'react-router-dom'

const SignupCarouselItems = ({ s }) => {
    return (
        <div className={`signup-card `} data-aos="zoom-out">
            <div className="icon-container">
                <div className="icon" style={{ content: `url(${s.icon})` }}></div>
            </div>
            <div className="text">{s.text}</div>
            <Link to='/' className="link">
                <p>{s.link}</p>
                <span style={{ content: `url(${s.arrow})` }}></span>
            </Link>
        </div>
    )
}

export default SignupCarouselItems