import { CartItem } from '@/components/ui/CartItem'
import './CartSection.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCartItems } from '@/store/slices/cartSlice'
import { OrderSummary } from './components/OrderSummary'

const CartSection = () => {
  const titleId = 'cart'
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartItems())
  }, [dispatch])

  const { cartItems, loading, error } = useSelector((state) => state.cart)

  const quantity = cartItems
    ? cartItems
        .map(({ quantity }) => quantity)
        .reduce((number, nextNumber) => number + nextNumber, 0)
    : 0

  const summ = cartItems
    ? cartItems
        .map(({ product, quantity }) => product.price)
        .reduce(
          (price, nextPrice) => price + Math.floor(nextPrice * quantity),
          0
        )
    : 0

  return (
    <section className='cart-section cart' aria-labelledby={titleId}>
      <div className='cart__inner inner container'>
        <div className='cart__body'>
          <h1 className='cart__title' id={titleId}>
            Корзина
          </h1>
          <ul className='cart__items'>
            {cartItems.length !== 0 ? (
              cartItems.map((cartItem) => {
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
