import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styles from "./Navbar.module.css"

export default class Navbar extends Component {
  render() {
    
  let navLinks = [
    {linkName:"women",linkTo:"/"},
    {linkName:"men",linkTo:"/men"},
    {linkName:"kids",linkTo:"/kids"},
  ]

    return (
      <nav className={styles.navbarContainer}>
        {navLinks.map(link =>{
            return(
                <Link to={link.linkTo} key={link.linkName} className={styles.navbarLink}>{link.linkName}</Link>
            )
        })}
      </nav>
    )
  }
}
