import { formatCurrency } from "../../utils/helpers";
import Button from "../../UI/Button";
function CartItem({ item }) {
  const { name, quantity, unitPrice, totalPrice } = item;

  return (
    <li className="py-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
      <div className="min-w-0">
        <div className="flex items-center gap-3">
          <span className="grid h-9 min-w-9 place-items-center rounded-full bg-[#F3E9DD] text-sm font-bold text-[#A83422]" aria-label={`${quantity} adet`}>
            {quantity}×
          </span>
          <div className="min-w-0">
            <h3 className="truncate font-display text-lg font-semibold text-[#201F1B]">{name}</h3>
            <p className="mt-0.5 text-xs text-[#8B857E]">Birim fiyat {formatCurrency(unitPrice)}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-4 pl-12 sm:mt-0 sm:pl-0">
        <p className="whitespace-nowrap font-semibold text-[#201F1B]">{formatCurrency(totalPrice)}</p>
        <Button type="small" className="border border-[#E6D6D0] !bg-white !text-[#A83422] !shadow-none hover:!bg-[#FAEEEA]" aria-label={`${name} ürününü sepetten kaldır`}>
          Kaldır
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
