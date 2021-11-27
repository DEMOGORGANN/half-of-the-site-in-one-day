import React, { useEffect } from "react";

import fi_x from './../img/fi_x.svg'
import ETH from './../img/ETH.svg'
import arrowLang from '../img/arrowLang.svg'
import Cardano from './../img/Cardano.svg'
import Tild5 from './../img/Tild5.svg'
import BinanceCoin from './../img/BinanceCoi.svg'
import Setting from './../img/Setting.svg'


import styles from './ModalLickv.module.css'

export default function ModalLickv({ visible, setVisible }) {

    useEffect(() => {
        document.querySelector("body").style.overflow = visible ? "hidden" : "auto";
    }, [visible])


    if (visible === false) {
        return null;
    } else {
        return (
            <div className={styles.modal} onClick={() => setVisible(false)}>
                <div className={styles.modalDialog} onClick={e => e.stopPropagation()}>
                    <div className={styles.wrapTitleModdal}>
                        <span>Добавить ликвидность</span>
                        <img src={fi_x} alt="" onClick={() => setVisible(false)} />
                    </div>
                    <hr />

                    <div className={styles.wrapfirsEl}>
                        <div className={styles.elemOne}>
                            <div className={styles.Obmen1}>
                                <span>Обменять</span>
                                <div className={styles.wrapInfoVal} onClick={() => setVisible(true)}>
                                    <img src={ETH} alt="" />
                                    <span>ETH</span>
                                    <img src={arrowLang} alt="" />
                                </div>
                            </div>
                            <div className={styles.Max}>
                                <span>MAX</span>
                            </div>
                            <div className={styles.Balance}>
                                <span>Баланс: 0.045234</span>
                                <h3>50</h3>
                                <span>~ $ 12 220.00</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.TwoEl}>
                        <span>Получить</span>
                        <div className={styles.valuts}>
                            <div className={styles.valutsAndImg}>
                                <img src={Cardano} alt="" />
                                <span>USDT / BUSD</span>
                                <img src={arrowLang} alt="" />
                            </div>
                            <span>50</span>
                        </div>
                        <div className={styles.InfVal}>
                            <span>Est. Pool Allocation</span>
                            <span>Share in Pools</span>
                        </div>
                        <div className={styles.Prices}>
                            <span>$0.00</span>
                        </div>
                        <div className={styles.OneCript}>
                            <div className={styles.imgAndval}>
                                <img src={Tild5} alt="" />
                                <span>0 USDT</span>
                            </div>
                            <span>Est. Daily Fee Income</span>
                        </div>
                        <div className={styles.OneCript}>
                            <div className={styles.imgAndval}>
                                <img src={BinanceCoin} alt="" />
                                <span>0 USDT</span>
                            </div>
                            <span>$0.00</span>
                        </div>
                        <div className={styles.OneEl}>
                            <div className={styles.SettTrans}>
                                <h2>Настройки транзакции</h2>
                                <img src={Setting} alt="" />
                            </div>
                            <div className={styles.Block}>
                                <h2>
                                    Допуск Проскальзывания
                                </h2>
                                <span>
                                    3.00%
                                </span>
                            </div>
                            <div className={styles.Block}>
                                <h2>
                                    Скорость транзакции
                                </h2>
                                <span>
                                    Быстро
                                </span>
                            </div>
                            <div className={styles.Block}>
                                <h2>
                                    Разрешение
                                </h2>
                                <span>
                                    Ограничено
                                </span>
                            </div>
                        </div>
                        <div className={styles.TwoElem} >
                            <span>Estimated Gas Fee</span>
                            <h2>-</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}