import { useLocation } from 'react-router-dom'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  const location = useLocation()

  const isHomePage = location.pathname === '/'

  document.body.classList.toggle('home', isHomePage)

  return (
    <>
      <Header />
      <main className='content'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export { MainLayout }
