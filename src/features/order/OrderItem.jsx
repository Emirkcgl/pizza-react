import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="flex items-center justify-between gap-5 py-5">
      <div className="flex min-w-0 items-center gap-3">
        <span className="grid h-9 min-w-9 place-items-center rounded-full bg-[#F3E9DD] text-sm font-bold text-[#A83422]" aria-label={`${quantity} adet`}>
          {quantity}×
        </span>
        <p className="truncate font-display text-lg font-semibold text-[#201F1B]">{name}</p>
      </div>

      <p className="shrink-0 text-sm font-bold text-[#37342F]">{formatCurrency(totalPrice)}</p>
    </li>
  );
}

export default OrderItem;
