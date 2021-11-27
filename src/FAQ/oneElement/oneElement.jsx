import React, { useState } from 'react'

import styles from './oneElement.module.css'

import Icosadn from './../../img/Icosadn.svg'

function OneElement() {

    const [actB, setActB] = useState(false)
    const [actAr, setActAr] = useState(false)

    return (
        <div className={styles.wrapFAQElem}>

            <div className={styles.nameRules}
                onClick={() => {
                    setActAr(!actAr)
                    setActB(!actB)
                }} >
                <span
                    className={styles.accordion}
                    style={actB === true ? { color: "#00D632" } : null}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.

                </span>
                <div className={`${styles.elem} ${actAr === true ? styles.transform : null}`}>
                    <img src={Icosadn} alt="" />
                </div>
            </div>
            <hr />
            <div className={actB === true ? styles.active : styles.panel}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div >
    );
}

export default OneElement;



