import classNames from 'classnames'
import './ProductCard.scss'
import { formatPrice } from '@/utils/formatPrice'
import { ProductButton } from '../ProductButton'

const ProductCard = (props) => {
  const {
    title,
    description,
    image_url,
    price,
    quantity,
    className
  } = props

  return (
    <li className={classNames('product-card__item', className)}>
      <div className='product-card__item__body'>
        <div className='product-card__item-image'>
          <img
            src={image_url}
            alt=''
            width={232}
            height={188}
          />
        </div>
        <div className='product-card__item-price'>
          <span>{formatPrice(price)} ₽</span>
          <span>{quantity}шт</span>
        </div>
        <div className='product-card__item-info'>
          <h5 className='product-card__item-title'>{title}</h5>
          <div className='product-card__item-description'>
            <p>{description}</p>
          </div>
        </div>
        <ProductButton />
      </div>
    </li>
  )
}

export { ProductCard }
