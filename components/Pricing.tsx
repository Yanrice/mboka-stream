import styles from './Pricing.module.css'

const PLANS = [
  {
    tier: 'Essentiel',
    price: '$4',
    cents: '.99',
    perks: ['Catalogue complet', '1 écran · HD', 'Sous-titres FR'],
    hot: false,
  },
  {
    tier: 'Premium',
    price: '$7',
    cents: '.99',
    perks: ['Catalogue complet', '2 écrans · Full HD', 'Épisodes exclusifs', 'Avant-premières'],
    hot: true,
    badge: 'Eloko ya kolinga',
  },
  {
    tier: 'Libota · Famille',
    price: '$12',
    cents: '.99',
    perks: ['Catalogue complet', '4 écrans · 4K', 'Téléchargements offline', 'Profils enfants'],
    hot: false,
  },
]

export default function Pricing() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>Choisissez · Pona yo</div>
        <h2 className={styles.title}>Votre formule d'abonnement</h2>

        <div className={styles.plans}>
          {PLANS.map((plan) => (
            <div key={plan.tier} className={`${styles.plan} ${plan.hot ? styles.hot : ''}`}>
              {plan.hot && plan.badge && (
                <div className={styles.badge}>{plan.badge}</div>
              )}
              <div className={styles.planTier}>{plan.tier}</div>
              <div className={styles.planPrice}>
                {plan.price}
                <span className={styles.cents}>{plan.cents}</span>
              </div>
              <div className={styles.planMo}>/ mois</div>
              <ul className={styles.perks}>
                {plan.perks.map((p) => (
                  <li key={p} className={styles.perk}>{p}</li>
                ))}
              </ul>
              <button className={styles.btn}>Kobanda</button>
            </div>
          ))}
        </div>

        <p className={styles.note}>
          Accès illimité · Annulez à tout moment · Paiement sécurisé via Stripe
        </p>
      </div>
    </section>
  )
}
