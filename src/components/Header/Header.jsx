import React, { Component } from 'react'

import styles from "./Header.module.css"

export default class Header extends Component {
  render() {
    return (
      <header className={styles.headerContainer}>
        <div>Navbar</div>
        <div>Logo</div>
        <div>Actions</div>
      </header>
    )
  }
}
