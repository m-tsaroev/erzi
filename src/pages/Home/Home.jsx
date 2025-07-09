import { Hero } from '@/sections/Hero'
import './Home.scss'
import { Way } from '@/sections/Way'
import { PopularProducts } from '@/sections/PopularProducts'

const Home = () => {
  return (
    <>
      <Hero />
      <Way />
      <PopularProducts />
    </>
  )
}

export { Home }
