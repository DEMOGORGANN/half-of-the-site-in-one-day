import React from 'react'
import { Link } from 'react-router-dom';

import Vec234tor from './../../img/Vec234tor.svg';
import sad from './../../img/0x5Ec3AdBDae5.svg';
import av3 from './../../img/99B93f5261.svg'
import av4 from './../../img/D846F383511.svg'
import av5 from './../../img/9e81cE821.svg'
import Vasdector from '../../img/Vasdector.svg'
import Vectasdaor from '../../img/Vectasdaor.svg'
import Ve123ctor from '../../img/Ve123ctor.svg'

import styles from './Pools.module.css'


function Pools() {

    const objCoin = [
        { id: 1, avatar: Vec234tor, name: "CVP", cap: "$ 913 017 336", Lock: "200 000 000", APR: "+ 2.43%", APR1: "+ 2.43%", APR2: "+ 2.43%", plusminus: "+ 2.43%", },
        { id: 2, avatar: sad, name: "CVP", cap: "$ 513 017 336", Lock: "$ 3 017 336", APR: "+ 2.43%", APR1: "+ 2.43%", APR2: "+ 2.43%", plusminus: "+ 2.43%", },
        { id: 3, avatar: av3, name: "CVP", cap: "$ 513 017 336", Lock: "$ 3 017 336", APR: "+ 2.43%", APR1: "+ 2.43%", APR2: "+ 2.43%", plusminus: "+ 2.43%", },
        { id: 4, avatar: av4, name: "CVP", cap: "$ 513 017 336", Lock: "$ 3 017 336", APR: "+ 2.43%", APR1: "+ 2.43%", APR2: "+ 2.43%", plusminus: "+ 2.43%", },
        { id: 5, avatar: av5, name: "CVP", cap: "$ 513 017 336", Lock: "$ 3 017 336", APR: "+ 2.43%", APR1: "+ 2.43%", APR2: "+ 2.43%", AplusminusPR: "+ 2.43%", plusminus: "--", }
    ]

    return (
        <div className={styles.Tat}>
            <div className={styles.wrapTitle}>
                <h1>
                    Pools
                </h1>
                <Link to="#">Смотреть все</Link>
            </div>
            <div className={styles.wrapCoinList}>

                <div className={styles.overFlowFor}>
                    <div className={styles.wrapCoin} >
                        <div className={styles.CoinList}>
                            <span>#Name</span>
                            <span>Cap</span>
                            <span>Lock</span>
                            <span>APR 1d</span>
                            <span>APR 30d?</span>
                            <span>APR 1y?</span>
                            <span>+/-?</span>
                        </div>
                        {objCoin.map(i => {
                            return (
                                <div className={styles.Element} key={i.id} >
                                    <span>{i.id} <img src={i.avatar} alt="" /> {i.name}</span>
                                    <span>{i.cap}</span>
                                    <span>{i.Lock}</span>
                                    <span>{i.APR}</span>
                                    <span>{i.APR1}</span>
                                    <span>{i.APR2}</span>
                                    <span>{i.plusminus}</span>
                                </div>
                            )
                        })}
                        <div className={styles.NavPageCoin}>
                            <div className={styles.kovVoPage}>
                                <span>5</span>
                                <img src={Vasdector} alt="" />
                            </div>
                            <span> 1–5 of 413</span>
                            <div className={styles.changePage}>
                                <img src={Vectasdaor} alt="" />
                                <img src={Ve123ctor} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Pools;

