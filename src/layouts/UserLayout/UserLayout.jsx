import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
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

export { UserLayout }
