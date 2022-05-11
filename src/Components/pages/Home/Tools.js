import React from 'react'
import { FormattedMessage } from 'react-intl'
import { ToolsData } from './data'
import arrow from '../../../assets/Home/tools/arrow.svg'
import './styles/tools.scss'
import { Link } from 'react-router-dom';

const Tools = () => {
  return (
    <div className='tools'>
        <div className="title" data-aos="fade-down">
            <FormattedMessage id='title' defaultMessage="Connected to the tools you love" />
        </div>

        <div className="tools-used">
            {ToolsData.map((props) => {
                return (
                    <div className='tool' data-aos="flip-down">
                        <div className="logo" style={{ content: `url(${props.logo})` }}></div>
                        <div className="name">{ props.company }</div>
                    </div>
                )
            })}
        </div>

        <Link to='/' className="integrations">
            <FormattedMessage id='link' defaultMessage="See all intgrations"/>
            <div style={{ content: `url(${arrow})` }}></div>
        </Link>
    </div>
  )
}

export default Tools