import React from 'react';
import { NavBarData } from './data';
import './navbar.scss';
import MediaBar from './MediaBar';
import { BsTriangleFill } from 'react-icons/bs'
import { MdKeyboardArrowDown} from 'react-icons/md'
import {FiChevronDown} from 'react-icons/fi';
import './Megamenus/megamenu.scss'


const NavBar = () => {
  return (
    <header>
        <MediaBar />
        <div id="nav-bar">
            <div id='logo'>
                <div className="icon"></div>
                <h4>HostVoiceCalls</h4>
            </div>

            <div className="nav-links">
                {NavBarData.map((props) => {
                    return (
                        <div className={`nav-link ${props.cls}`} key={props.id}>
                            <div to={props.to} className='inner-nav-link'>
                                <p>{props.link}</p>
                                {props.megamenu ? <FiChevronDown className='arrow1'/> : null }
                                {/* {props.arrow} */}
                            </div>

                            {props.megamenu ? <div className='megamenu-arrow'><BsTriangleFill /></div> : null }
                            <div className='line'></div>
                            {props.megamenu}
                        </div>
                    )
                })}
            </div>

            <div className="auth">
                <div to='/LogIn' className='login-link'>
                    <div>Log In</div>
                </div>
                <div to='/LogIn' className='signup-link'>
                    <div>Sign Up</div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavBar