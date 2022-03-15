import React from 'react'
import {CompanyMenu} from './../data';

function CompanyMegamenu() {
  return (
    <div className='nav-megamenu company-megamenu'>
        <h4>Company</h4>
        <div className="company-links">
            {CompanyMenu.map((props) => {
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
  )
}

export default CompanyMegamenu