import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span className={styles.logoR}>R</span>
          <span className={styles.logoText}>ocío</span>
          <span className={styles.logoSub}>Wedding Planner</span>
        </div>

        <p className={styles.copy}>
          © {new Date().getFullYear()} Rocío Wedding Planner · Hecho con amor en México 🌸
        </p>

        <div className={styles.socials}>
          {/* Ajusta tus links */}
          <a href="https://www.instagram.com/rociohidalgoweddingandevents/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="5"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}