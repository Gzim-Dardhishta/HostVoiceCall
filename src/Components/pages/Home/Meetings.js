import React from 'react'
import { FormattedMessage } from 'react-intl';
import { MeetingsData } from './data';
import './styles/meetings.scss';

const Meetings = () => {
    return (
        <div className='meetings'>
            <div className="meeting-type">
                <div className="video-meeting">
                    <div className="bg-image">
                        <div className="photo1">
                            <div className="photo"></div>
                        </div>
                        <div className="photo2">
                            <div className="photo"></div>
                        </div>
                        <div className="photo3">
                            <div className="photo"></div>
                        </div>

                        <div className="content">
                            <div className="signal">
                                <div className="icon"></div>
                            </div>
                            <p className='name'>
                                <FormattedMessage id='name' defaultMessage="Johanna Harris" />
                            </p>
                            <p className="company">
                                <FormattedMessage id='company' defaultMessage="HostVoiceCall, Inc." />
                            </p>
                            <p className="location">
                                <FormattedMessage id='location' defaultMessage="San Francisco, CA  11:00 AM PT" />
                            </p>
                            <div className="tools">
                                <div className="microphone"></div>
                                <div className="dots">
                                    <div className="dot"></div>
                                </div>
                            </div>
                            <div className="play">
                                <div className="recording">
                                    <div className="icon"></div>
                                    <FormattedMessage id='recc' defaultMessage="Reccording" />
                                </div>
                                <div className="lock">
                                    <div className="icon"></div>
                                    <FormattedMessage id='lock' defaultMessage="Call locked" />
                                </div>
                                <div className="vi-enable">
                                    <FormattedMessage id='enable' defaultMessage="Vi Enable" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="buttons">
                        <div className="left-buttons">
                            <div className="info">
                                <div className="icon"></div>
                            </div>
                            <div className="message">
                                <div className="icon"></div>
                            </div>
                            <div className="meet">
                                <div className="icon"></div>
                            </div>
                            <div className="radio">
                                <div className="icon"></div>
                            </div>
                            <div className="help">
                                <div className="icon"></div>
                            </div>
                        </div>

                        <div className="middle-buttons">
                            <div className="microphone">
                                <div className="icon"></div>
                            </div>
                            <div className="video">
                                <div className="icon"></div>
                            </div>
                            <div className="stop">
                                <div className="icon"></div>
                            </div>
                            <div className="screen">
                                <div className="icon"></div>
                            </div>
                            <div className="headphones">
                                <div className="icon"></div>
                            </div>
                        </div>

                        <div className="right-buttons">
                            <div className="emoji">
                                <div className="icon"></div>
                            </div>
                            <div className="lines">
                                <div className="icon"></div>
                            </div>
                            <div className="pen">
                                <div className="icon"></div>
                            </div>
                            <div className="check">
                                <div className="icon"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="phone-meeting">
                    <div className="info">
                        <div className="call">
                            <FormattedMessage id='call' defaultMessage="Incoming Call..." />
                        </div>
                        <div className="support">
                            <div className="flag-icon"></div>
                            <FormattedMessage id='costumer' defaultMessage="Costumer Support" />
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
                                    <FormattedMessage id='response' defaultMessage="Reject" />
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
                </div>
            </div>

            <div className="about-meetings">
                {MeetingsData.map((props) => {
                    return (
                        <div className='card'>
                            <div className="border">
                                <div className={`icon ${props.cls}`} style={{ content: `url(${props.icon})` }}></div>
                            </div>
                            <div className="block">
                                <div className="title">{props.title}</div>
                                <div className="text">{props.text}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Meetings