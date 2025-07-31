import './CatalogProducts.scss'
import { useState, useEffect } from 'react'
import { getProducts } from '@/services/productsServices/getProducts'
import InlineSVG from 'react-inlinesvg'
import { ProductCard } from '@/components/ui/ProductCard'
import deffaultImg from '@/assets/images/popular-products/bottles.png'
import { FilterChip } from '@/components/ui/FilterChip'

const CatalogProducts = () => {
  const storageKey = 'productCategories'

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const [searchFieldValue, setSearchFieltValue] = useState('')
  const [categories, setCategories] = useState([])
  const [productInCategories, setProductInCategories] = useState(
    JSON.parse(sessionStorage.getItem(storageKey)) || []
  )

  useEffect(() => {
    getProducts()
      .then((data) => {
        data = data ? data : []
        setProducts(data)
        data.forEach(({ category }) => {
          setCategories((nowCategory) => [
            ...new Set([...nowCategory, category]),
          ])
        })
      })
      .catch((err) => {
        setErrorMessage(err.message)
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  const sortedProducts = products.filter(({ title, category }) => {
    return (
      (productInCategories.length > 0
        ? productInCategories.some((productInCategory) => {
            return productInCategory === category
          })
        : true) && title.toLowerCase().includes(searchFieldValue.toLowerCase())
    )
  })

  const titleId = 'Catalog-products-section'

  const onChangeField = (event) => {
    setSearchFieltValue(event.target.value)
  }

  const onResetButtonClick = () => {
    setSearchFieltValue('')
  }

  const onFilterChipClick = (event) => {
    const { target } = event
    const categoryName = target.innerText

    setProductInCategories((categoriesList) => {
      if (!categoriesList.includes(categoryName)) {
        sessionStorage.setItem(
          storageKey,
          JSON.stringify([...categoriesList, categoryName])
        )
        return [...categoriesList, categoryName]
      } else {
        const filtedCategories = categoriesList.filter((categoriesItem) => {
          return categoriesItem !== categoryName
        })

        sessionStorage.setItem(storageKey, JSON.stringify(filtedCategories))

        return filtedCategories
      }
    })
  }

  return (
    <section
      className='catalog-products__section catalog-products'
      aria-labelledby={titleId}
    >
      <h1 className='visually-hidden' id={titleId}>
        Catalog products
      </h1>
      <header className='catalog-products__header container'>
        <div className='catalog-products__search'>
          <div className='catalog-products__search-icon'>
            <InlineSVG
              title='Search'
              src='/search.svg'
              width={16}
              height={16}
            />
          </div>
          <input
            type='text'
            className='catalog-products__search-field'
            value={searchFieldValue}
            onChange={onChangeField}
            placeholder='Поиск'
          />
          {searchFieldValue.length > 3 && (
            <div
              className='catalog-products__search-reset-button'
              onClick={onResetButtonClick}
            >
              <InlineSVG
                title='Reset'
                src='/cross.svg'
                width={16}
                height={16}
              />
            </div>
          )}
        </div>
        <div className='catalog-products__filter-chips'>
          {categories.map((category, index) => (
            <FilterChip
              title={category}
              isChecked={productInCategories.includes(category)}
              key={index}
              onClick={onFilterChipClick}
            />
          ))}
        </div>
      </header>
      <div className='catalog-products__body container'>
        <ul className='catalog-products__list'>
          {isLoading ? (
            <h1>loading...</h1>
          ) : errorMessage ? (
            <h1>error</h1>
          ) : products.length === 0 ? (
            <h1>Каталог пустой</h1>
          ) : sortedProducts.length !== 0 ? (
            sortedProducts.map(
              ({ id, title, description, price, image_url, quantity }) => {
                return (
                  <ProductCard
                    id={id}
                    key={id}
                    title={title}
                    description={description}
                    price={price}
                    image_url={image_url ? image_url : deffaultImg}
                    quantity={quantity}
                    className='popular-products__item'
                    modeButton='black'
                  />
                )
              }
            )
          ) : (
            <h1>Нет продуктов по запросу "{searchFieldValue}"</h1>
          )}
        </ul>
      </div>
    </section>
  )
}

export { CatalogProducts }
