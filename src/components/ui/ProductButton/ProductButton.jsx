import classNames from 'classnames'
import './ProductButton.scss'

const ProductButton = (props) => {
  const { id, className, mode = '' } = props

  return (
    <button className={classNames('product-button', className, {
      [`product-button--${mode}`]: mode,
    })}>
      <span>Добавить в корзину</span>
    </button>
  )
}

export { ProductButton }
