import React from 'react'
import { FormattedMessage } from 'react-intl';
import Carousel from './slider/Carousel';
import './styles/bussines.scss'
import { SliderCards } from './data';

function BussinesCommunication() {

  return (
    <div className='bussines-meetings'>
      <div className="title">
        <h1 data-aos="fade-up">
          <FormattedMessage id='business-title' defaultMessage="Truly unified business communications" />
        </h1>

        <p data-aos="fade-down">
          <FormattedMessage id='business-text' defaultMessage="Designed to empower teams like yours." />
        </p>
      </div>

      <div className="container">
        <Carousel slider={SliderCards} />
      </div>

    </div>
  )
}

export default BussinesCommunication;