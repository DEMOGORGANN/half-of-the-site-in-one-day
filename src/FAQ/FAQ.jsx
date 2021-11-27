import React from 'react'

import styles from './FAQ.module.css'

import icons8faq1 from './../img/icons8faq1.svg'


import OneElement from './oneElement/oneElement';

function FAQ() {


    return (
        <div className={styles.wrapFAQ} style={{ overflow: "inherit" }}>

            <div className={styles.wrapBlock}>
                <div className={styles.TitleFAQ}>
                    <img src={icons8faq1} alt="" />
                    <span>FAQ</span>
                </div>
                <div className={styles.sad}>
                    <OneElement />
                    <OneElement />
                    <OneElement />
                    <OneElement />
                    <OneElement />
                    <OneElement />
                    <OneElement />
                    <OneElement />
                    <OneElement />
                    <OneElement />
                    <OneElement />
                </div>
            </div>

        </div >
    );
}

export default FAQ;



