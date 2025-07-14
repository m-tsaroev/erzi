import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { Services } from '@/pages/Services'
import { Home } from '@/pages/Home'
import { Catalog } from '@/pages/Catalog'
import { About } from '@/pages/About'
import { Contacts } from '@/pages/Contacts'
import { Cart } from '@/pages/Cart'
import { ProductList } from '@/pages/ProductList'
import { Profile } from '@/pages/Profile'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          {/* {isAdmin && <Route path='/product-list' element={<ProductList />} />} */}
          <Route index element={<Home />} />
          <Route path='services' element={<Services />} />
          <Route path='catalog' element={<Catalog />} />
          <Route path='about' element={<About />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='cart' element={<Cart />} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { Router }
