import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.section} id="contacto">
      <div className={styles.inner}>
        <p className="section-label">Contacto</p>

        <h2 className={styles.heading}>
          Comencemos a<br />
          <em>escribir tu historia</em>
        </h2>

        <p className={styles.body}>
          ¿Lista para dar el primer paso? Cuéntame sobre tu sueño
          y con gusto te ayudo a hacerlo realidad.
        </p>

        <div className={styles.info}>
          <a href="https://wa.me/526674591598" target="_blank" rel="noopener noreferrer" className={styles.infoItem}>
  <span>📱</span> +52 667 459 1598
          </a>
          <a href="mailto:rociotheplanner@gmail.com" className={styles.infoItem}>
            <span>✉</span> rociotheplanner@gmail.com
          </a>
          <span className={styles.infoItem}>
            <span>📍</span> Culiacán, Sinaloa
          </span>
        </div>
      </div>
    </section>
  )
}