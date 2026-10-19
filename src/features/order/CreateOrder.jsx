import { Form, redirect, useActionData, useNavigation } from "react-router-dom";

import { createOrder } from "../../services/apiRestaurant";
import Button from "../../UI/Button";
import { formatCurrency } from "../../utils/helpers";

function isValidPhone(str) {
  return /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(str);
}

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

const inputStyles = "form-input";

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();

  const cart = fakeCart;
  const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <section className="page-shell">
      <header className="max-w-2xl">
        <p className="eyebrow">Teslimat bilgileri</p>
        <h1 className="display-title mt-2 text-4xl sm:text-5xl">Son bir adım kaldı.</h1>
        <p className="mt-3 text-base leading-7 text-[#746F68]">Siparişini teslim edebilmemiz için bilgilerini eksiksiz gir.</p>
      </header>

      <Form method="POST" className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-8">
        <div className="surface-card p-5 sm:p-7 lg:p-8">
          <div className="flex items-center gap-3 border-b border-[#ECE3D7] pb-5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#A83422] text-sm font-bold text-white">1</span>
            <div>
              <h2 className="font-display text-xl font-semibold text-[#201F1B]">Kişisel bilgiler</h2>
              <p className="mt-0.5 text-xs text-[#746F68]">Teslimat için kullanılır.</p>
            </div>
          </div>

          <div className="mt-6 space-y-5">
            <div>
              <label htmlFor="customer" className="field-label">Ad soyad</label>
              <input
                className={inputStyles}
                type="text"
                name="customer"
                id="customer"
                autoComplete="name"
                placeholder="Adın ve soyadın"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="field-label">Telefon numarası</label>
              <input
                className={`${inputStyles} ${formErrors?.phone ? "border-[#B42318] bg-[#FFF8F7] focus:border-[#B42318] focus:ring-[#B42318]/10" : ""}`}
                type="tel"
                name="phone"
                id="phone"
                autoComplete="tel"
                inputMode="tel"
                placeholder="+90 5xx xxx xx xx"
                required
                aria-invalid={Boolean(formErrors?.phone)}
                aria-describedby={formErrors?.phone ? "phone-error" : "phone-help"}
              />
              {formErrors?.phone ? (
                <p id="phone-error" role="alert" className="mt-2 flex items-start gap-2 rounded-xl bg-[#FCEBE8] px-3 py-2.5 text-sm font-medium text-[#8F2617]">
                  <span aria-hidden="true">!</span> {formErrors.phone}
                </p>
              ) : (
                <p id="phone-help" className="mt-2 text-xs text-[#8B857E]">Siparişinle ilgili gerektiğinde sana ulaşabilmemiz için.</p>
              )}
            </div>

            <div>
              <label htmlFor="address" className="field-label">Teslimat adresi</label>
              <input
                className={inputStyles}
                type="text"
                name="address"
                id="address"
                autoComplete="street-address"
                placeholder="Mahalle, sokak ve kapı numarası"
                required
              />
            </div>
          </div>

          <label htmlFor="priority" className="mt-7 flex cursor-pointer items-start gap-4 rounded-2xl border border-[#E3D8CA] bg-[#FBF7F1] p-4 transition hover:border-[#CDBBA8] sm:p-5">
            <input
              type="checkbox"
              name="priority"
              id="priority"
              className="mt-0.5 h-6 w-6 shrink-0 rounded border-[#C9BDAF] accent-[#A83422] focus:outline-none focus:ring-4 focus:ring-[#A83422]/20 focus:ring-offset-2"
            />
            <span>
              <span className="block font-semibold text-[#201F1B]">Siparişime öncelik ver</span>
              <span className="mt-1 block text-sm leading-6 text-[#746F68]">Öncelikli hazırlanmasını istiyorsan bu seçeneği işaretle.</span>
            </span>
          </label>

          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        </div>

        <aside className="surface-card overflow-hidden lg:sticky lg:top-6" aria-label="Sipariş özeti">
          <div className="border-b border-[#ECE3D7] px-5 py-5 sm:px-6">
            <p className="eyebrow">Sipariş özeti</p>
            <div className="mt-2 flex items-end justify-between gap-4">
              <h2 className="font-display text-2xl font-semibold text-[#201F1B]">{totalQuantity} pizza</h2>
              <span className="font-display text-2xl font-semibold text-[#A83422]">{formatCurrency(totalPrice)}</span>
            </div>
          </div>

          <ul className="divide-y divide-[#ECE3D7] px-5 sm:px-6">
            {cart.map((item) => (
              <li key={item.pizzaId} className="flex items-start justify-between gap-4 py-4 text-sm">
                <div className="min-w-0">
                  <p className="font-semibold text-[#37342F]"><span className="text-[#A83422]">{item.quantity}×</span> {item.name}</p>
                  <p className="mt-1 text-xs text-[#8B857E]">{formatCurrency(item.unitPrice)} / adet</p>
                </div>
                <span className="shrink-0 font-semibold text-[#201F1B]">{formatCurrency(item.totalPrice)}</span>
              </li>
            ))}
          </ul>

          <div className="border-t border-[#ECE3D7] bg-[#FBF8F4] p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <span className="font-semibold text-[#201F1B]">Toplam</span>
              <span className="font-display text-3xl font-semibold text-[#A83422]">{formatCurrency(totalPrice)}</span>
            </div>
            <Button type="primary" disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
                <><span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" aria-hidden="true"></span>Sipariş veriliyor...</>
              ) : (
                <>Şimdi sipariş ver <span aria-hidden="true">→</span></>
              )}
            </Button>
            <p className="mt-3 text-center text-xs leading-5 text-[#8B857E]">Siparişini göndermeden önce bilgilerini kontrol et.</p>
          </div>
        </aside>
      </Form>
    </section>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  const errors = {};

  if (!isValidPhone(order.phone)) {
    errors.phone = "Lütfen geçerli bir telefon numarası girin.";
  }

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
