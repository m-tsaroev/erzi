import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserLayout } from '@/layouts/UserLayout'
import { Services } from '@/pages/Services'
import { Home } from '@/pages/Home'
import { Catalog } from '@/pages/Catalog'
import { About } from '@/pages/About'
import { Contacts } from '@/pages/Contacts'
import { Cart } from '@/pages/Cart'
import { AuthLayout } from '@/layouts/AuthLayout'
import { Login } from '@/pages/Login'
import { Register } from '@/pages/Register'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserLayout />}>
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
