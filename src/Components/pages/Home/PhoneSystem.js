import React from 'react'
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import './styles/phonesystem.scss'

import { PhoneSystemCarousel } from './data';
import Carousel from './phonesystem-slider/Carousel';


const PhoneSystem = () => {
  return (
    <div className='phone-system blur'>
      <div className="content" data-aos="fade-right">
        <div className="title">
          <FormattedMessage id="phone-title" defaultMessage="Get your cloud-based phone system up and running" />
        </div>
        <p>
          <FormattedMessage id='phone-pharagraph'
            defaultMessage="Easily integrate with the cloud business tools each department relies 
                    on to get the job done and pave the way for more satisfying 
                    customer journeys." />
        </p>

        <div className="link">
          <Link to='/'>
            <FormattedMessage id="phone-link" defaultMessage="Keep the whole company connected" />
            <div className="arrow-icon"></div>
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="phone-image" data-aos="flip-left"></div>
        <div className="circle1">
          <div className="circle2">
            <div className="circle3">
            <div className="video-icon"></div>
            </div>
          </div>
        </div>

        <div className="slider" data-aos="flip-right">
          <Carousel slider={PhoneSystemCarousel} />
        </div>
      </div>
      <div className="phone-image">
        <div className="circle1">
          <div className="circle2">
            <div className="video-icon"></div>
          </div>
        </div>
      </div>

      <div className="big" data-aos="zoom-in-down">
        <div className="circle1">
          <div className="circle2">
            <div className="circle3">
              <div className="circle4"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="medium" data-aos="zoom-in-down" >
        <div className="circle1">
          <div className="circle2">
            <div className="circle3">
              <div className="circle4"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="small" data-aos="zoom-in-down">
        <div className="circle1">
          <div className="circle2">
            <div className="circle3">
              <div className="circle4"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PhoneSystem