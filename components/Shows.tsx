import styles from './Shows.module.css'

const SHOWS = [
  { title: 'Sans Pitié',              genre: 'Drame · Thriller',    eps: '12 épisodes', tag: 'Nouveau', tagClass: 'tagRed',   bg: 'linear-gradient(145deg,#5c0a00,#1a0500,#08090a)' },
  { title: 'Le Poids du Silence',     genre: 'Drame',               eps: '10 épisodes', tag: 'Exclusif',tagClass: 'tagBlue',  bg: 'linear-gradient(145deg,#003d7a,#001428,#08090a)' },
  { title: 'Destin Brisé',            genre: 'Drame',               eps: 'En cours',    tag: '2025',    tagClass: 'tagGreen', bg: 'linear-gradient(145deg,#003d20,#001408,#08090a)' },
  { title: 'La Demoiselle de la Mort',genre: 'Thriller',            eps: '14 épisodes', tag: 'SB Prod', tagClass: 'tagGold',  bg: 'linear-gradient(145deg,#3d1400,#1a0800,#08090a)' },
  { title: 'Témoin Coupable',         genre: 'Drame · Judiciaire',  eps: 'En cours',    tag: '2026',    tagClass: 'tagBlue',  bg: 'linear-gradient(145deg,#00287a,#000e28,#08090a)' },
  { title: 'Mariage du Péché',        genre: 'Drame · Romance',     eps: '11 épisodes', tag: null,      tagClass: null,       bg: 'linear-gradient(145deg,#3d2800,#1a1000,#08090a)' },
]

export default function Shows() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Ba séries <span className={styles.accent}>ya sika</span></h2>
        <span className={styles.link}>Matanga nyonso →</span>
      </div>
      <div className={styles.grid}>
        {SHOWS.map((s) => (
          <div key={s.title} className={styles.card} style={{ background: s.bg }}>
            <div className={styles.overlay} />
            {s.tag && s.tagClass && (
              <div className={`${styles.tag} ${styles[s.tagClass as keyof typeof styles]}`}>{s.tag}</div>
            )}
            <div className={styles.body}>
              <div className={styles.genre}>{s.genre}</div>
              <div className={styles.cardTitle}>{s.title}</div>
              <div className={styles.eps}>{s.eps}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
