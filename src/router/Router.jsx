import { UserLayout } from "@/layouts/UserLayout"
import { Home } from "@/pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { Router }