import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'

import styles from "./Header.module.css"

import logo from "../../assets/logo.png"
import cartImg from "../../assets/cart.svg"

export default class Header extends Component {
  render() {
    return (
      <header className={styles.headerContainer}>
        <div>
          <Navbar/>
        </div>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <select name="curency" id="curency">
            <option value="dollar">$ USD</option>
            <option value="dollar">$ EUR</option>
            <option value="dollar">$ JPY</option>
          </select>
          <img src={cartImg} alt="cart" />
        </div>
      </header>
    )
  }
}
