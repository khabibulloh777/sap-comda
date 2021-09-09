import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className="footer">
            <div className="oneBig">
                <div className="one">
                    <ul>
                        <h4>Quick Links</h4>
                        <li>Why SAP</li>
                        <li>Intelligent Enterprise</li>
                        <li>Small and Midsize Enterprises</li>
                        <li>SAP Trust Center</li>
                        <li>SAP Insights</li>
                        <li>SAP Community</li>
                        <li>Developer</li>
                        <li>Support Portal</li>
                    </ul>
                </div>
                <div className="one">
                    <ul>
                        <h4>About SAP</h4>
                        <li>Company Information</li>
                        <li>Worldwide Directory</li>
                        <li>Investor Relations</li>
                        <li>Careers</li>
                        <li>News and Press</li>
                        <li>Events</li>
                        <li>Customer Stories</li>
                        <li>Newsletter</li>
                    </ul>
                </div>
                <div className="one">
                    <ul>
                        <h4>Site Information</h4>
                        <li>Privacy</li>
                        <li>Terms of Use</li>
                        <li>Legal Disclosure</li>
                        <li>Copyright</li>
                        <li>Trademark</li>
                        <li>Sitemap</li>
                        <li>Text View</li>
                        <li>Cookie Preferences</li>
                    </ul>

                </div>
                <div className="one">
                    <ul>
                        <h4>Contact Us</h4>
                        <li className="liCopy">
                            <img src="https://www.sap.com/content/dam/application/imagelibrary/pictograms/281000/281519-pictogram-neg-orange.svg" alt="" />
                            United States
                            +1-800-872-1727
                            Or see our complete list of local country numbers</li>
                        <li className="imgLi">
                            <img src="https://www.sap.com/dam/application/shared/images/social-icons/icon-2018-envelope.svg" alt="" />
                            Contact Us</li>
                        <li className="imgLi">
                            <img src="https://www.sap.com/content/dam/application/imagelibrary/pictograms/281000/281226-pictogram-neg-blue.svg" alt="" />
                            Chat Now</li>
                    </ul>
                </div>
            </div>
            <div className="FooterLine"></div>
            <div className="imgFotterDive">
                <div className="img">
                <img src="https://www.sap.com/content/dam/application/shared/logos/sap-logo-svg.svg" alt="" />
                </div>
                <div className="absolute">
                    <li>Find us on</li>
                    <li className="twitter"><img src="https://www.sap.com/dam/application/shared/images/social-icons/icon-2018-facebook.svg" alt="" /></li>
                    <div className="twitter"><img src="https://www.sap.com/dam/application/shared/images/social-icons/icon-2018-twitter.svg" alt="" /></div>
                    <div className="twitter"><img src="https://www.sap.com/dam/application/shared/images/social-icons/icon-2018-youtube.svg" alt="" /></div>
                    <div className="twitter"><img src="https://www.sap.com/dam/application/shared/images/social-icons/icon-2018-linked-in.svg" alt="" /></div>
                    <div className="twitter"><img src="https://www.sap.com/dam/application/shared/images/social-icons/icon-2018-linked-in.svg" alt="" /></div>
                    <div className="twitter"><img src="https://www.sap.com/dam/application/shared/images/social-icons/icon-2018-envelope.svg" alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default Footer
