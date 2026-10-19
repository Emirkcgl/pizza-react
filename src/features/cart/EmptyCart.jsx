import Button from "../../UI/Button";

function EmptyCart() {
  return (
    <section className="page-shell flex min-h-[60vh] items-center justify-center">
      <div className="surface-card max-w-xl px-6 py-10 text-center sm:px-12 sm:py-14">
        <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#F3E9DD] text-[#A83422]" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="h-10 w-10 fill-none stroke-current" strokeWidth="1.5">
            <path d="M5 8h14l-1 11H6L5 8Z" strokeLinejoin="round" /><path d="M9 9V6a3 3 0 0 1 6 0v3" />
          </svg>
        </span>
        <p className="eyebrow mt-6">Sepetin boş</p>
        <h1 className="display-title mt-3 text-3xl sm:text-4xl">İlk dilimi seçme zamanı.</h1>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-[#746F68] sm:text-base">Menüye göz at ve sevdiğin pizzaları sepetine ekleyerek başla.</p>
        <Button to="/menu" type="primary" className="mt-7">Menüyü keşfet <span aria-hidden="true">→</span></Button>
      </div>
    </section>
  );
}

export default EmptyCart;
