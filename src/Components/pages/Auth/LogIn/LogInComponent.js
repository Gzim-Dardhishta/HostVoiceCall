import React from 'react'
import { FormattedMessage } from 'react-intl';
import LogInForm from './LogInForm'
import './login.scss'
import { appData } from './data';
import logo from "../../../../assets/LogIn/logo.svg"

const LogInComponent = () => {
  return (
    <div className='login-component'>
      <LogInForm />
      <div className="video-meeting" data-aos="fade-right">
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


          <div className="app-card" data-aos="fade-up">
            <div className="host-app">
              <div className="logo-container">
                <div className="logo" style={{ content: `url(${logo})` }}></div>
                <h6>
                  <FormattedMessage id='app-name' defaultMessage="HostVoiceCall" />
                </h6>
              </div>

              <div className="description-text">
                <FormattedMessage id='card-txt'
                  defaultMessage="Transform customer experiences with the IT-approved cloud call center solution for sales and support teams." />
              </div>

              <div className="icons">
                {appData.map((props) => {
                  return (
                    <div className="border">
                      <div className="icon" style={{ content: `url(${props.icon})` }}></div>
                    </div>
                  )
                })}
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
    </div>
  )
}

export default LogInComponent