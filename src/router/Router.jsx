import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { Services } from '@/pages/Services'
import { Home } from '@/pages/Home'
import { Catalog } from '@/pages/Catalog'
import { About } from '@/pages/About'
import { Contacts } from '@/pages/Contacts'
import { Cart } from '@/pages/Cart'
import { AuthLayout } from '@/layouts/AuthLayout'
import { Login } from '@/pages/Login'
import { Register } from '@/pages/Register'
import { ProductList } from '@/pages/ProductList'
import { useIsAdmin } from '@/hooks/useIsAdmin'

const Router = () => {
  const { isAdmin } = useIsAdmin()

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          {isAdmin && <Route path='/product-list' element={<ProductList />} />}
          <Route index element={<Home />} />
          <Route path='services' element={<Services />} />
          <Route path='catalog' element={<Catalog />} />
          <Route path='about' element={<About />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='cart' element={<Cart />} />
        </Route>

        <Route path='/' element={<AuthLayout />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { Router }
