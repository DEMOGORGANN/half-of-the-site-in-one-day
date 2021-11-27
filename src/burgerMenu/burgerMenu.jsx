import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Group1 from '../img/Group1.svg'
import Vector from '../img/Vector.svg'
import Vector1 from '../img/Vector1.svg'
import Vector2 from '../img/Vector2.svg'
import icons8info1 from '../img/icons8-info1.svg'
import telegramm from '../img/telegramm.svg'
import Group3 from '../img/Group3.svg'
import medium from '../img/medium.svg'

import styles from './burgerMenu.module.css'
import SelCont from './../SelCont/SelCont'

function BurgerMenu({ SetModalVisib }) {

    const [activ, SetActive] = useState(true)

    return (
        <div className={activ === false ? styles.WrapBurger_notActive : styles.WrapBurger}>
            <div className={styles.navBar}>
                <img className={styles.HeadLogo} src={Group1} alt="" />
                <img className={styles.closeWind} src={Vector} alt="" onClick={() => SetActive(!activ)} />
                <div className={styles.wrapLinkBlock}>
                    <img src={Vector1} alt="" />
                    <Link to="/Swap">Swap</Link>
                </div>
                <div className={styles.wrapLinkBlock}>
                    <img src={Vector2} alt="" />
                    <Link to="/FAQ">FAQ</Link>
                </div>
                <div className={styles.wrapLinkBlock}>
                    <img src={icons8info1} alt="" />
                    <Link to="/ABOUT">About</Link>
                </div>
                <div className={styles.wrapLinkBlock} onClick={() => SetModalVisib(true)}>
                    <Link to="#">Модал Окно..</Link>
                </div>
            </div>
            <div className={styles.footBlockMen}>
                <div className={styles.footImgA}>
                    <img src={telegramm} alt="" />
                    <img src={Group3} alt="" />
                    <img src={medium} alt="" />
                </div>
                <SelCont />
            </div>
        </div >
    );
}

export default BurgerMenu;



