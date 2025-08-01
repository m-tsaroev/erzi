import { Hero } from '@/sections/Hero'
import './Home.scss'
import { PopularProducts } from '@/sections/PopularProducts'
import { Quality } from '@/sections/Quality'

const Home = () => {
  return (
    <>
      <Hero />
      <PopularProducts />
      <Quality />
    </>
  )
}

export { Home }
