import styles from './Sidebar.module.css'

const NAV = [
  { icon: '⌂', label: 'Accueil',   active: true  },
  { icon: '▶', label: 'Séries',    active: false },
  { icon: '♪', label: 'Films',     active: false },
  { icon: '★', label: 'Ma liste',  active: false },
  { icon: '◎', label: 'Nouveaux',  active: false },
  { icon: '⚡', label: 'Live',      active: false },
]

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        M<span>S</span>
      </div>
      <nav className={styles.nav}>
        {NAV.map(({ icon, label, active }) => (
          <button key={label} className={`${styles.navItem} ${active ? styles.active : ''}`} title={label}>
            <span className={styles.icon}>{icon}</span>
            <span className={styles.label}>{label}</span>
          </button>
        ))}
      </nav>
      <div className={styles.bottom}>
        <div className={styles.avatar}>YR</div>
      </div>
    </aside>
  )
}
