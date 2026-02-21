import { useState, useEffect, useCallback } from 'react'
import styles from './Slideshow.module.css'

// Las imágenes deben estar en /public/images/rocio1.png ... rocio6.png
const slides = [
  { src: '/images/rocio 1.png', alt: 'Boda Rocío — 1' },
  { src: '/images/Rocio 2.png', alt: 'Boda Rocío — 2' },
  { src: '/images/Rocio 3.png', alt: 'Boda Rocío — 3' },
  { src: '/images/Rocio 4.png', alt: 'Boda Rocío — 4' },
  { src: '/images/Rocio 5.png', alt: 'Boda Rocío — 5' },
  { src: '/images/Rocio 6.png', alt: 'Boda Rocío — 6' },
  { src: '/images/Boda 1.png', alt: 'Boda Rocío — 7' },
  { src: '/images/boda 2.png', alt: 'Boda Rocío — 8' },
  { src: '/images/Boda 3.png', alt: 'Boda Rocío — 9' },
  { src: '/images/Boda 4.png', alt: 'Boda Rocío — 10' },
]

export default function Slideshow() {
  const [current, setCurrent]   = useState(0)
  const [animDir, setAnimDir]   = useState('next')
  const [paused, setPaused]     = useState(false)

  const goTo = useCallback((index, dir = 'next') => {
    setAnimDir(dir)
    setCurrent(index)
  }, [])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 'next')
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, 'prev')
  }, [current, goTo])

  // Autoplay
  useEffect(() => {
    if (paused) return
    const id = setTimeout(next, 4500)
    return () => clearTimeout(id)
  }, [current, paused, next])

  return (
    <section className={styles.section} id="galería">
      <div className={styles.header}>
        <p className="section-label">Galería</p>
        <h2 className={styles.heading}>Momentos que perduran</h2>
        <div className={styles.divider} aria-hidden="true" />
      </div>

      <div
        className={styles.stage}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Main image */}
        <div className={styles.mainFrame}>
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`
                ${styles.slide}
                ${i === current ? styles.active : ''}
                ${i === current && animDir === 'next' ? styles.enterNext : ''}
                ${i === current && animDir === 'prev' ? styles.enterPrev : ''}
              `}
            >
              <img src={slide.src} alt={slide.alt} />
              <div className={styles.vignette} aria-hidden="true" />
            </div>
          ))}

          {/* Arrows */}
          <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prev} aria-label="Anterior">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Siguiente">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Thumbnails */}
        <div className={styles.thumbs}>
          {slides.map((slide, i) => (
            <button
              key={i}
              className={`${styles.thumb} ${i === current ? styles.thumbActive : ''}`}
              onClick={() => goTo(i, i > current ? 'next' : 'prev')}
              aria-label={`Slide ${i + 1}`}
            >
              <img src={slide.src} alt={slide.alt} />
            </button>
          ))}
        </div>

        {/* Dots */}
        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => goTo(i, i > current ? 'next' : 'prev')}
              aria-label={`Ir a slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}