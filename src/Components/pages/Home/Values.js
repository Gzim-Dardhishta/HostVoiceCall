import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import './styles/values.scss'
import { ValuesData } from './data'
import { ReactComponent as Headphones} from '../../../assets/Home/values/headphones.svg'
import { ReactComponent as Shop } from '../../../assets/Home/values/shop.svg'
import { ReactComponent as Ai } from '../../../assets/Home/values/light.svg'

const Values = () => {
    return (
        <div className='values'>
            <h1 className='title'>
                <FormattedMessage id='value-title' defaultMessage="Bring value to voice" />
            </h1>

            <div className="content">
                <div className="support" data-aos="fade-right">
                    <h1>
                        <FormattedMessage id='value-support-title' defaultMessage="For Smoother Support" />
                    </h1>
                    <div className="services">
                        <p className='text'>
                            <FormattedMessage id='services-text1'
                                defaultMessage="Make customer experience a competitive advantage with cloud 
                                        call center IVR menus, skill-based routing, live call monitoring, and more." />
                        </p>
                        <div className="services-offer">
                            <div className="service">
                                <div className="contact-center">
                                    <Headphones className='c'/>                                  
                                </div>
                                <FormattedMessage id='service-contact-center' defaultMessage="Contact Center" />
                            </div>
                            <div className="service">
                                <div className="shop">
                                    <Shop className='s'/>
                                </div>
                                <FormattedMessage id='sell' defaultMessage="Sell" />
                            </div>
                            <div className="service">
                                <div className="AI">
                                    <Ai className='a'/>
                                </div>
                                <FormattedMessage id='ai' defaultMessage="AI-Powered" />
                            </div>
                        </div>
                        <p className='text'>
                            <FormattedMessage id='services-text2'
                                defaultMessage="Turn conversations into conversions with real-time coaching and AI-enabled agent tools." />
                        </p>

                        <div className="links">
                            <Link to='/' className="more">
                                <p>
                                    <FormattedMessage id='learn-more' defaultMessage="Learn more" />
                                </p>
                                <div className="arrow"></div>
                            </Link>
                            <Link to='/' className="video">
                                <div className="border">
                                    <div className="icon"></div>
                                </div>
                                <FormattedMessage id='see-video' defaultMessage="See video" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="communication">
                    <div className="phone-call" data-aos="fade-down">
                        <div className="info">
                            <div className="call">
                                <FormattedMessage id='phone-call' defaultMessage="Incoming Call..." />
                            </div>
                            <div className="state-support">
                                <div className="flag-icon"></div>
                                <FormattedMessage id='costumer-support' defaultMessage="Costumer Support" />
                            </div>

                            <div className="circle1">
                                <div className="circle2">
                                    <div className="image"></div>
                                </div>
                            </div>

                            <div className="name">
                                <FormattedMessage id='name' defaultMessage="Olivia David" />
                            </div>
                            <div className="number">
                                <FormattedMessage id='number' defaultMessage="+1 415-934-8736" />
                            </div>
                            <div className="description">
                                <FormattedMessage id='description' defaultMessage="Outdoor Adventures" />
                            </div>

                            <div className="buttons">
                                <div className="reject">
                                    <div className="inner">
                                        <div className="icon"></div>
                                    </div>
                                    <div className="response">
                                        <FormattedMessage id='reject' defaultMessage="Reject" />
                                    </div>
                                </div>
                                <div className="answer">
                                    <div className="inner">
                                        <div className="icon"></div>
                                    </div>
                                    <div className="response">
                                        <FormattedMessage id='answer' defaultMessage="Answer" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="caller-insight">
                            <div className="title">
                                <FormattedMessage id='caller-insight' defaultMessage="Caller Insight" />
                            </div>
                            <div className="contact-page">
                                <p>
                                    <FormattedMessage id='contact-page' defaultMessage="Contact Page" />
                                </p>
                                <div className="arrow"></div>
                            </div>
                            <div className="contact-details">
                                <p>
                                    <FormattedMessage id='contact-details' defaultMessage="Contact Details" />
                                </p>
                                <div className="arrow"></div>
                            </div>

                            <div className="mail">
                                <div className="address">
                                    <FormattedMessage id='email-address' defaultMessage="Email address" />
                                </div>
                                <div className="email">
                                    <FormattedMessage id='email' defaultMessage="oliviaD@gmail.com" />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="chat">
                        <div className="search" data-aos="fade-right">
                            <div className="border">
                                <p>
                                    <FormattedMessage id='discover-call' defaultMessage="Discover Call" />
                                </p>
                                <div className="x"></div>
                            </div>
                            <div className="border">
                                <p>
                                    <FormattedMessage id='costumer' defaultMessage="Costumer" />
                                </p>
                                <div className="x"></div>
                            </div>

                            <div className="line"></div>
                        </div>
                        <div className="friend-chat" data-aos="flip-right">
                            <div className="audio-play">
                                <div className="play">
                                    <div className="border">
                                        <div className="icon"></div>
                                    </div>
                                    <div className="audio-length">
                                        <div className="circle"></div>
                                        <div className="line"></div>
                                        <div className="time">
                                            <FormattedMessage id='length' defaultMessage="00:33" />
                                        </div>
                                    </div>
                                </div>
                                <div className="add-more">
                                    <div className="add-icon"></div>
                                    <p>
                                        <FormattedMessage id='assigned' defaultMessage="Assigned to Ravi Patel" />
                                    </p>
                                </div>
                            </div>

                            <div className="messages">
                                <div className="time">
                                    <FormattedMessage id='day' defaultMessage="Today" />
                                </div>
                                <div className="message">
                                    <div className="image"></div>
                                    <div className="border">
                                        <div className="text">
                                            <FormattedMessage id='message' defaultMessage="Offer seamless support with built-in AI 
                                                                                   that works harder for you and your customers." />
                                        </div>
                                        <div className="checks">
                                            <div className="check1"></div>
                                            <div className="check2"></div>
                                        </div>
                                    </div>
                                    <div className="day-tme">
                                        <FormattedMessage id='day-time' defaultMessage="12:45 PM" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Values