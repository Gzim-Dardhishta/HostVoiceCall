import React from 'react'
import { Link } from 'react-router-dom';
import { SolutionsMenu } from '../data';

const SolutionsMegamenu = () => {
  return (
    <div id='solution-megamenu' className='nav-megamenu'>
        <div className="solution-megamenu">
            <div className="by_use_case">
                <h4>By Use Case</h4>
                <div className="use-case-items">
                    {SolutionsMenu.ByUseCase.map((props) => {
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

            <div className="by_industry">
                <h4>By Industry</h4>
                <div className="industry-items">
                    {SolutionsMenu.ByIndustry.map((props) => {
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

            <div className="bu_business_type">
                <h4>By Business Type</h4>
                <div className="business-item">
                    {SolutionsMenu.ByBusinessType.map((props) => {
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

            <div className="by_capability">
                <h4>By Capability</h4>
                <div className="capability-item">
                    {SolutionsMenu.ByCapability.map((props) => {
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
        </div>
    </div>
  )
}

export default SolutionsMegamenu;