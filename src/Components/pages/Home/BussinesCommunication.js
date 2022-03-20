import React from 'react'
import { FormattedMessage } from 'react-intl';

import {BussinesContactCards} from './data';
import './styles/bussines.scss'

function BussinesCommunication() {
  return (
    <div className='bussines-meetings'>
        <div className="title">
            <h1>
                <FormattedMessage id='title' defaultMessage="Truly unified business communications" />
            </h1>

            <p>
                <FormattedMessage id='text' defaultMessage="Designed to empower teams like yours." />
            </p>
        </div>

        <div className="cards">
            {BussinesContactCards.map((props) => {
                return(
                    <div className='all-cards'>
                        <div className={`card ${props.cls}`}>
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
        </div>

        <div className="slides">
            <div className="first"></div>
            <div className="second"></div>
            <div className="third"></div>
            <div className="fourth"></div>
        </div>
    </div>
  )
}

export default BussinesCommunication