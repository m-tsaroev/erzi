import { useEffect, useState } from 'react'
import './PupularProducts.scss'
import { getProducts } from '@/services/products/getProducts'
import { Link } from 'react-router-dom'
import deffaultImg from '@/assets/images/popular-products/bottles.png'
import { formatPrice } from '@/utils/formatPrice'

const PupularProducts = () => {
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
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false)
        console.log('lala');
      })
  }, [])

  if (isLoading) return <h1>...loading</h1>
  if (errorMessage) return <h1>{errorMessage}</h1>

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
        <Link to='/catalog'>перейти в каталог</Link>
      </header>
      <div className='popular-products__body'>
        <ul className='popular-products__list'>
          {products ? products.map(
            ({ id, title, description, price, image_url, quantity }, index) => {
              if (index >= 4) return 

              return (<li className='popular-products__item' key={id}>
                <div className='popular-products__item__body'>
                  <div className='popular-products__item-image'>
                    <img
                      src={image_url ? image_url : deffaultImg}
                      alt=''
                      width={232}
                      height={188}
                    />
                  </div>
                  <div className='popular-products__item-price'>
                    <span>{formatPrice(price)} ₽</span>
                    <span>{quantity}шт</span>
                  </div>
                  <div className='popular-products__item-info'>
                    <h5 className='popular-products__item-title'>{title}</h5>
                    <div className='popular-products__item-description'>
                      <p>{description}</p>
                    </div>
                  </div>
                </div>
              </li>)
            }
          ) : (
            <h1>
              Нет продуктов
            </h1>
          )}
        </ul>
      </div>
    </section>
  )
}

export { PupularProducts }
