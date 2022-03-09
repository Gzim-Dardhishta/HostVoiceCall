import React from 'react';
import { NavBarData } from './data';
import './navbar.scss';
import MediaBar from './MediaBar';


const NavBar = () => {
  return (
    <>
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
                                {props.link}
                            </div>

                            <div className='line'></div>
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
    </>
  )
}

export default NavBar