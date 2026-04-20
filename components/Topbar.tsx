import styles from './Topbar.module.css'

export default function Topbar() {
  return (
    <header className={styles.topbar}>
      <div className={styles.left}>
        <div className={styles.mobileLogo}>Mboka<span>Stream</span></div>
      </div>
      <div className={styles.search}>
        <span className={styles.searchIcon}>⌕</span>
        <input type="text" placeholder="Rechercher une série, un film..." className={styles.input} />
      </div>
      <div className={styles.right}>
        <button className={styles.iconBtn} title="Ajouter">＋</button>
        <button className={styles.iconBtn} title="Notifications">🔔</button>
        <div className={styles.avatar}>YR</div>
        <button className={styles.cta}>S'abonner</button>
      </div>
    </header>
  )
}
