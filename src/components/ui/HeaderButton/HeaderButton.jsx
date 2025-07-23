import classNames from 'classnames'
import InlineSVG from 'react-inlinesvg'
import { useEffect } from 'react'
import './HeaderButton.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { openLoginModal } from '@/store/slices/uiSlice'
import { getCartItems } from '@/store/slices/cartSlice'

const HeaderButton = (props) => {
  const { title, to, className, icon, itemsCount } = props

  const iconSvg = <InlineSVG src={`/${icon}.svg`} />

  const isAuth = useSelector((state) => !!state.auth.accessToken)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onNavigate = () => {
    if (isAuth) {
      navigate(to)
    } else {
      dispatch(openLoginModal())
    }
  }

  useEffect(() => {
    if (isAuth) {
      dispatch(getCartItems())
    }
  }, [dispatch, isAuth])

  const { cartItems } = useSelector((state) => state.cart)

  // console.log(cartItems);

  // dispatch(addCard(2))

  let cartItemsCount = 0

  cartItems.forEach((cartItem) => {
    cartItemsCount += cartItem.quantity
  })

  if (!isAuth) {
    cartItemsCount = 0
  }

  return (
    <button
      title={title}
      className={classNames('header__button', className)}
      onClick={onNavigate}
    >
      {itemsCount && cartItemsCount > 0 && (
        <span className='header__button__items-count'>{cartItemsCount}</span>
      )}
      <div className='header__button-icon'>{iconSvg}</div>
    </button>
  )
}

export { HeaderButton }
