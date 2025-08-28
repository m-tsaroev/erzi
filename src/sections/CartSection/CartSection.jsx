import { CartItem } from "@/components/ui/CartItem";
import { getCartItems } from "@/store/slices/cartSlice";
import { formatPrice } from "@/utils/formatPrice";
import { round2 } from "@/utils/round2";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CartSection.scss";
import { DeleteAllButton } from "./components/DeleteAllButton";
import { OrderSummary } from "./components/OrderSummary";

const CartSection = () => {
  const titleId = "cart";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  const { cartItems } = useSelector((state) => state.cart);

  const sorteredCartItems = [...cartItems].sort((a, b) =>
    a.product.title.localeCompare(b.product.title, "ru"),
  );

  const quantity = cartItems
    ? cartItems
        .map(({ quantity }) => quantity)
        .reduce((number, nextNumber) => number + nextNumber, 0)
    : 0;

  const { summ, discount } = cartItems
    ? cartItems.reduce(
        (acc, { product, quantity }) => {
          const isBulkDiscountQuantity =
            product.bulk_discount_quantity !== 0 &&
            quantity >= product.bulk_discount_quantity;

          if (isBulkDiscountQuantity) {
            acc.summ += round2(product.bulk_discount_price * quantity);
            acc.discount += round2(
              product.price * quantity - product.bulk_discount_price * quantity,
            );
          } else {
            acc.summ += round2(product.price * quantity);
          }

          return acc;
        },
        { summ: 0, discount: 0 },
      )
    : { summ: 0, discount: 0 };

  const deliveryPrice = 0;

  const resultSumm = (summ ? summ : 0) + (deliveryPrice ? deliveryPrice : 0);

  return (
    <section className="cart-section cart" aria-labelledby={titleId}>
      <div className="cart__inner inner container">
        <div className="cart__body">
          <header className="cart__header">
            <h1 className="cart__title" id={titleId}>
              Корзина
            </h1>
            <DeleteAllButton />
          </header>

          <ul className="cart__items">
            {sorteredCartItems.length !== 0 ? (
              sorteredCartItems
                .sort((a, b) =>
                  a.product.title.localeCompare(b.product.title, "ru"),
                )
                .map((cartItem) => {
                  return <CartItem key={cartItem.id} {...cartItem} />;
                })
            ) : (
              <h1>Корзина пуста</h1>
            )}
          </ul>
        </div>
        <OrderSummary
          rows={[
            {
              name: "Товары:",
              value: quantity,
              show: true,
            },
            {
              name: "Сумма:",
              value: `${formatPrice(round2(summ))} ₽`,
              show: true,
            },
            {
              name: "Доставка:",
              value: deliveryPrice ? `${deliveryPrice} ₽` : "Бесплатно",
              show: true,
            },
            {
              name: "Скидка:",
              value: `-${formatPrice(round2(discount))} ₽`,
              mode: "green",
              show: discount !== 0,
            },
            {
              name: "Общая сумма:",
              value: `${formatPrice(round2(resultSumm))} ₽`,
              mode: "bordered",
              show: true,
            },
          ]}
        />
      </div>
    </section>
  );
};

export { CartSection };
