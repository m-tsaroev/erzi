import { CartItem } from '@/components/ui/CartItem'
import './CartSection.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCartItems } from '@/store/slices/cartSlice'

const CartSection = () => {
  const titleId = 'cart'
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartItems())
  }, [dispatch])

  const {cartItems, loading, error} = useSelector((state) => state.cart)
  
  return (
    <section className='cart-section cart' aria-labelledby={titleId}>
      <div className='cart__inner inner container'>
        <div className='cart__body'>
          <h1 className='cart__title' id={titleId}>
            Корзина
          </h1>
          <ul className='cart__items'>
            {cartItems.map((cartItem) => {
              return <CartItem key={cartItem.id} {...cartItem} />
            })}
            {/* <CartItem 
              quantity={10}
            product={{
              image_url: '',
              title: 'Lala',
              price: 2000
            }} /> */}
          </ul>
        </div>
      </div>
    </section>
  )
}

export { CartSection }
