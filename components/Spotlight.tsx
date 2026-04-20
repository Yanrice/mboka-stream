import styles from './Spotlight.module.css'

export default function Spotlight() {
  return (
    <div className={styles.wrap}>
      <div className={styles.box}>
        <div className={styles.accent} />
        <div className={styles.label}>Partenaire exclusif · Lolenge ya sika</div>
        <div className={styles.name}>SB Production</div>
        <div className={styles.sub}>Sila Bisalu Officiel — Kinshasa, DRC</div>
        <div className={styles.stats}>
          {[
            { val: '6', lbl: 'Séries originales' },
            { val: '50K+', lbl: 'Abonnés YouTube' },
            { val: '2025–26', lbl: 'Production active' },
          ].map(({ val, lbl }) => (
            <div key={lbl} className={styles.stat}>
              <div className={styles.statVal}>{val}</div>
              <div className={styles.statLbl}>{lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
