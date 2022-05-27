import React from 'react'
import { FormattedMessage } from 'react-intl'
import { SignupSlider } from './data'
import './signup.scss'
import SignUpForm from './SignUpForm'
import SignUpCarousel from './Slider/SignUpCarousel'

const SignUpComponent = () => {
  return (
    <div className='signup-component'>
      <SignUpForm />

      <div className="image">
        <div className="inner-content">
          <div className="white-logo">
            <div className="white-logo-icon"></div>
            <h6 className="white-logo-name">
              <FormattedMessage id='name' defaultMessage="HostVoiceCall" />
            </h6>
          </div>
          <div className="help-text">
            <FormattedMessage id='text'
              defaultMessage="Get the right type of help at just the right moment. HostVoiceCall's AI instantly transcribes meetings,
               takes notes on action items, analyzes caller sentiment, and even coaches your agents in real-time" />
          </div>

          <div className="signup-slider-container">
            <SignUpCarousel slider={SignupSlider} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpComponent