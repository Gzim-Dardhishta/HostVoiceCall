import React from 'react'
import { Link } from 'react-router-dom';
import {DevelopersMenu} from '../data';

function DevelopersMegamenu() {
  return (
    <div id='developers' className='nav-megamenu'>
        <div className="developers-megamenu">
            <div className="documentation">
                <h6>Documentation</h6>
                <div className="documentation-item">
                    {DevelopersMenu.Documentation.map((props) => {
                        return (        
                            <Link to={props.to} className='megamenu-link'>
                                <div className={`inner-icon ${props.cls}`}>
                                    <div className='icon' style={{content: `url(${props.icon})`}}></div>
                                </div>
                                <h5>{props.link}</h5>
                            </Link>
                        )
                    })}
                </div>
            </div>

            <div className="community">
                <h6>Community</h6>
                <div className="documentation-item">
                    {DevelopersMenu.Community.map((props) => {
                        return(
                            <Link to={props.to} className='megamenu-link'>
                                <div className={`inner-icon ${props.cls}`}>
                                    <div className='icon' style={{content: `url(${props.icon})`}}></div>
                                </div>
                                <h5>{props.link}</h5>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default DevelopersMegamenu