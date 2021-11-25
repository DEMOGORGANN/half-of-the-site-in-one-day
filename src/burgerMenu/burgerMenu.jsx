import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Group1 from '../img/Group1.png'
import Vector from '../img/Vector.png'
import Vector1 from '../img/Vector1.png'
import Vector2 from '../img/Vector2.png'
import icons8info1 from '../img/icons8-info1.png'
import telegramm from '../img/telegramm.png'
import Group3 from '../img/Group3.png'
import medium from '../img/medium.png'
import US3x from '../img/US3x.png'
import arrowLang from '../img/arrowLang.png'

import styles from './burgerMenu.module.css'

function BurgerMenu() {

    const [activ, SetActive] = useState(true)


    if (window.innerWidth > 768) {
        return (
            <div className={activ === false ? styles.WrapBurger_notActive : styles.WrapBurger}>
                <div className={styles.navBar}>
                    <img className={styles.HeadLogo} src={Group1} alt="" />
                    <img className={styles.closeWind} src={Vector} alt="" onClick={() => SetActive(!activ)} />
                    <div className={styles.wrapLinkBlock}>
                        <img src={Vector1} alt="" />
                        <Link to="#">Swap</Link>
                    </div>
                    <div className={styles.wrapLinkBlock}>
                        <img src={Vector2} alt="" />
                        <Link to="#">FAQ</Link>
                    </div>
                    <div className={styles.wrapLinkBlock}>
                        <img src={icons8info1} alt="" />
                        <Link to="#">About</Link>
                    </div>
                </div>
                <div className={styles.footBlockMen}>
                    <div className={styles.footImgA}>
                        <img src={telegramm} alt="" />
                        <img src={Group3} alt="" />
                        <img src={medium} alt="" />
                    </div>
                    <div className={styles.wrapSelectLang}>
                        <img src={US3x} alt="" />
                        <span>EN</span>
                        <img src={arrowLang} alt="" />
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default BurgerMenu;
