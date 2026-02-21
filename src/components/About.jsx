import styles from './About.module.css'

const highlights = [
  { number: '200+', label: 'Bodas realizadas' },
  { number: '16+',    label: 'Años de experiencia' },
  { number: '100%', label: 'Clientes felices' },
]

export default function About() {
  return (
    <section className={styles.section} id="sobre-mí">
      <div className={styles.inner}>

        {/* Image side */}
        <div className={styles.imageSide}>
          <div className={styles.imageFrame}>
            <div className={styles.imagePlaceholder} aria-label="Rocio.png">
              <img src="/images/Rocio.png" alt="Rocío Wedding Planner" />
            </div>
            <div className={styles.imageAccent} aria-hidden="true" />
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            {highlights.map((h) => (
              <div key={h.label} className={styles.stat}>
                <span className={styles.statNumber}>{h.number}</span>
                <span className={styles.statLabel}>{h.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Text side */}
        <div className={styles.textSide}>
          <p className="section-label">Sobre Mí</p>

          <h2 className={styles.heading}>
            Hola, soy<br />
            <em>Rocío</em>
          </h2>

          <p className={styles.body}>
            Soy wedding planner con sede en Culiacán,Sinaloa, especializada en crear
            bodas íntimas y elegantes que reflejan la esencia única de cada pareja.
            Creo que cada amor merece una celebración que lo cuente.
          </p>

          <p className={styles.body}>
            Mi proceso comienza con escucharte: tus sueños, tus miedos, tus ideas
            más descabelladas. A partir de ahí, construimos juntas una experiencia
            que será exactamente lo que imaginaste — y un poco más.
          </p>

          <div className={styles.signature}>
            <span>Rocío</span>
          </div>

          <a href="#contacto" className={styles.btn}>
            Conoce más →
          </a>
        </div>

      </div>
    </section>
  )
}
