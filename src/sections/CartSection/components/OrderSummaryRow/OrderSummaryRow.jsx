import classNames from "classnames";
import "./OrderSummaryRow.scss";

const OrderSummaryRow = (props) => {
  const { name, value, className, mode } = props;

  return (
    <div
      className={classNames("order-summary-row", className, {
        [`order-summary-row--${mode}`]: mode,
      })}
    >
      <span>{name}</span>
      {value && <span>{value}</span>}
    </div>
  );
};

export { OrderSummaryRow };
