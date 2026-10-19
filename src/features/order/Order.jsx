import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import { calcMinutesLeft, formatCurrency, formatDate } from "../../utils/helpers";
import OrderItem from "./OrderItem";
import LinkButton from "../../UI/LinkButton";

function Order() {
  const order = useLoaderData();

  // Gizlilik nedeniyle müşteri adı ve adresi gösterilmiyor.
  const { id, status, priority, priorityPrice, orderPrice, estimatedDelivery, cart } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <section className="page-shell">
      <LinkButton to="/menu">&larr; Menüye dön</LinkButton>

      <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Sipariş takibi</p>
          <h1 className="display-title mt-2 break-all text-4xl sm:text-5xl">Sipariş #{id}</h1>
          <p className="mt-3 text-sm leading-6 text-[#746F68]">Siparişinin güncel bilgileri burada.</p>
        </div>
        <div className="flex flex-wrap gap-2 sm:justify-end">
          {priority && <span className="status-badge bg-[#FCE9E5] text-[#9B2E1F]">Öncelikli</span>}
          <span className="status-badge bg-[#E6F0E8] text-[#2F593C]">{status}</span>
        </div>
      </div>

      <div className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-8">
        <div className="space-y-6">
          <section className="relative overflow-hidden rounded-[1.5rem] bg-[#2F593C] p-6 text-white shadow-[0_20px_50px_rgba(47,89,60,0.18)] sm:p-8" aria-labelledby="delivery-heading">
            <div className="absolute -right-12 -top-14 h-40 w-40 rounded-full border-[28px] border-white/5" aria-hidden="true"></div>
            <div className="relative flex items-start gap-4 sm:items-center">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/10 text-[#F3CF79]" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">Tahmini teslimat</p>
                <h2 id="delivery-heading" className="mt-2 font-display text-2xl font-semibold leading-tight sm:text-3xl">
                  {deliveryIn >= 0 ? `${deliveryIn} dakika kaldı` : "Teslim edilmiş olması gerekiyordu"}
                </h2>
                <p className="mt-2 text-sm text-white/70">
                  <time dateTime={estimatedDelivery}>{formatDate(estimatedDelivery)}</time>
                </p>
              </div>
            </div>
          </section>

          <section className="surface-card overflow-hidden shadow-none" aria-labelledby="order-items-heading">
            <div className="flex items-center justify-between border-b border-[#ECE3D7] px-5 py-4 sm:px-6">
              <h2 id="order-items-heading" className="font-display text-xl font-semibold text-[#201F1B]">Sipariş içeriği</h2>
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#746F68]">{cart.length} çeşit</span>
            </div>
            <ul className="divide-y divide-[#ECE3D7] px-5 sm:px-6">
              {cart.map((item) => (
                <OrderItem item={item} key={item.pizzaId} />
              ))}
            </ul>
          </section>
        </div>

        <aside className="surface-card p-5 sm:p-6 lg:sticky lg:top-6" aria-label="Ödeme özeti">
          <p className="eyebrow">Ödeme özeti</p>
          <dl className="mt-5 space-y-4 text-sm">
            <div className="flex items-center justify-between gap-4">
              <dt className="text-[#746F68]">Pizza ücreti</dt>
              <dd className="font-semibold text-[#201F1B]">{formatCurrency(orderPrice)}</dd>
            </div>
            {priority && (
              <div className="flex items-center justify-between gap-4">
                <dt className="text-[#746F68]">Öncelik ücreti</dt>
                <dd className="font-semibold text-[#201F1B]">{formatCurrency(priorityPrice)}</dd>
              </div>
            )}
            <div className="flex items-end justify-between gap-4 border-t border-[#ECE3D7] pt-5">
              <dt className="font-semibold text-[#201F1B]">Teslimatta ödeme</dt>
              <dd className="font-display text-3xl font-semibold text-[#A83422]">{formatCurrency(orderPrice + priorityPrice)}</dd>
            </div>
          </dl>
          <div className="mt-6 rounded-2xl bg-[#F5F0E9] p-4">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#2F593C]">Sipariş durumu</p>
            <p className="mt-1 text-sm font-semibold capitalize text-[#201F1B]">{status}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
