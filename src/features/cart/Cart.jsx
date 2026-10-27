import LinkButton from "../../UI/LinkButton";
import Button from "../../UI/Button";
import CartItem from "./CartItem";
import { formatCurrency } from "../../utils/helpers";
import { useSelector } from "react-redux";
const fakeCart = [
  {
    pizzaId: 12,
    name: "Akdeniz",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Sebzeli",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Ispanaklı ve Mantarlı",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;
  const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  const userName = useSelector((state) => state.user.userName);

  return (
    <section className="page-shell">
      <LinkButton to="/menu">&larr; Menüye dön</LinkButton>

      <header className="mt-5 max-w-2xl">
        <p className="eyebrow">Siparişin</p>
        <h1 className="display-title mt-2 text-4xl sm:text-5xl">Sepetin hazır, {userName}</h1>
        <p className="mt-3 text-base leading-7 text-[#746F68]">
          Ürünlerini son kez kontrol et, ardından teslimat bilgilerine geç.
        </p>
      </header>

      <div className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-8">
        <div className="surface-card overflow-hidden shadow-none">
          <div className="flex items-center justify-between border-b border-[#ECE3D7] px-5 py-4 sm:px-6">
            <h2 className="font-display text-xl font-semibold text-[#201F1B]">Seçtiklerin</h2>
            <span className="status-badge bg-[#F2EDE6] text-[#746F68]">{totalQuantity} ürün</span>
          </div>
          <ul className="divide-y divide-[#ECE3D7] px-5 sm:px-6">
            {cart.map((item) => (
              <CartItem item={item} key={item.pizzaId} />
            ))}
          </ul>
        </div>

        <aside className="surface-card p-5 sm:p-6 lg:sticky lg:top-6" aria-label="Sipariş özeti">
          <p className="eyebrow">Özet</p>
          <div className="mt-5 flex items-center justify-between border-b border-[#ECE3D7] pb-5 text-sm">
            <span className="text-[#746F68]">Pizza toplamı</span>
            <span className="font-semibold text-[#201F1B]">{formatCurrency(totalPrice)}</span>
          </div>
          <div className="flex items-end justify-between py-5">
            <span className="font-semibold text-[#201F1B]">Toplam</span>
            <span className="font-display text-3xl font-semibold text-[#A83422]">{formatCurrency(totalPrice)}</span>
          </div>
          <Button to="/order/new" type="primary" className="w-full">
            Siparişe devam et <span aria-hidden="true">→</span>
          </Button>
          <Button type="secondary" className="mt-3 w-full">
            Sepeti temizle
          </Button>
          <p className="mt-4 text-center text-xs leading-5 text-[#8B857E]">
            Teslimat bilgilerini sonraki adımda gireceksin.
          </p>
        </aside>
      </div>
    </section>
  );
}

export default Cart;
