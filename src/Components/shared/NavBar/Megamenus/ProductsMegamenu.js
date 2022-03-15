import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';

import { ProductsMenu } from '../data';
import communication from '../../../../assets/shared/Products/Tabs/communication.svg';
import application from '../../../../assets/shared/Products/Tabs/application.svg';
import connectivity from '../../../../assets/shared/Products/Tabs/connectivity.svg';
import costumer from '../../../../assets/shared/Products/Tabs/costumer.svg';
import usecase from '../../../../assets/shared/Products/Tabs/usecase.svg';
import integrations from '../../../../assets/shared/Products/Tabs/integrations.svg';

function ProductsMegamenu(props) {

    const [selectedTab, setSelectedTab] = useState(1);

    return (

        <div id='products-megamenu' className='nav-megamenu'>
            <div className="product-links">
                <Tabs selectedItem={selectedTab} onChange={setSelectedTab}>
                    <div className="tabs">
                        <div className="tab-list">
                            <TabList>
                                <Tab itemID='1'>
                                    <div to={props.to} className='megamenu-link'>
                                        <div className={`inner-icon ${props.cls}`}>
                                            <div className='icon' style={{ content: `url(${communication})` }}></div>
                                        </div>
                                        <h5>Communocations</h5>
                                    </div>
                                </Tab>

                                <Tab itemID='2'>
                                    <div to={props.to} className='megamenu-link'>
                                        <div className={`inner-icon ${props.cls}`}>
                                            <div className='icon' style={{ content: `url(${application})` }}></div>
                                        </div>
                                        <h5>Applications</h5>
                                    </div>
                                </Tab>

                                <Tab itemID='3'>
                                    <div to={props.to} className='megamenu-link'>
                                        <div className={`inner-icon ${props.cls}`}>
                                            <div className='icon' style={{ content: `url(${connectivity})` }}></div>
                                        </div>
                                        <h5>Connectivity</h5>
                                    </div>
                                </Tab>

                                <Tab>
                                    <div to={props.to} className='megamenu-link'>
                                        <div className={`inner-icon ${props.cls}`}>
                                            <div className='icon' style={{ content: `url(${costumer})` }}></div>
                                        </div>
                                        <h5>Costumer Engagement</h5>
                                    </div>
                                </Tab>

                                <Tab>
                                    <div to={props.to} className='megamenu-link'>
                                        <div className={`inner-icon ${props.cls}`}>
                                            <div className='icon' style={{ content: `url(${usecase})` }}></div>
                                        </div>
                                        <h5>Use Case</h5>
                                    </div>
                                </Tab>

                                <Tab>
                                    <div to={props.to} className='megamenu-link'>
                                        <div className={`inner-icon ${props.cls}`}>
                                            <div className='icon' style={{ content: `url(${integrations})` }}></div>
                                        </div>
                                        <h5>Integrations</h5>
                                    </div>
                                </Tab>
                            </TabList>
                        </div>

                        <div className="tab-content">
                            <TabPanel itemID='1'>
                                <div className="communication-links">
                                    {ProductsMenu.Communication.map((props) => {
                                        return(
                                            <div to={props.to} className='megamenu-link'>
                                                <div className={`inner-icon ${props.cls}`}>
                                                    <div className='icon' style={{ content: `url(${props.icon})` }}></div>
                                                </div>
                                                <h5>{props.link}</h5>
                                            </div>
                                        )
                                    })}
                                </div>
                            </TabPanel>

                            <TabPanel itemID='2'>
                                <div className="application-links">
                                    {ProductsMenu.Application.map((props) => {
                                        return(
                                            <div to={props.to} className='megamenu-link'>
                                                <div className={`inner-icon ${props.cls}`}>
                                                    <div className='icon' style={{ content: `url(${props.icon})` }}></div>
                                                </div>
                                                <h5>{props.link}</h5>
                                            </div>
                                        )
                                    })}
                                </div>
                            </TabPanel>

                            <TabPanel itemID='3'>
                                <div className="connectivity-links">
                                    {ProductsMenu.Connetivity.map((props) => {
                                        return(
                                            <div to={props.to} className='megamenu-link'>
                                                <div className={`inner-icon ${props.cls}`}>
                                                    <div className='icon' style={{ content: `url(${props.icon})` }}></div>
                                                </div>
                                                <h5>{props.link}</h5>
                                            </div>
                                        )
                                    })}
                                </div>
                            </TabPanel>
                        </div>
                    </div>
                </Tabs>
            </div>

            <div className="other-links">
                {ProductsMenu.OtherLinks.map((props) => {
                    return (
                        <div to={props.to} className='link'>
                            <div className='icon' style={{ content: `url(${props.icon})` }}></div>
                            <h5>{props.link}</h5>
                            <div style={{ content: `url(${props.arrowicon})`}}></div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default ProductsMegamenu