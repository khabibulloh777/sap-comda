import React from 'react';
import classes from './Header.module.css';
import { BiSearch } from 'react-icons/bi';
import { VscAccount } from 'react-icons/vsc';

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
                    </div>
                    <div className={classes.industries}>
                        <p>Industries</p>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
