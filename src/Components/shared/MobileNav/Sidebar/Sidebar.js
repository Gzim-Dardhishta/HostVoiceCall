import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { CgClose } from 'react-icons/cg';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { ProductsTabs, SolutionsMenu, DevelopersMenu, CompanyMenu } from '../../NavBar/data';
import './sidebar.scss'


const Sidebar = (props) => {

    const [list1, showList1] = useState(false);
    const [list2, showList2] = useState(false);
    const [list3, showList3] = useState(false);
    const [list4, showList4] = useState(false);

    function show1(){
        showList1(!list1);
    }
    function show2(){
        showList2(!list2);
    }
    function show3(){
        showList3(!list3);
    }
    function show4(){
        showList4(!list4);
    }

  return (
    <div className='mobile-sidebar'>
        <div className="sidebar-logo-row">
            <Link to='/'>
                <div className="mobile-logo-container"></div>
                <h6>HostVoiceCalls</h6>
            </Link>
            <button onClick={props.click}><CgClose /></button>
        </div>

        <div className="mobile-sidebar-links">
            <div className="sidebar-dropdown">
                <div className="nav-sidebar-link" onClick={show1}>
                    <Link to='/'>
                        <FormattedMessage id='products' defaultMessage="Products" />
                    </Link>
                    <div className='dropdown-arrow'>
                        <MdKeyboardArrowDown/> 
                    </div>
                </div>

                {list1 === true && 
                    <div className="mobile-dropdown">
                        <div className="inner-links">
                            {ProductsTabs.map((props) => {
                                return(
                                    <Link to={props.to}>{ props.link }</Link>
                                )
                            })}
                        </div>
                    </div>
                }
            </div>

            <div className="sidebar-dropdown">
                <div className="nav-sidebar-link" onClick={show2}>
                    <Link to='/'>
                        <FormattedMessage id='solutions' defaultMessage="Solutions" />
                    </Link>
                    <div className='dropdown-arrow'>
                        <MdKeyboardArrowDown/> 
                    </div>
                </div>

                {list2 === true && 
                    <div className="mobile-dropdown">
                        <div className="inner-links">
                            <div className='title'>By Use Case</div>
                            {SolutionsMenu.ByUseCase.map((props) => {
                                return(
                                    <Link to={props.to}>{ props.link }</Link>
                                )
                            })}

                            <div className="title">By Industry</div>
                            {SolutionsMenu.ByIndustry.map((props) => {
                                return(
                                    <Link to={props.to}>{ props.link }</Link>
                                )
                            })}

                            <div className="title">By Business Type</div>
                            {SolutionsMenu.ByBusinessType.map((props) => {
                                return(
                                    <Link to={props.to}>{ props.link }</Link>
                                )
                            })}

                            <div className="title">By Capability</div>
                            {SolutionsMenu.ByCapability.map((props) => {
                                return(
                                    <Link to={props.to}>{ props.link }</Link>
                                )
                            })}
                        </div>
                    </div>
                }
            </div>

            <div className="nav-sidebar-link">
                <Link to='/'>
                    <FormattedMessage id='solutions' defaultMessage="Resources" />
                </Link>
                <div className='dropdown-arrow'>
                        <MdKeyboardArrowDown/> 
                    </div>
            </div>

            <div className="sidebar-dropdown">
                <div className="nav-sidebar-link" onClick={show3}>
                    <Link to='/'>
                        <FormattedMessage id='developers' defaultMessage="Developers" />
                    </Link>
                    <div className='dropdown-arrow'>
                        <MdKeyboardArrowDown/> 
                    </div>
                </div>

                {list3 === true && 
                    <div className="mobile-dropdown">
                        <div className="inner-links">
                            {DevelopersMenu.Documentation.map((props) => {
                                return(
                                    <Link to={props.to}>{ props.link }</Link>
                                )
                            })}
                            {DevelopersMenu.Community.map((props) => {
                                return(
                                    <Link to={props.to}>{ props.link }</Link>
                                )
                            })}
                        </div>
                    </div>
                }
            </div>

            <div className="sidebar-dropdown">
                <div className="nav-sidebar-link" onClick={show4}>
                    <Link to='/'>
                        <FormattedMessage id='company' defaultMessage="Company" />
                    </Link>
                    <div className='dropdown-arrow'>
                        <MdKeyboardArrowDown/> 
                    </div>
                </div>

                {list4 === true && 
                    <div className="mobile-dropdown">
                        <div className="inner-links">
                            {CompanyMenu.map((props) => {
                                return(
                                    <Link to={props.to}>{ props.link }</Link>
                                )
                            })}
                        </div>
                    </div>
                }
            </div>

            <div className="nav-sidebar-link">
                <Link to='/'>
                    <FormattedMessage id='pp' defaultMessage="Plans & Planning" />
                </Link>
            </div>
        </div>

        <div className="sidebar-auth">
            <Link to='/Login' className='login'>
                <FormattedMessage id='log-in' defaultMessage="Log In" />
            </Link>
            <Link to='/Signup' className='signup'>
                <FormattedMessage id='sign-up' defaultMessage="Sign Up" />
            </Link>
        </div>
    </div>
  )
}

export default Sidebar