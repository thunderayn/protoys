import { Outlet } from 'react-router-dom'
import Navbar from '../blocks/Navbar'
import Footer from '../blocks/Footer'

export default function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
