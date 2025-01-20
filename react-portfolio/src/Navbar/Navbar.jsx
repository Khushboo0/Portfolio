import React,{useState} from 'react'
import styles from './Navbar.module.css'
import { getImages } from '../utils'

export const Navbar = () => {
  console.log(getImages("nav/menuIcon.png"))
  return (
    <nav className={styles.Navbar}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        <img className= {styles.menuBtn} src={getImages("nav/menuIcon.png")}/>
        <ul className={styles.menuItems}>
          <li>
            <a href="#about" >About</a>
          </li>
          <li>
            <a href="#experience" >Experience</a>
          </li>
          <li>
            <a href="/projects" >Projects</a>
          </li>
          <li>
            <a href="/contactus" >Contact us</a>
          </li>
        </ul>
      </div>
      </nav>
  )
}
