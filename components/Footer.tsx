import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="kente" />
      <div className={styles.inner}>
        <div className={styles.logo}>Mboka<span>Stream</span></div>
        <div className={styles.tagline}>Biso na biso — La diaspora congolaise mérite mieux.</div>
        <div className={styles.links}>
          <span>Confidentialité</span><span>·</span><span>CGU</span><span>·</span><span>© 2026</span>
        </div>
      </div>
    </footer>
  )
}
