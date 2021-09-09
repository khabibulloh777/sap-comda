import React from 'react';
import classes from './Header.module.css';
import { BiSearch } from 'react-icons/bi';
import { VscAccount } from 'react-icons/vsc';
import orange from '../../Images/orange.svg';
import orange1 from '../../Images/orange1.svg';
import orange2 from '../../Images/orange2.svg';
import orange3 from '../../Images/orange3.svg';
import orange4 from '../../Images/orange4.svg';

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.header__wrapper}>
                <div className={classes.logo}>
                    <img src="	https://www.sap.com/content/dam/application/shared/logos/sap-logo-svg.svg" alt="" />
                </div>
                <div className={classes.header_collaction_product}>
                    <div className={classes.product}>
                        <p>Product</p>
                        <div className={classes.header_collaction_product_item}>
                            <div className={classes.product_item}>
                                <div className={classes.header_collaction_product_item_left}>
                                    <div className={classes.sap_cloud}>
                                        <div className={classes.finance}>
                                            <h5>ERP and Finance</h5>
                                            <p><a href="BU YERDA LINK">SAP S/4HANA Cloud</a></p>
                                            <p><a href="BU YERDA LINK">ERP for Small and Midsize Enterprises</a></p>
                                            <p><a href="bu yerda link">Financial Planning and Analysis</a></p>
                                            <p><a href="bu yerda link">Accounting and Financial Close</a></p>
                                            <p><a href="bu yerda link">Treasury Management</a></p>
                                            <p><a href="bu yerda link">Accounts Receivable, Billing and Revenue Management</a></p>
                                            <p><a href="bu yerda link">Governance, Risk, Compliance (GRC), and Cybersecurity</a></p>
                                        </div>
                                        <div className={classes.customers}>
                                            <h5>CRM and Customer Experience</h5>
                                            <p><a href="BU YERDA LINK">Customer Data</a></p>
                                            <p><a href="BU YERDA LINK">Marketing</a></p>
                                            <p><a href="BU YERDA LINK">Commerce</a></p>
                                            <p><a href="BU YERDA LINK">Sales</a></p>
                                            <p><a href="BU YERDA LINK">Service</a></p>
                                        </div>
                                        <div className={classes.network}>
                                            <h5>Network and Spend Management</h5>
                                            <p><a href="bu yerda link">Supplier Management</a></p>
                                            <p><a href="bu yerda link">Strategic Sourcing</a></p>
                                            <p><a href="nu yerda link">Procurement</a></p>
                                            <p><a href="bu yerda link">Services Procurement and Contingent Workforce</a></p>
                                            <p><a href="bu yerda link">Selling and Fulfillment</a></p>
                                            <p><a href="nu yerda link">Travel and Expense</a></p>
                                        </div>
                                    </div>
                                    <div className={classes.sap_planning}>
                                        <div className={classes.supply}>
                                            <h5>Supply Chain Management</h5>
                                            <p><a href="bu yerda link">Supply Chain Planning</a></p>
                                            <p><a href="bu yerda link">Supply Chain Logistics</a></p>
                                            <p><a href="bu yerda link">Manufacturing</a></p>
                                            <p><a href="nu yerda link">Product Lifecycle Management</a></p>
                                            <p><a href="bu yerda link">Enterprise Asset Management</a></p>
                                        </div>
                                        <div className={classes.management}>
                                            <h5>Human Capital Management</h5>
                                            <p><a href="bu yerda link">Employee Experience Management</a></p>
                                            <p><a href="bu yerda link">Core HR and Payroll</a></p>
                                            <p><a href="bu yerda link">Talent Management</a></p>
                                            <p><a href="bu yerda link">HR Analytics and Workforce Planning</a></p>
                                        </div>
                                        <div className={classes.platform}>
                                            <h5>Business Technology Platform</h5>
                                            <p><a href="bu yerda link">Database and Data Management</a></p>
                                            <p><a href="bu yerda link">Application Development and Integration</a></p>
                                            <p><a href="nu yerda link">Analytics</a></p>
                                            <p><a href="bu yerda link">Intelligent Technologies</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.header_collaction_product_item_right}>
                                    <div className={classes.collection_item}>
                                        <img src={orange} alt="" />
                                        <h5>Rise with Sap</h5>
                                    </div>
                                    <div className={classes.collection_item}>
                                        <img src={orange1} alt="" />
                                        <h5>Rise with Sap</h5>
                                    </div>
                                    <div className={classes.collection_item}>
                                        <img src={orange2} alt="" />
                                        <h5>Rise with Sap</h5>
                                    </div>
                                    <div className={classes.collection_item}>
                                        <img src={orange3} alt="" />
                                        <h5>Rise with Sap</h5>
                                    </div>
                                    <div className={classes.collection_item}>
                                        <img src={orange4} alt="" />
                                        <h5>Rise with Sap</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.industries}>
                        <p>Industries</p>
                        <div className={classes.header_collaction_product_item}>
                            <div className={classes.product_item}>
                                <div className={classes.header_collaction_product_item_left}>
                                    <div className={classes.sap_cloud}>
                                        <div className={classes.finance}>
                                            <h5>Energy and Natural Resources</h5>
                                            <p><a href="BU YERDA LINK">Building Products</a></p>
                                            <p><a href="BU YERDA LINK">Chemicals</a></p>
                                            <p><a href="bu yerda link">Mill Products</a></p>
                                            <p><a href="bu yerda link">Mining</a></p>
                                            <p><a href="bu yerda link">Oil, Gas and Energy</a></p>
                                            <p><a href="bu yerda link">Utilities</a></p>
                                        </div>
                                        <div className={classes.customers}>
                                            <h5>Financial Services</h5>
                                            <p><a href="BU YERDA LINK">Banking</a></p>
                                            <p><a href="BU YERDA LINK">Insurance</a></p>
                                        </div>
                                        <div className={classes.network}>
                                            <h5>Consumer Industries</h5>
                                            <p><a href="bu yerda link">Agribusiness</a></p>
                                            <p><a href="bu yerda link">Consumer Products</a></p>
                                            <p><a href="nu yerda link">Fashion</a></p>
                                            <p><a href="bu yerda link">Life Sciences</a></p>
                                            <p><a href="bu yerda link">Retail</a></p>
                                            <p><a href="nu yerda link">Wholesale Distribution</a></p>
                                        </div>
                                    </div>
                                    <div className={classes.sap_planning}>
                                        <div className={classes.supply}>
                                            <h5>Discrete Industries</h5>
                                            <p><a href="bu yerda link">Aerospace and Defense</a></p>
                                            <p><a href="bu yerda link">Automotive</a></p>
                                            <p><a href="bu yerda link">High Tech</a></p>
                                            <p><a href="nu yerda link">Industrial Machinery and Components</a></p>
                                        </div>
                                        <div className={classes.management}>
                                            <h5>Service Industries</h5>
                                            <p><a href="bu yerda link">Cargo Transportation and Logistics</a></p>
                                            <p><a href="bu yerda link">Engineering, Construction, and Operations</a></p>
                                            <p><a href="bu yerda link">Media</a></p>
                                            <p><a href="bu yerda link">Passenger Travel and Leisure</a></p>
                                            <p><a href="bu yerda link">Professional Services</a></p>
                                            <p><a href="bu yerda link">Sports and Entertainment</a></p>
                                            <p><a href="bu yerda link">Telecommunications</a></p>
                                        </div>
                                        <div className={classes.platform}>
                                            <h5>Public Services</h5>
                                            <p><a href="bu yerda link">Defense and Security</a></p>
                                            <p><a href="bu yerda link">Federal and National Government</a></p>
                                            <p><a href="nu yerda link">Future Cities</a></p>
                                            <p><a href="bu yerda link">Healthcare</a></p>
                                            <p><a href="bu yerda link">Higher Education and Research</a></p>
                                            <p><a href="bu yerda link">Regional, State, and Local Government</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.header_collaction_product_item_right}>
                                    <div className={classes.collection_item}>
                                        <img src={orange} alt="" />
                                        <h5>Rise with Sap</h5>
                                    </div>
                                    <div className={classes.collection_item}>
                                        <img src={orange1} alt="" />
                                        <h5>Rise with Sap</h5>
                                    </div>
                                    <div className={classes.collection_item}>
                                        <img src={orange2} alt="" />
                                        <h5>Rise with Sap</h5>
                                    </div>
                                    <div className={classes.collection_item}>
                                        <img src={orange3} alt="" />
                                        <h5>Rise with Sap</h5>
                                    </div>
                                    <div className={classes.collection_item}>
                                        <img src={orange4} alt="" />
                                        <h5>Rise with Sap</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.services}>
                        <p>Services And Supports</p>
                    </div>
                    <div className={classes.learning}>
                        <p>Learning</p>
                    </div>
                    <div className={classes.community}>
                        <p>Community</p>
                    </div>
                    <div className={classes.partner}>
                        <p>Partner</p>
                    </div>
                    <div className={classes.about}>
                        <p>About</p>
                    </div>
                </div>
                <div className={classes.header_collaction_buy}>
                    <div className={classes.buy}>
                        <p>Try & Buy</p>
                        <BiSearch className={classes.search} />
                    </div>
                    <div className={classes.header_icons}>
                        <div className={classes.account}>
                            <VscAccount className={classes.account_icon} />
                        </div>
                        <div className={classes.flag}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtTcak8sFVV0iw5RqIFaHSFPB-KXbFiFFkXg&usqp=CAU" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
