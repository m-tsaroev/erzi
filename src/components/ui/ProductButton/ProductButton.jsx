import classNames from 'classnames'
import './ProductButton.scss'
import { useDispatch } from 'react-redux'
import { addCard } from '@/store/slices/cartSlice'
import {
  addMessageText,
  hideSuccessMessage,
  resetMessageText,
  showSuccessMessage,
  showErrorMessage,
  hideErrorMessage,
} from '@/store/slices/uiSlice'

const ProductButton = (props) => {
  const { id, className, mode = '' } = props
  const dispatch = useDispatch()

  const onButtonClick = async () => {
    const resultAction = await dispatch(addCard(id))

    if (addCard.fulfilled.match(resultAction)) {
      dispatch(addMessageText('Товар добавлен в корзину'))
      dispatch(showSuccessMessage())

      setTimeout(() => {
        dispatch(resetMessageText())
        dispatch(hideSuccessMessage())
      }, 2000)
    } else {
      dispatch(showErrorMessage())
      setTimeout(() => {
        dispatch(hideErrorMessage())
      }, 2000)
    }
  }

  return (
    <button
      className={classNames('product-button', className, {
        [`product-button--${mode}`]: mode,
      })}
      onClick={onButtonClick}
    >
      <span>Добавить в корзину</span>
    </button>
  )
}

export { ProductButton }
