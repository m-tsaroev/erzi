import { formatPrice } from '@/utils/formatPrice'
import './CartItem.scss'
import InlineSVG from 'react-inlinesvg'
import defaultImage from '../../../assets/images/cart/buttle5l.png'
import { useDispatch } from 'react-redux'
import { deleteCartItem, getCartItems } from '@/store/slices/cartSlice'
import { showErrorMessage } from '@/store/slices/uiSlice'

const CartItem = (props) => {
  const { id, product, quantity } = props
  const { image_url = '', price, title } = product

  const dispatch = useDispatch()

  const onDeleteButtonClick = async () => {
    const actionResult = await dispatch(deleteCartItem(id))

    if (!deleteCartItem.fulfilled.match(actionResult)) {
      dispatch(showErrorMessage())
    } else {
      await dispatch(getCartItems())
      console.log(4);
    }
  }

  return (
    <li className='cart__item'>
      <div className='cart__item-image'>
        <img src={image_url ? image_url : defaultImage} alt='' />
      </div>
      <div className='cart__item-body'>
        <div className='cart__item-info'>
          <h4 className='cart__item-title'>{title}</h4>
          <div className='cart__item-price'>{formatPrice(price)}₽</div>
        </div>
        <div className='cart__item-buttons'>
          <button
            className='cart__item-reset-button'
            onClick={onDeleteButtonClick}
          >
            <InlineSVG title='Reset' src='/reset.svg' width={24} height={24} />
          </button>
          <div className='cart__item-count'>
            <button className='cart__item-count-button minus'></button>
            <span className='cart__item-count-number'>{quantity}</span>
            <button className='cart__item-count-button plus'></button>
          </div>
        </div>
      </div>
    </li>
  )
}

export { CartItem }
