import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      {/* Decorative elements */}
      <div className={styles.decorLeft} aria-hidden="true">
        <svg viewBox="0 0 120 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 10 Q10 80 60 150 Q110 220 60 290" stroke="#c4a96b" strokeWidth="0.8" strokeDasharray="4 6" fill="none"/>
          <circle cx="60" cy="10" r="3" fill="#c4a96b" opacity="0.5"/>
          <circle cx="60" cy="290" r="3" fill="#c4a96b" opacity="0.5"/>
        </svg>
      </div>

      <div className={styles.content}>
        <p className={`section-label ${styles.label}`}>Wedding Planner · Culiacán, Sinaloa</p>

        <h1 className={styles.title}>
          Tu historia de amor,
          <br />
          <em>hecha realidad</em>
        </h1>

        <p className={styles.subtitle}>
          Cada detalle cuidado con amor. Cada momento, eterno.
        </p>

        <div className={styles.ctas}>
          <a href="#contacto" className={styles.btnPrimary}>Comenzar juntas</a>
          <a href="#galería" className={styles.btnGhost}>Ver galería</a>
        </div>
      </div>

      <div className={styles.decorRight} aria-hidden="true">
        <div className={styles.floralRight}>✦</div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span />
      </div>
    </section>
  )

}
