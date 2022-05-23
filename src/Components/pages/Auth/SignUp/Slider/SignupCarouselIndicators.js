import React from 'react'
import { SignupSlider } from '../data'

const SignupCArouselIndicators = ({ currentIndex, switchIndex }) => {
    return (
        <div className='carousel-indicators'>
            {SignupSlider.map((_, index) => {
                return (
                    <button
                        className={`carousel-indicator${currentIndex === index ? 'active' : ''}`}
                        onClick={() => switchIndex(index)}
                    ></button>
                )
            })}
        </div>
    )
}

export default SignupCArouselIndicators