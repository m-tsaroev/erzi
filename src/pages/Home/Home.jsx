import { Hero } from '@/sections/Hero'
import './Home.scss'
import { Way } from '@/sections/Way'
import { PupularProducts } from '@/sections/PupularProducts'

const Home = () => {
  return (
    <>
      <Hero />
      <Way />
      <PupularProducts />
    </>
  )
}

export { Home }
