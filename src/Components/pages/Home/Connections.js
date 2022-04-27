import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import { ConnectionsData } from './data'
import './styles/connections.scss'

function Connections() {
  return (
    <div className='connections'>
      <div className="info" data-aos="zoom-in-up">
        <div className="title">
          <div>
            <FormattedMessage id='title' defaultMessage="From first interaction to lasting connection" />
          </div>
        </div>

        <div className="description">
          <div className="first-paragraph">
            <div className="phone-icon"></div>
            <div className="dot"></div>
            <div className="background"></div>

            <p className='text'>
              <FormattedMessage id='paragraph'
                defaultMessage="Strengthen your customer relationships by uniting communications across 
                        your entire business, from marketing and sales to customer service and 
                        operations.
                        " />
            </p>
          </div>

          <div className="second-paragraph">
            <div className="message-icon"></div>
            <div className="dot"></div>
            <div className="background"></div>

            <div>
              <FormattedMessage id='paragraph'
                defaultMessage="Personalize every step of the customer journey with solutions like intelligent 
                chatbots, custom account notifications, a completely programmable cloud-
                based call center, and more" />
            </div>
          </div>

          <div className="payment">
            <div className="trial">
              <div className="get-started">
                <Link to='/'>Get started now</Link>
              </div>
              <div className="free-trial">
                <Link to='/'>Free 14 day trial</Link>
              </div>
            </div>

            <p className='credit-card'>
              <FormattedMessage id='credit' defaultMessage="No credit card required*" />
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="images">
          <div className="first-arrow"></div>
          <div className="second-arrow"></div>
          <div className="third-arrow"></div>
          <div className="fourth-arrow"></div>
          <div className="fifth-arrow"></div>
          <div className="sixth-arrow"></div>
          <div className="seventh-arrow"></div>
          <div className="eighth-arrow"></div>
          <div className="ninth-arrow"></div>

          <div className="border1" data-aos="zoom-in">
            <div className="first-photo"></div>
          </div>
          <div className="border2" data-aos="zoom-in">
            <div className="second-photo"></div>
          </div>
          <div className="border3" data-aos="zoom-in">
            <div className="third-photo"></div>
          </div>
          <div className="border4" data-aos="zoom-in">
            <div className="fourth-photo"></div>
          </div>
          <div className="border5" data-aos="zoom-in">
            <div className="fifth-photo"></div>
          </div>
        </div>

        <div className="connection-type">

          {ConnectionsData.map((props) => {
            return (
              <div>
                <div className="text">{props.text}</div>
                {props.icons.map((i) => {
                  return (
                    <div className="icons">
                      <div className="icon" style={{ content: `url(${i.icon})` }}></div>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Connections