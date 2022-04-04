import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

import './styles/callcenter.scss'

function CallCenter() {

    const [email, setEmail] = useState('');

    return (
        <div className='call-center'>
            <div className="info">
                <div className='links'>
                    <small><FormattedMessage id='callcenter-links' defaultMessage="HostVoiceCalls" /></small>
                    <small><FormattedMessage id='callcenter-links' defaultMessage="Costumer Engagment Platform" /></small>
                </div>

                <h1>
                    <FormattedMessage id='callcenter-title' defaultMessage="Call center software for customer centric teams" />
                </h1>

                <p>
                    <FormattedMessage id='description-text' defaultMessage="Transform customers experiences with the IT-approved cloud call center solution for sales and support teams." />
                </p>

                <div className="email">
                    <div className="email-icon"></div>
                    <input
                        type="email"
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Work Email'
                    />
                    <div className="button">
                        <Link to='/'>Try for free</Link>
                    </div>
                </div>

                <div className="social-links">
                    <div>
                        <FormattedMessage id='trusted-by-links' defaultMessage="Trusted by:" />
                    </div>
                    <Link to='/'><div className="cloud"></div></Link>
                    <Link to='/'><div className="play-store"></div></Link>
                    <Link to='/'><div className="apple"></div></Link>
                    <Link to='/'><div className="youtube"></div></Link>
                    <Link to='/'><div className="facebook"></div></Link>
                </div>
            </div>

            <div className="images">
                <div className="contact-images">
                    <div className="circle1">
                        <div className="video"></div>
                        <div className="whatsapp">
                            <div className="icon"></div>
                        </div>
                        <div className="message"></div>
                        <div className="phone">
                            <div className="icon"></div>
                        </div>
                        <div className="mail">
                            <div className="icon"></div>
                        </div>
                        <div className="sim"></div>
                        <div className="circle2">
                            <div className="circle3">
                                <div className="circle4">
                                    <div className="circle5">
                                        <div className="profile-image"></div>
                                        <div className="notification">3</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="arrows">
                    <div className="short-arrow"></div>
                    <div className="long-arrow">
                    </div>

                    <div className="iphone">
                        <div className="icon"></div>
                    </div>
                    <div className="block">
                        <div className="icon"></div>
                        <span>Block</span>
                    </div>
                    <div className="number">
                        <div className="icon"></div>
                        <span>Call Number</span>
                    </div>
                    <div className="host">
                        <div className="icon"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallCenter