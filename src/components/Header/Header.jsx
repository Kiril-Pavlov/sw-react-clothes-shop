import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'

import styles from "./Header.module.css"

import logo from "../../assets/logo.png"

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
        <div>Actions</div>
      </header>
    )
  }
}
