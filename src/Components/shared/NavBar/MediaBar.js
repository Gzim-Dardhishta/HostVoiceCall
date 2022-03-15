import React from 'react';
import {GrLanguage} from 'react-icons/gr';
import {BsFillPhoneFill} from 'react-icons/bs';
import {BsFillTriangleFill} from 'react-icons/bs';
import {FaHandshake} from 'react-icons/fa';
import {SiIcloud} from 'react-icons/si';
import {HiPhone} from 'react-icons/hi';
import {HiSupport} from 'react-icons/hi';
import {BiChevronDown} from 'react-icons/bi';
import SelectLanguage from '../Languages/SelectLanguage';
import { dataLocalStorage } from '../Languages/dataLocalStorage';
import JoinMegamenu from './Megamenus/JoinMegamenu';
import HostMegamenu from './Megamenus/HostMegamenu';

const MediaBar = (props) => {
  return (
    <div className='media-bar'>

        <div className="media">
            <div className="download-app">
                <BsFillPhoneFill/>
                <p>Download App</p>
            </div>
            <div className='partners'>
                <FaHandshake />
                <p>Partners</p>
            </div>
            <div className="cloud">
                <SiIcloud />
                <p>Cloud Communications</p>
            </div>
        </div>

        <div className="spacer"></div>

        <div className='access'>
            <div className="language">
                {/* <GrLanguage /> */}
                <SelectLanguage 
                    setLanguage={props.setLanguage}
                    language={props.language}
                />
                <BiChevronDown/>
                <BsFillTriangleFill className='arrow' />
            </div>

            <div className='contact'>
                <span>Contact: </span>
                <HiPhone />
                <p>+1 415-469-1690</p>
            </div>

            <div className="support">
                <HiSupport/>
                <p>Support</p>
            </div>

            <div className='join_host'>
                <div className="join-menu">
                    <p className='join'>Join <BiChevronDown/></p>
                    <BsFillTriangleFill className='join-arrow' />
                    <JoinMegamenu />
                </div>
                <div className="host-menu">
                    <p className='host'>Host</p>  
                    <BiChevronDown/>  
                    <BsFillTriangleFill className='host-arrow' />
                    <HostMegamenu />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MediaBar;