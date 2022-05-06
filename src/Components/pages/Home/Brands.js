import React from 'react'
import { FormattedMessage } from 'react-intl'
import './styles/brands.scss'
import { BrandsData } from './data'
import { Link } from 'react-router-dom';
import rightarrow from '../../../assets/Home/brands/arrow1.svg'
import leftarrow from '../../../assets/Home/brands/arrow2.svg'

const Brands = () => {
    return (
        <div className='brands'>
            <div className="description" data-aos="fade-right">
                <div className="question">
                    <FormattedMessage id='question' defaultMessage="See why brands big & small love HostVoiceCalls" />
                </div>
                <div className="answer">
                    <FormattedMessage id='answer' defaultMessage="Get the right type of help at just the right moment. HostVoiceCall's AI instantly transcribes meetings, takes notes on action items, analyzes caller sentiment, and even coaches your agents in real-time." />
                </div>

                <div className="meet-costumer">
                    <Link to='/'>
                        <FormattedMessage id='meet' defaultMessage="Meet Costumer" />
                    </Link>
                </div>
            </div>

            <div className="happy-costumer">

                <div className="numbers">
                    <div className="pages">
                        <FormattedMessage id='pages' defaultMessage="01/02" />
                    </div>
                    <div className="arrows">
                        <div className="right-arrow" style={{ content: `url(${leftarrow})` }}></div>
                        <div className="left-arrow" style={{ content: `url(${rightarrow})` }}></div>
                    </div>
                </div>
                <div className="costumers">
                    {BrandsData.map((props) => {
                        return ( 
                            <div className='costumer' data-aos="flip-left">
                                <div className="image" style={{ content: `url(${props.photo})` }}></div>
                                <div className="brand" style={{ content: `url(${props.brand})` }}></div>
                                <div className="text">{props.message}</div>
                                <div className="author">{props.author}</div>
                                <div className="position">{props.position}</div>
                                <Link to='/'>
                                    <div className="link">{props.link}</div>
                                    <div className="arrow" style={{ content: `url(${props.arrow})` }}></div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Brands