import { formatPrice } from '@/utils/formatPrice'
import './CartItem.scss'
import InlineSVG from 'react-inlinesvg'
import defaultImage from '../../../assets/images/cart/buttle5l.png'
import { useDispatch } from 'react-redux'
import {
  decrementCartItem,
  deleteCartItem,
  getCartItems,
  incrementCartItem,
} from '@/store/slices/cartSlice'
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
      console.log(4)
    }
  }

  const onPlusButtonClick = async () => {
    const actionResult = await dispatch(incrementCartItem(id))

    if (!incrementCartItem.fulfilled.match(actionResult)) {
      dispatch(showErrorMessage())
    } else {
    await dispatch(getCartItems())
    }
  }

  const onMinusButtonClick = async () => {
    const actionResult = await dispatch(decrementCartItem(id))

    if (!decrementCartItem.fulfilled.match(actionResult)) {
      dispatch(showErrorMessage())
      console.log(5, decrementCartItem.pending.match(actionResult));
    } else {
      await dispatch(getCartItems())
      console.log(6);
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
            <button
              className='cart__item-count-button minus'
              onClick={onMinusButtonClick}
              disabled={quantity === 1}
            ></button>
            <span className='cart__item-count-number'>{quantity}</span>
            <button
              className='cart__item-count-button plus'
              onClick={onPlusButtonClick}
            ></button>
          </div>
        </div>
      </div>
    </li>
  )
}

export { CartItem }
