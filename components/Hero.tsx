import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.stripe} />
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.flags}>
              <span className={styles.flagDrc} />
              <span className={styles.flagCob} />
            </span>
            DRC · Congo-Brazzaville · Diaspora
          </div>
          <h1 className={styles.h1}>
            Bilili<br />
            <span className={styles.red}>na</span>{' '}
            <span className={styles.gold}>Mboka</span>
          </h1>
          <p className={styles.tagline}>Les histoires de chez nous, partout dans le monde</p>
          <p className={styles.desc}>
            Toutes les séries de <strong>SB Production</strong> — Sans Pitié,
            Destin Brisé, Le Poids du Silence — en exclusivité. Regardez depuis
            Bruxelles, Paris, Atlanta, Montréal.
          </p>
          <div className={styles.actions}>
            <button className={styles.btnPrimary}>Kobanda kosepela →</button>
            <button className={styles.btnGhost}>Voir les séries</button>
          </div>
        </div>
        <div className={styles.badges}>
          <div className={styles.badge}>
            <div className={`${styles.badgeNum} ${styles.numGold}`}>6+</div>
            <div className={styles.badgeLbl}>Séries</div>
          </div>
          <div className={styles.badge}>
            <div className={`${styles.badgeNum} ${styles.numBlue}`}>50+</div>
            <div className={styles.badgeLbl}>Épisodes</div>
          </div>
          <div className={styles.badge}>
            <div className={`${styles.badgeNum} ${styles.numGreen}`}>4K</div>
            <div className={styles.badgeLbl}>Qualité</div>
          </div>
        </div>
      </div>
    </section>
  )
}
