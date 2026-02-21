import styles from './Services.module.css'

const services = [
  {
    icon: '◇',
    title: 'Boda Completa',
    desc: 'Desde la propuesta hasta el último baile. Me encargo de cada detalle para que tú solo disfrutes.',
  },
  {
    icon: '◈',
    title: 'Coordinación del Día',
    desc: 'Ya tienes todo planeado. Yo me aseguro de que cada pieza encaje perfectamente el gran día.',
  },
  {
    icon: '◉',
    title: 'Diseño Floral',
    desc: 'Arreglos personalizados que reflejan tu personalidad. Flores que cuentan tu historia.',
  },
  {
    icon: '◌',
    title: 'Decoración & Ambientación',
    desc: 'Transformamos cualquier espacio en el escenario perfecto para tu cuento de hadas.',
  },
]

export default function Services() {
  return (
    <section className={styles.section} id="servicios">
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className="section-label">Servicios</p>
          <h2 className={styles.heading}>
            Todo lo que<br />
            <em>necesitas</em>
          </h2>
          <p className={styles.body}>
            Cada boda es única, como la historia que la precede.
            Trabajo contigo para crear una experiencia completamente personalizada,
            donde cada decisión refleja quiénes son como pareja.
          </p>
          <a href="#contacto" className={styles.btn}>Platiquemos →</a>
        </div>

        <div className={styles.cards}>
          {services.map((s, i) => (
            <div key={i} className={styles.card} style={{ animationDelay: `${i * 0.1}s` }}>
              <span className={styles.icon}>{s.icon}</span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}