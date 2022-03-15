import React from 'react'
import {DevelopersMenu} from '../data';

function DevelopersMegamenu() {
  return (
    <div id='developers' className='nav-megamenu'>
        <div className="developers-megamenu">
            <div className="documentation">
                <h4>Documentation</h4>
                <div className="documentation-item">
                    {DevelopersMenu.Documentation.map((props) => {
                        return (        
                            <div to={props.to} className='megamenu-link'>
                                <div className={`inner-icon ${props.cls}`}>
                                    <div className='icon' style={{content: `url(${props.icon})`}}></div>
                                </div>
                                <h5>{props.link}</h5>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="community">
                <h4>Community</h4>
                <div className="documentation-item">
                    {DevelopersMenu.Community.map((props) => {
                        return(
                            <div to={props.to} className='megamenu-link'>
                                <div className={`inner-icon ${props.cls}`}>
                                    <div className='icon' style={{content: `url(${props.icon})`}}></div>
                                </div>
                                <h5>{props.link}</h5>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default DevelopersMegamenu