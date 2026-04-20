import styles from './ShowsGrid.module.css'

const SHOWS = [
  { title: 'Sans Pitié',               genre: 'Drame · Thriller',   season: 'Saison 1', year: '2025', rating: '8.2', tag: 'Nouveau', tagClass: 'tagRed',   bg: 'linear-gradient(160deg,#6b1200 0%,#1a0500 60%,#0a0a0f 100%)' },
  { title: 'Le Poids du Silence',      genre: 'Drame',              season: 'Saison 1', year: '2025', rating: '8.7', tag: 'Exclusif',tagClass: 'tagBlue',  bg: 'linear-gradient(160deg,#003b70 0%,#001020 60%,#0a0a0f 100%)' },
  { title: 'Destin Brisé',             genre: 'Drame',              season: 'Saison 1', year: '2025', rating: '7.9', tag: 'En cours', tagClass: 'tagGreen', bg: 'linear-gradient(160deg,#003b20 0%,#001008 60%,#0a0a0f 100%)' },
  { title: 'La Demoiselle de la Mort', genre: 'Thriller',           season: 'Saison 1', year: '2025', rating: '8.4', tag: 'SB Prod', tagClass: 'tagGold',  bg: 'linear-gradient(160deg,#4a2000 0%,#1a0800 60%,#0a0a0f 100%)' },
  { title: 'Témoin Coupable',          genre: 'Drame · Judiciaire', season: 'Saison 1', year: '2026', rating: '8.1', tag: '2026',    tagClass: 'tagBlue',  bg: 'linear-gradient(160deg,#002870 0%,#000820 60%,#0a0a0f 100%)' },
  { title: 'Mariage du Péché',         genre: 'Drame · Romance',    season: 'Saison 1', year: '2025', rating: '7.6', tag: null,      tagClass: null,       bg: 'linear-gradient(160deg,#3b2800 0%,#180e00 60%,#0a0a0f 100%)' },
]

export default function ShowsGrid() {
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
            <div className={styles.cardBody}>
              <div className={styles.meta}>
                <span className={styles.year}>{s.year}</span>
                <span className={styles.ratingBadge}>★ {s.rating}</span>
              </div>
              <div className={styles.cardTitle}>{s.title}</div>
              <div className={styles.cardSub}>{s.season} · {s.genre}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
