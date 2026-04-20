import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Shows from '@/components/Shows'
import Spotlight from '@/components/Spotlight'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="kente-divider" />
      <Shows />
      <div className="kente-divider" />
      <Spotlight />
      <Pricing />
      <Footer />
    </main>
  )
}
