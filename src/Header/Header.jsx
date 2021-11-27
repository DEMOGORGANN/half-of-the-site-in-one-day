import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.css'
import SelectValue from '../SelectValue/SelectValue'
import SelCont from '../SelCont/SelCont'
import GasStashion from '../GasStashion/GasStashion'


import Vector1 from '../img/Vector1.svg'
import Vector2 from '../img/Vector2.svg'
import icons8info1 from '../img/icons8-info1.svg'
import Group from '../img/Group1.svg'
import BinanceCoin from '../img/BinanceCoin(BNB).svg'
import Vect234or from '../img/Vect234or.svg'
import telegramm from '../img/telegramm.svg'
import Group3 from '../img/Group3.svg'
import medium from '../img/medium.svg'





function Header({ SetModalVisib }) {

    const [activBurg, setActivBurg] = useState(false)


    useEffect(() => {
        document.querySelector("body").style.overflow = activBurg ? "hidden" : "auto";
    }, [activBurg])


    return (
        <div className={styles.fullWrapHead}>
            <div className={styles.wrapHead}>
                <div className={styles.nameProj}>
                    <h1>Halal</h1>
                    <h1>Swap</h1>
                </div>
                <div className={styles.myBlock}>
                    <GasStashion posit={"gas"} />
                    <SelCont posit={"lang"} />
                    <div className={styles.logIn}>
                        <h2>Connect</h2>
                    </div>
                </div>

            </div>

            {/* ------------------------------MOBILE----------------------------------------- */}
            <div className={styles.wrapMobileVersion}>
                <div className={styles.fullNAv}>
                    <div
                        className={`${styles.burgerMenu} ${activBurg === true ? styles.burgerMenu_active : 0}`}
                        onClick={() => setActivBurg(!activBurg)}>
                        <span className={styles.burgerMenu_lines}></span>
                    </div>

                    <div className={`${activBurg === true ? styles.boxShad_act : 0}`} onClick={() => setActivBurg(false)}>
                        <nav className={`${styles.burgerMenu_nav} ${activBurg === true ? styles.burgerMenu_nav_active : 0}`} onClick={(e) => e.stopPropagation()}>
                            <div className={`${styles.wrapLinkBlock} ${styles.burgerMenu_link}`}>
                                <img src={Vector1} alt="" />
                                <Link to="/Swap" onClick={() => setActivBurg(false)}>Swap</Link>
                            </div>
                            <div className={`${styles.wrapLinkBlock} ${styles.burgerMenu_link}`}>
                                <img src={Vector2} alt="" />
                                <Link to="/FAQ" onClick={() => setActivBurg(false)}>FAQ</Link>
                            </div>
                            <div className={`${styles.wrapLinkBlock} ${styles.burgerMenu_link}`}>
                                <img src={icons8info1} alt="" />
                                <Link to="/ABOUT" onClick={() => setActivBurg(false)}>About</Link>
                            </div>
                            <div className={`${styles.wrapLinkBlock} ${styles.burgerMenu_link}`} onClick={() => SetModalVisib(true)}>
                                <Link to="/#" onClick={() => setActivBurg(false)}>Модал Окно..</Link>
                            </div>

                            <div className={styles.footMobileVers}>
                                <div className={styles.imgLink}>
                                    <img src={telegramm} alt="" />
                                    <img src={Group3} alt="" />
                                    <img src={medium} alt="" />
                                </div>
                                <div>
                                    <SelCont />
                                    <SelectValue />
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
        </div>

    );

}


export default Header;











