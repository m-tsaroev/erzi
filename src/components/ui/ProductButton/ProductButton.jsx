import classNames from 'classnames'
import './ProductButton.scss'

const ProductButton = (props) => {
  const { className } = props

  return (
    <button className={classNames('product-button', className)}>
      <span>Добавить в корзину</span>
    </button>
  )
}

export { ProductButton }
