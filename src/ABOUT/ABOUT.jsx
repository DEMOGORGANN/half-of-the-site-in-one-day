import React from 'react'

import styles from './ABOUT.module.css'

import icons8faq1 from './../img/Vectorasdsad.svg'


import OneElement from './oneElement/oneElement';

function About() {


    return (
        <div className={styles.wrapFAQ} style={{ overflow: "inherit" }}>

            <div className={styles.wrapBlock}>
                <div className={styles.TitleFAQ}>
                    <img src={icons8faq1} alt="" />
                    <span>About</span>
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

export default About;



