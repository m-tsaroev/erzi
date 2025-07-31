import { useEffect, useState } from 'react'
import './PopularProducts.scss'
import { getProducts } from '@/services/productsServices/getProducts'
import deffaultImg from '@/assets/images/popular-products/bottles.png'
import { ProductCard } from '@/components/ui/ProductCard'
import { PATHS } from '@/config/paths'
import { NavigationLink } from '@/components/ui/NavigationLink'

const PopularProducts = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data)
      })
      .catch((err) => {
        setErrorMessage(err.message)
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  if (isLoading) return <h1>...loading</h1>
  if (errorMessage) return <h1>ошибка</h1>

  const titleId = 'Popular-products-title'

  return (
    <section
      className='popular-products popular-products__section container'
      aria-labelledby={titleId}
    >
      <header className='popular-products__header'>
        <h3 className='popular-products__title' id={titleId}>
          ПОПУЛЯРНАЯ ПРОДУКЦИЯ
        </h3>
      </header>
      <div className='popular-products__body'>
        <ul className='popular-products__list'>
          {products ? (
            products.map(
              (
                { id, title, description, price, image_url, quantity },
                index
              ) => {
                if (index >= 3) return

                return (
                  <ProductCard
                    key={id}
                    title={title}
                    description={description}
                    price={price}
                    image_url={image_url ? image_url : deffaultImg}
                    quantity={quantity}
                    className='popular-products__item'
                    isHomePage
                  />
                )
              }
            )
          ) : (
            <h1>Нет продуктов</h1>
          )}
        </ul>
        <div className='popular-products__overlay'>
          <NavigationLink
            className='popular-products__overlay-link'
            to={PATHS.CATALOG}
            title='Catalog'
          >
            Перейти в каталог
          </NavigationLink>
        </div>
      </div>
    </section>
  )
}

export { PopularProducts }
