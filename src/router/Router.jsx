import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserLayout } from '@/layouts/UserLayout'
import { Services } from '@/pages/Services'
import { Home } from '@/pages/Home'
import { Catalog } from '@/pages/Catalog'
import { About } from '@/pages/About'
import { Contacts } from '@/pages/Contacts'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { Router }
