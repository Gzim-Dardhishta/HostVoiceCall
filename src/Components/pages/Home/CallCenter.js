import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

import './styles/callcenter.scss'

function CallCenter() {

    const [email, setEmail] = useState('');

    return (
        <div className='call-center'>
            <div className="info" data-aos="fade-right">
                <div className='links'>
                    <small><FormattedMessage id='callcenter-link1' defaultMessage="HostVoiceCall" /></small>
                    <small><FormattedMessage id='callcenter-link2' defaultMessage="Customer Engagement Platform" /></small>
                </div>

                <h1>
                    <FormattedMessage id='callcenter-title' defaultMessage="Call center software for customer centric teams" />
                </h1>

                <p>
                    <FormattedMessage id='description-text' defaultMessage="Transform customer experiences with the IT-approved cloud call center solution for sales and support teams." />
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
                        <Link to='/'>
                            <FormattedMessage id='try-free' defaultMessage="Try for free" />
                        </Link>
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
                <div className="contact-images" data-aos="fade-down">
                    <div className="circle1" data-aos="fade-up">
                        <div className="video" data-aos="zoom-in"></div>
                        <div className="whatsapp" data-aos="zoom-in">
                            <div className="icon" data-aos="zoom-in"></div>
                        </div>
                        <div className="message" data-aos="zoom-in"></div>
                        <div className="phone" data-aos="zoom-in">
                            <div className="icon"></div>
                        </div>
                        <div className="mail" data-aos="zoom-in">
                            <div className="icon"></div>
                        </div>
                        <div className="sim" data-aos="zoom-in"></div>
                        <div className="circle2">
                            <div className="circle3">
                                <div className="circle4">
                                    <div className="circle5">
                                        <div className="profile-image"></div>
                                        <div className="notification" data-aos="zoom-in">3</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="arrows" data-aos="fade-down">
                    <div className="short-arrow" data-aos="fade-down"></div>
                    <div className="long-arrow" data-aos="fade-up"></div>

                    <div className="iphone">
                        <div className="icon"></div>
                    </div>
                    <div className="block">
                        <div className="icon"></div>
                        <FormattedMessage id='block' defaultMessage="Block" />
                    </div>
                    <div className="number">
                        <div className="icon"></div>
                        <FormattedMessage id='call-num' defaultMessage="Call Number" />
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