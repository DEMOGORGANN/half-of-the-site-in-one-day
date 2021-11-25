import React from 'react'

import {
  BrowserRouter,
} from "react-router-dom";

import Header from './../Header/Header'
import BurgerMenu from './../burgerMenu/burgerMenu'

import styles from './App.module.css'
function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <BurgerMenu />
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
