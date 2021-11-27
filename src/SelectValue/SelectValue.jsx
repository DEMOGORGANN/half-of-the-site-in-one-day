import React, { useState } from "react"

import Russia from '../img/Russia.svg'
import EU from '../img/EU.svg'
import US3x from '../img/US3x.svg'
import arrowLang from '../img/arrowLang.svg'


import styles from './../SelCont/SelCont.module.css'

export default function SelectValue() {

    const [valuts, setValut] = useState({ valut: "USD", img: US3x })
    const [activBut, setActivBut] = useState(false)
    const [actAr, setActAr] = useState(false)

    return (

        <div
            className={`${styles.tooltip}`}
            onClick={() => {
                setActAr(!actAr)
                setActivBut(!activBut)
            }}>
            <div className={styles.wrapSelectLang}>
                <img src={valuts.img} alt="" />
                <span>{valuts.valut}</span>
                <div className={`${styles.elem} ${actAr === true ? styles.transform : null}`}>
                    <img src={arrowLang} alt="" />
                </div>
            </div>
            <div
                className={` ${activBut === true ? styles.tooltiptext : styles.noneActiv}`}
                onClick={() => setActivBut(!activBut)}>
                <div className={styles.wrapsButs} onClick={() => setValut({ valut: "USD", img: US3x })}>
                    <img src={US3x} alt="" />
                    <span>USD</span>
                </div>
                <div className={styles.wrapsButs} onClick={() => setValut({ valut: "RUB", img: Russia })}>
                    <img src={Russia} alt="" />
                    <span style={{ color: "#05D5FA" }}>RUB</span>
                </div>
                <div className={styles.wrapsButs} onClick={() => setValut({ valut: "EUR", img: EU })}>
                    <img src={EU} alt="" />
                    <span style={{ color: "#00D632" }}>EUR</span>
                </div>
            </div>
        </div>
    )
}