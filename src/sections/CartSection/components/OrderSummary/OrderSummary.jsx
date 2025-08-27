import { formatPrice } from "@/utils/formatPrice";
import "./OrderSummary.scss";

const OrderSummary = (props) => {
  const { quantity, summ, deliveryPrice, discount } = props;

  const resultSumm = summ ? summ : 0 + deliveryPrice ? deliveryPrice : 0;

  return (
    <div className="order-summary">
      <h4 className="order-summary__title">Итого</h4>
      <div className="order-summary__groups">
        <div className="order-summary__group">
          <span>Товары:</span>
          {quantity && <span>{quantity}</span>}
        </div>
        <div className="order-summary__group">
          <span>Сумма:</span>
          {summ && <span>{formatPrice(summ)} ₽</span>}
        </div>
        <div className="order-summary__group">
          <span>Доставка:</span>
          {deliveryPrice ? (
            <span>{formatPrice(deliveryPrice)}</span>
          ) : (
            <span>Бесплатно</span>
          )}
        </div>
        {discount !== 0 && (
          <div className="order-summary__group">
            <span>Скидка:</span>
            <span
              style={{
                color: "green",
              }}
            >
              -{formatPrice(discount)} ₽
            </span>
          </div>
        )}
        <div className="order-summary__group">
          <span>Общая сумма:</span>
          {resultSumm && <span>{formatPrice(resultSumm)} ₽</span>}
        </div>
      </div>

      <button className="order-summary__button">Заказать</button>
      <div className="order-summary__extra">
        <p>
          Выбирая один из способов оплаты выше, вы подтверждаете, что
          ознакомлены, понимаете и соглашаетесь с Условиями использования,
          Условиями продажи и Политикой возврата, а также признаёте Политику
          конфиденциальности
        </p>
      </div>
    </div>
  );
};

export { OrderSummary };
