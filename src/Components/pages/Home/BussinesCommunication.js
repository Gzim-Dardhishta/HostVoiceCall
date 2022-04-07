import React from 'react'
import { FormattedMessage } from 'react-intl';

import {BussinesContactCards} from './data';
import Cards from './slider/Cards';
import './styles/bussines.scss'

function BussinesCommunication() {
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

        <Cards />

        {/* <div className="cards">
            {BussinesContactCards.map((props) => {
                return(
                    <div className='all-cards'>
                        <div className={`card ${props.cls}`} data-aos="zoom-in">
                            <div className={`icon ${props.iconcls}`} style={{content: `url(${props.icon})`}}></div>
                            <p className='text'>{ props.text }</p>
                            <div className={`link ${props.linkcls}`}>
                                <p>{ props.link }</p>
                                <span style={{content: `url(${props.arrow})`}}></span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div> */}

        
    </div>
  )
}

export default BussinesCommunication;