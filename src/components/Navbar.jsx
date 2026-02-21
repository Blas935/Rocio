import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = ['Inicio', 'Servicios', 'Galería', 'Sobre Mí', 'Contacto']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
     <a href="#" className={styles.logo}>
  <img src="/images/logo.png" alt="Rocío Wedding Planner" />
</a>

      <ul className={`${styles.links} ${open ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase().replace(' ', '-')}`} onClick={() => setOpen(false)}>
              {l}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Menú"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}