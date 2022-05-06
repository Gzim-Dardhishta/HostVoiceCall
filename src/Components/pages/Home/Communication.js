import React from 'react'
import { FormattedMessage } from 'react-intl'
import { CommunicationData } from './data'
import './styles/communication.scss'

const Communication = () => {
    return (
        <div className='communication'>
            <div className="title">
                <div className="business" data-aos="fade-right">
                    <FormattedMessage id='business' defaultMessage="BUSINESS COMMUNICATION" />
                </div>
                <div className="remote" data-aos="fade-right">
                    <FormattedMessage id='title' defaultMessage="Connect everyone, work anywhere" />
                </div>
            </div>

            <div className="inner">
                <div className="photo" data-aos="flip-up"></div>

                <div className="cards">
                    {CommunicationData.map((props) => {
                        return (
                            <div className='card' data-aos="zoom-in">
                                <div className="border">
                                    <div className="icon" style={{ content: `url(${props.icon})` }}></div>
                                </div>
                                <div className="title">{props.title}</div>
                                <div className="text">{props.text}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Communication