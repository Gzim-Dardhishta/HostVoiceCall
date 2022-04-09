import React from 'react'
import { FormattedMessage } from 'react-intl';

import { BussinesContactCards } from './data';
import Carousel from './slider/Carousel';
import './styles/bussines.scss'

function BussinesCommunication(props) {
  return (
    <div className='bussines-meetings'>
      <div className="title">
        <h1 data-aos="fade-right">
          <FormattedMessage id='title' defaultMessage="Truly unified business communications" />
        </h1>

        <p data-aos="fade-left">
          <FormattedMessage id='text' defaultMessage="Designed to empower teams like yours." />
        </p>
      </div>

      <div className="container">
        <Carousel BussinesContactCards={BussinesContactCards} />

        <div className="lines">
          <div className="line line1"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

    </div>
  )
}

export default BussinesCommunication;