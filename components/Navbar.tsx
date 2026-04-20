'use client'
import { useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className={styles.nav}>
      <div className="kente-band" />
      <div className={styles.inner}>
        <div className={styles.logo}>
          Mboka<span className={styles.accent}>Stream</span>
          <small>Biso na biso · Pour nous</small>
        </div>
        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          <li>Séries</li><li>Films</li><li>Ba nouvelles</li>
        </ul>
        <div className={styles.right}>
          <span className={styles.lang}>FR · Lingala</span>
          <button className={styles.cta}>Kobanda — S'abonner</button>
          <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
