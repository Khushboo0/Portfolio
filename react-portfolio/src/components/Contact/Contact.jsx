import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
   <footer className={styles.container}>
    <div className={styles.text}>
        <h2 >Contact</h2>
        <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:patelkhushboo057@gmail.com">patelkhushboo057@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon" />
            <a href="https://www.linkedin.com/in/khushboo-patel-383722151/">linked.com/khushboo</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            <a href="https://github.com/Khushboo0">github.com/khushboo</a>
        </li>
    </ul>
   </footer>
  )
}
