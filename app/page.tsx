import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import HeroBanner from '@/components/HeroBanner'
import ShowsGrid from '@/components/ShowsGrid'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div className="kente" />
        <Topbar />
        <main style={{ flex: 1, overflowY: 'auto' }}>
          <HeroBanner />
          <ShowsGrid />
          <Pricing />
          <Footer />
        </main>
      </div>
    </div>
  )
}
