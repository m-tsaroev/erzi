import { CartItem } from '@/components/ui/CartItem'
import './CartSection.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCartItems } from '@/store/slices/cartSlice'
import { OrderSummary } from './components/OrderSummary'
import { DeleteAllButton } from './components/DeleteAllButton'
import { round2 } from '@/utils/round2'

const CartSection = () => {
  const titleId = 'cart'
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartItems())
  }, [dispatch])

  const { cartItems } = useSelector((state) => state.cart)

  const sorteredCartItems = [...cartItems].sort((a, b) =>
    a.product.title.localeCompare(b.product.title, 'ru')
  )

  const quantity = cartItems
    ? cartItems
        .map(({ quantity }) => quantity)
        .reduce((number, nextNumber) => number + nextNumber, 0)
    : 0

  const summ = cartItems
    ? cartItems
        .map(({ product, quantity }) => product.price * quantity)
        .reduce((price, nextPrice) => price + round2(nextPrice), 0)
    : 0

  return (
    <section className='cart-section cart' aria-labelledby={titleId}>
      <div className='cart__inner inner container'>
        <div className='cart__body'>
          <header className='cart__header'>
            <h1 className='cart__title' id={titleId}>
              Корзина
            </h1>
            <DeleteAllButton />
          </header>

          <ul className='cart__items'>
            {sorteredCartItems.length !== 0 ? (
              sorteredCartItems
                .sort((a, b) =>
                  a.product.title.localeCompare(b.product.title, 'ru')
                )
                .map((cartItem) => {
                  return <CartItem key={cartItem.id} {...cartItem} />
                })
            ) : (
              <h1>Корзина пуста</h1>
            )}
          </ul>
        </div>
        <OrderSummary quantity={quantity} summ={summ} />
      </div>
    </section>
  )
}

export { CartSection }
