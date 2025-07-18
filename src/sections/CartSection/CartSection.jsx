import { CartItem } from '@/components/ui/CartItem'
import './CartSection.scss'

const CartSection = () => {
  const titleId = 'cart'

  return (
    <section className='cart-section cart' aria-labelledby={titleId}>
      <div className='cart__inner inner container'>
        <div className='cart__body'>
          <h1 className='cart__title' id={titleId}>
            Корзина
          </h1>
          <ul className="cart__items">
            <CartItem 
              quantity={10}
            product={{
              image_url: '',
              title: 'Lala',
              price: 2000
            }} />
          </ul>
        </div>
      </div>
    </section>
  )
}

export { CartSection }
