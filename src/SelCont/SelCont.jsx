import React, { useState } from 'react'


import US3x from '../img/US3x.svg'
import arrowLang from '../img/arrowLang.svg'
import Russia from '../img/Russia.svg'
import Spain from '../img/Spain.svg'


import styles from './SelCont.module.css'

export default function SelCont({ posit }) {

    const [langs, setLang] = useState({ lang: "EN", img: US3x })
    const [activBut, setActivBut] = useState(false)
    const [actAr, setActAr] = useState(false)

    return (
        <div
            className={`${styles.tooltip} ${posit === "lang" ? styles.tooltipHead : null} `}
            onClick={() => {
                setActAr(!actAr)
                setActivBut(!activBut)
            }}>
            <div className={styles.wrapSelectLang} >
                <img src={langs.img} alt="" />
                <span>{langs.lang}</span>
                <div className={`${styles.elem} ${actAr === true ? styles.transform : null}`}>
                    <img src={arrowLang} alt="" />
                </div>
            </div>
            <div
                className={` ${activBut === true ? styles.tooltiptext : styles.noneActiv}`}
                onClick={() => setActivBut(!activBut)}>
                <div
                    className={styles.wrapsButs}
                    onClick={() => setLang({ lang: "EN", img: US3x })}>
                    <img src={US3x} alt="" />
                    <span>EN</span>
                </div>
                <div
                    className={styles.wrapsButs}
                    onClick={() => setLang({ lang: "RU", img: Russia })}>
                    <img src={Russia} alt="" />
                    <span style={{ color: "#05D5FA" }}>RU</span>
                </div>
                <div
                    className={styles.wrapsButs}
                    onClick={() => setLang({ lang: "SP", img: Spain })}>
                    <img src={Spain} alt="" />
                    <span style={{ color: "#00D632" }}>SP</span>
                </div>
            </div>
        </div>
    )
}


