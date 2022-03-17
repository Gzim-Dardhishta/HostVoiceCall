import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ProductsMenu, ProductsTabs,ProductsOtherLinks } from '../data';

function ProductsMegamenu() {
    return (
        <div id='products-megamenu' className='nav-megamenu'>
            <div className="product-links">
                <Tabs>
                    <div className="tabs">
                        <div className="tab-list">
                            <TabList>
                                {ProductsTabs.map((props) => {
                                    return (
                                        <Tab>
                                            <div to={props.to} className='megamenu-link'>
                                                <div className={`inner-icon ${props.cls}`}>
                                                    <div className='icon' style={{ content: `url(${props.icon})` }}></div>
                                                </div>
                                                <h5>{props.link}</h5>
                                            </div>
                                        </Tab>
                                    )
                                })}
                            </TabList>
                        </div>

                        <div className="tab-content">
                            {ProductsMenu.map((props) => {
                                return (
                                    <TabPanel className='tab-panels'>
                                        {props.items.map((l) => {
                                            return (
                                                <div className='megamenu-link'>
                                                    <div className={`inner-icon ${l.cls}`}>
                                                        <div className='icon' style={{ content: `url(${l.icon})` }}></div>
                                                    </div>
                                                    <h5>{l.link}</h5>
                                                </div>
                                            )
                                        })}
                                    </TabPanel>
                                )
                            })}
                        </div>

                    </div>
                </Tabs>
            </div>

            <div className="other-links">
                {ProductsOtherLinks.map((props) => {
                    return (
                        <div to={props.to} className='link'>
                            <div className='icon' style={{ content: `url(${props.icon})` }}></div>
                            <h5>{props.link}</h5>
                            <div style={{ content: `url(${props.arrowicon})` }}></div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default ProductsMegamenu