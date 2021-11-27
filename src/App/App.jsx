import React from 'react'


import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Header from './../Header/Header'
import BurgerMenu from './../burgerMenu/burgerMenu'
import MainBlock from '../mainBlocks/mainBlocks';
import FAQ from '../FAQ/FAQ';
import ABOUT from '../ABOUT/ABOUT';
import ModalLickv from '../ModalLickv/ModalLickv';

import styles from './App.module.css'
import { useState } from 'react/cjs/react.development';
function App() {

  const [ModalVisibl, SetModalVisib] = useState(false)


  return (
    <BrowserRouter>
      <div className={styles.App}>
        <ModalLickv visible={ModalVisibl} setVisible={SetModalVisib} />
        <BurgerMenu SetModalVisib={SetModalVisib} />

        <div className={styles.mainBlock}>
          <Header SetModalVisib={SetModalVisib} />


          <Routes>

            <Route exact path="/Swap" element={<MainBlock />} />

            <Route exact path="/FAQ" element={<FAQ />} />

            <Route exact path="/About" element={<ABOUT />} />


            <Route path="*" element={<Navigate replace to="/Swap" />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
