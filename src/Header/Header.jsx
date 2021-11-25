import React, { useState } from 'react'
import { Link } from 'react-router-dom'


import styles from './Header.module.css'


import gasstation1 from './../img/gas-station1.png'
import arrow from './../img/arrowLang.png'
import US3x from './../img/US3x.png'
import Vector1 from '../img/Vector1.png'
import Vector2 from '../img/Vector2.png'
import icons8info1 from '../img/icons8-info1.png'
import Group from '../img/Group1.png'
import BinanceCoin from '../img/BinanceCoin(BNB).png'
import Vect234or from '../img/Vect234or.png'
import telegramm from '../img/telegramm.png'
import Group3 from '../img/Group3.png'
import medium from '../img/medium.png'

function Header() {

    const [activBurg, setActivBurg] = useState(false)





    if (window.innerWidth > 768) {
        return (
            <div className={styles.wrapHead}>
                <div className={styles.nameProj}>
                    <h1>Halal</h1>
                    <h1>Swap</h1>
                </div>
                <div className={styles.myBlock}>
                    <div className={styles.block1}>
                        <img src={gasstation1} alt="" />
                        <h2>151</h2>
                        <img src={arrow} alt="" />
                    </div>
                    <div className={styles.block2}>
                        <img src={US3x} alt="" />
                        <h2>USD</h2>
                        <img src={arrow} alt="" />
                    </div>
                    <div className={styles.logIn}>
                        <h2>Connect</h2>
                    </div>
                </div>

            </div>
        );
    } else {
        return (
            <div className={styles.wrapMobileVersion}>
                <div className={styles.fullNAv}>
                    <div className={`${styles.burgerMenu} ${activBurg === true ? styles.burgerMenu_active : 0}`} onClick={() => setActivBurg(!activBurg)}>
                        <span className={styles.burgerMenu_lines}></span>
                    </div>

                    <div className={`${activBurg === true ? styles.boxShad_act : 0}`} onClick={() => setActivBurg(false)}>
                        <nav className={`${styles.burgerMenu_nav} ${activBurg === true ? styles.burgerMenu_nav_active : 0}`} onClick={(e) => e.stopPropagation()}>
                            <div className={`${styles.wrapLinkBlock} ${styles.burgerMenu_link}`}>
                                <img src={Vector1} alt="" />
                                <Link to="#">Swap</Link>
                            </div>
                            <div className={`${styles.wrapLinkBlock} ${styles.burgerMenu_link}`}>
                                <img src={Vector2} alt="" />
                                <Link to="#">FAQ</Link>
                            </div>
                            <div className={`${styles.wrapLinkBlock} ${styles.burgerMenu_link}`}>
                                <img src={icons8info1} alt="" />
                                <Link to="#">About</Link>
                            </div>

                            <div className={styles.footMobileVers}>
                                <div className={styles.imgLink}>
                                    <img src={telegramm} alt="" />
                                    <img src={Group3} alt="" />
                                    <img src={medium} alt="" />
                                </div>
                                <div className={styles.wrapButtns}>
                                    <div className={styles.blockBut}>
                                        <img src={US3x} alt="" />
                                        <span>EN</span>
                                        <img src={arrow} alt="" />
                                    </div>
                                    <div className={styles.blockBut}>
                                        <img src={US3x} alt="" />
                                        <span>USD</span>
                                        <img src={arrow} alt="" />
                                    </div>
                                </div>
                            </div>

                        </nav>
                    </div>
                </div >
                <img src={Group} alt="" />
                <div className={styles.lastelement}>
                    <img src={BinanceCoin} alt="" />
                    <img src={Vect234or} alt="" />
                </div>
            </div >
        )
    }
}

export default Header;
