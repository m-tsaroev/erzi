import { formatPrice } from '@/utils/formatPrice'
import './OrderSummary.scss'

const OrderSummary = (props) => {
  const {quantity, summ} = props

  return (
    <div className="order-summary">
      <h4 className="order-summary__title">Итого</h4>
      <div className="order-summary__group">
        <span>Товары:</span>
        {quantity && <span>{quantity}</span>}
      </div>
      <div className="order-summary__group">
        <span>Сумма:</span>
        {summ && <span>{formatPrice(summ)}</span>}
      </div>
      <button className="order-summary__button">
        Заказать
      </button>
    </div>
  )
}

export { OrderSummary }