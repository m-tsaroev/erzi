import { OrderSummaryRow } from '../OrderSummaryRow'
import './OrderSummary.scss'

const OrderSummary = (props) => {
  const { rows } = props

  return (
    <div className='order-summary'>
      <h4 className='order-summary__title'>Итого</h4>
      <div className='order-summary__rows'>
        {rows.map(({ name, value, show, mode }, index) => {
          return show ? (
            <OrderSummaryRow
              className='order-summary__row'
              name={name}
              value={value}
              mode={mode}
              key={index}
            />
          ) : null
        })}
      </div>

      <button className='order-summary__button'>Заказать</button>
      <div className='order-summary__extra'>
        <p>
          Выбирая один из способов оплаты выше, вы подтверждаете, что
          ознакомлены, понимаете и соглашаетесь с Условиями использования,
          Условиями продажи и Политикой возврата, а также признаёте Политику
          конфиденциальности
        </p>
      </div>
    </div>
  )
}

export { OrderSummary }
