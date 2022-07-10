import React from 'react';
import { GrLanguage } from 'react-icons/gr';
import { BsFillPhoneFill } from 'react-icons/bs';
import { BsFillTriangleFill } from 'react-icons/bs';
import { FaHandshake } from 'react-icons/fa';
import { SiIcloud } from 'react-icons/si';
import { HiPhone } from 'react-icons/hi';
import { HiSupport } from 'react-icons/hi';
import { BiChevronDown } from 'react-icons/bi';
import SelectLanguage from '../Languages/SelectLanguage';
import { dataLocalStorage } from '../Languages/dataLocalStorage';
import JoinMegamenu from './Megamenus/JoinMegamenu';
import HostMegamenu from './Megamenus/HostMegamenu';
import { Link } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
import { FormattedMessage } from 'react-intl';

const MediaBar = (props) => {
    return (
        <div className='media-bar'>

            <div className="media">
                <Link to='/' className="download-app">
                    <BsFillPhoneFill className='icon' />
                    <p>
                        <FormattedMessage id='getapp' defaultMessage="Download App" />
                    </p>
                </Link>
                <Link to='/' className='partners'>
                    <FaHandshake className='icon' />
                    <p>
                        <FormattedMessage id='partners' defaultMessage="Partners" />
                    </p>
                </Link>
                <Link to='/' className="cloud">
                    <SiIcloud className='icon' />
                    <p>
                        <FormattedMessage id='cloud' defaultMessage="Cloud Communication" />
                    </p>
                </Link>
            </div>

            <div className='access'>
                <div className="language">
                    <SelectLanguage
                        setLanguage={props.setLanguage}
                        language={props.language}
                    />
                    <BiChevronDown className='icon' />
                    <BsFillTriangleFill className='arrow' />
                </div>

                <div className='contact'>
                    <p className='c'>
                        <FormattedMessage id='contact' defaultMessage="Contact: &nbsp;" />
                    </p>
                    <HiPhone className='icon' />
                    <p>+1 415-469-1690</p>
                </div>

                <Link to='/' className="support">
                    <HiSupport className='icon' />
                    <p>
                        <FormattedMessage id='support' defaultMessage="Support" />
                    </p>
                </Link>

                <div className='join_host'>
                    <div className="join-menu">
                        <p className='join'>
                            <FormattedMessage id='join' defaultMessage="Join" />
                            <BiChevronDown />
                        </p>
                        <BsFillTriangleFill className='join-arrow' />
                        <JoinMegamenu />
                    </div>
                    <div className="host-menu">
                        <p className='host'>
                            <FormattedMessage id='host' defaultMessage="Host" />
                        </p>
                        <BiChevronDown className='icon' />
                        <BsFillTriangleFill className='host-arrow' />
                        <HostMegamenu />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediaBar;