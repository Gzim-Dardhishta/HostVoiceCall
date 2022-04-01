import React, {useState, useEffect} from 'react';
import { NavBarData } from './data';
import './navbar.scss';
import MediaBar from './MediaBar';
import { BsTriangleFill } from 'react-icons/bs'
import { MdKeyboardArrowDown} from 'react-icons/md'
import {FiChevronDown} from 'react-icons/fi';
import './Megamenus/megamenu.scss'
import MobileNav from '../MobileNav/MobileNav';
import clsx from 'clsx'
import { Link } from 'react-router-dom'


const NavBar = (props) => {

    const [isSticky, setIsSticky] = useState(false);
   
    useEffect(() => {
    const nav = document.querySelector(".navbar");
    const navHeight = nav.scrollHeight;

    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      setIsSticky(scrollHeight > 20 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    }, []);


  return (
    <header>
        <MediaBar />
        <div id="nav-bar" className={clsx(`navbar ${props.styles}`, isSticky ? "nav__sticky" : "")}>
            <div id='logo'>
                <div className="icon"></div>
                <h4>HostVoiceCalls</h4>
            </div>

            <div className="nav-links">
                {NavBarData.map((props) => {
                    return (
                        <div className={`nav-link ${props.cls}`} key={props.id}>
                            <Link to={props.to} className='inner-nav-link'>
                                <p>{props.link}</p>
                                {props.megamenu ? <FiChevronDown className='arrow1'/> : null }
                                {/* {props.arrow} */}
                            </Link>

                            {props.megamenu ? <div className='megamenu-arrow'><BsTriangleFill /></div> : null }
                            <div className='line'></div>
                            {props.megamenu}
                        </div>
                    )
                })}
            </div>

            <div className="auth">
                <Link to='/LogIn' className='login-link'>
                    <div>Log In</div>
                </Link>
                <Link to='/LogIn' className='signup-link'>
                    <div>Sign Up</div>
                </Link>
            </div>

            <MobileNav />
        </div>
    </header>
  )
}

export default NavBar