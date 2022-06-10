import React from 'react'
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { CloudBasedData } from './data';
import './styles/cloudbased.scss'

const CloudBasedPhoneSystem = () => {
  return (
    <div className='cloud-based'>
        <div className="title">
            <h6 data-aos="zoom-in">
                <FormattedMessage id='cloudbase-title' defaultMessage="Get your cloud-based phone system up and running" />
            </h6> 
        </div>

        <div className="cards">
            {CloudBasedData.map((props) => {
                return (
                    <div className='card' data-aos="flip-right">
                        <div className="head">
                            <div className="number">{props.number}</div>
                            <div className="tool" style={{ content: `url(${props.tool})` }}></div>
                        </div>
                        <div className="title">{ props.title }</div>
                        <div className="text">{ props.text }</div>
                        <Link to='/' className='link'>
                            <div>{ props.link }</div>
                            <div className="arrow" style={{ content: `url(${props.arrow})` }}></div>
                        </Link> 
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default CloudBasedPhoneSystem