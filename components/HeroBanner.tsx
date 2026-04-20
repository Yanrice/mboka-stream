import styles from './HeroBanner.module.css'

export default function HeroBanner() {
  return (
    <section className={styles.hero}>
      {/* Cinematic gradient bg simulating a film still */}
      <div className={styles.bg}>
        <div className={styles.bgGrad} />
        <div className={styles.bgScene} />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.content}>
        <div className={styles.flags}>
          <span className={styles.flagDrc} />
          <span className={styles.flagCob} />
          <span className={styles.featuredLabel}>Exclusif SB Production</span>
        </div>

        <h1 className={styles.h1}>
          Bilili<br />
          <span className={styles.cRed}>na</span>{' '}
          <span className={styles.cGold}>Mboka</span>
        </h1>

        <p className={styles.tagline}>Les histoires de chez nous, partout dans le monde</p>

        <p className={styles.desc}>
          Toutes les séries de <strong>SB Production</strong> — Sans Pitié,
          Destin Brisé, Le Poids du Silence — en exclusivité. Regardez depuis
          Bruxelles, Paris, Atlanta, Montréal.
        </p>

        <div className={styles.filters}>
          {['Séries', 'Genre', 'Pays', 'Année', 'Note'].map((f) => (
            <button key={f} className={styles.filterBtn}>
              {f} ▾
            </button>
          ))}
        </div>

        <div className={styles.actions}>
          <button className={styles.btnPlay}>▶ Kobanda kosepela</button>
          <button className={styles.btnGhost}>+ Ma liste</button>
        </div>
      </div>

      <div className={styles.badges}>
        <div className={styles.badge}><span style={{color:'var(--gold)'}}>6+</span><small>Séries</small></div>
        <div className={styles.badge}><span style={{color:'var(--blue)'}}>50+</span><small>Épisodes</small></div>
        <div className={styles.badge}><span style={{color:'var(--green)'}}>4K</span><small>Qualité</small></div>
      </div>
    </section>
  )
}
