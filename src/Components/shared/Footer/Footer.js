import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom';
import arrow from '../../../assets/shared/footer/arrow1.svg'
import logo from '../../../assets/shared/footer/logo.svg'
import { FooterData, FooterSocialLinks } from './data';
import SelectLanguage from '../Languages/SelectLanguage';
import { BiChevronDown } from 'react-icons/bi';
import './footer.scss'

const Footer = (props) => {

  const [email, setEmail] = useState('');


  return (
    <div className='footer'>
      <div className="top-footer">
        <div className="top-footer-title">
          <FormattedMessage id='title' defaultMessage="Try HostVoiceCall today" />
        </div>
        <div className="text">
          <FormattedMessage id='text1' defaultMessage="No extra hardware. No nonsense. Just on bueatiful workspace" />
        </div>
        <div className="trial">
          <div className="start-trial">
            <Link to='/'>
              <FormattedMessage id='link' defaultMessage="Start a free trial" />
            </Link>
          </div>
          <div className="get-demo">
            <Link to='/' className="demo-link">
              <FormattedMessage id='get-demo' defaultMessage="Get a Demo" />
              <div className="arrow" style={{ content: `url(${arrow})` }}></div>
            </Link>
            <div className="line"></div>
          </div>
        </div>
      </div>

      <div className="main-footer">
        <div className="main-footer-head">
          <div className="footer-logo">
            <div className="footer-logo-icon" style={{ content: `url(${logo})` }}></div>
            <div className="footer-logo-name">HostVoiceCall</div>
          </div>

          <div className="download-app">
            <div className='get-app-text'>
              <FormattedMessage id='get-app' defaultMessage="Get HostVoiceCall App in:" />
            </div>
            <Link to='/' className="play-store">
              <div className="play-store-icon"></div>
              <div className="block">
                <div className="get">
                  <FormattedMessage id='get-location' defaultMessage="Get it on" />
                </div>
                <div className="get-app-name">
                  <FormattedMessage id='get-app-plays' defaultMessage="Play Store" />
                </div>
              </div>
            </Link>
            <Link to='/' className="app-store">
              <div className="app-store-icon"></div>
              <div className="block">
                <div className="get">
                  <FormattedMessage id='get-location' defaultMessage="Get it on" />
                </div>
                <div className="get-app-name">
                  <FormattedMessage id='get-app-apps' defaultMessage="App Store" />
                </div>
              </div>
            </Link>
          </div>

          <div className="footer-social-links">
            {FooterSocialLinks.map((props) => {
              return (
                <div className="social-links">
                  <Link to={props.to}>
                    <div className="social-link-icon" style={{ content: `url(${props.icon})` }}></div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>

        <div className="main-footer-links">
          {FooterData.map((props) => {
            return (
              <div className="footer-links-list">
                <h6>{props.category}</h6>
                <div className="links">
                  {props.links.map((l) => {
                    return (
                      <Link to={l.to} className="links-item">
                        {l.link}
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        <div className="footer-subscribe">
          <div className="subrcribe-text">
            <FormattedMessage id='sub-text' defaultMessage="Subscribe to our newsletter" />
          </div>
          <div className="footer-email">
            <div className="footer-email-icon"></div>
            <input
              type="email"
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Work Email'
            />
            <div className="button">
              <Link to='/'>Subscribe</Link>
            </div>
          </div>
        </div>

        <div className="main-footer-bottom">
          <div className="copyright">
            <FormattedMessage id='copyright' defaultMessage="Copyright © 2021 HostVoiceCall All rights reserved." />
          </div>
          <div className="policy">
            <div className="forum">
              <FormattedMessage id='forum' defaultMessage="Forums" />
            </div>
            <div className="privacy">
              <FormattedMessage id='privacy-policy' defaultMessage="Privacy Policy" />
            </div>
            <div className="terms">
              <FormattedMessage id='term' defaultMessage="Terms of Use" />
            </div>
            <div className="faq">
              <FormattedMessage id='faq' defaultMessage="FAQs" />
            </div>
          </div>

          <div className="language">
            <SelectLanguage
              setLanguage={props.setLanguage}
              language={props.language}
            />
            <BiChevronDown />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer