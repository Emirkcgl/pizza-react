import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="relative z-40 border-t border-[#3E3B34] bg-[#201F1B] px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 text-white sm:px-6 sm:py-4" role="region" aria-label="Sepet özeti">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3 sm:gap-5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-[#EABF5C]" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
              <path d="M4 7h16l-1.5 11h-13L4 7Z" strokeLinejoin="round" /><path d="M9 8V5.5a3 3 0 0 1 6 0V8" />
            </svg>
          </span>
          <p className="flex min-w-0 flex-col sm:flex-row sm:items-center sm:gap-3">
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/60 sm:text-xs">23 pizza</span>
            <span className="truncate font-display text-lg font-semibold text-white sm:text-xl">$23.45</span>
          </p>
        </div>
        <Link
          to="/cart"
          className="inline-flex min-h-[2.75rem] shrink-0 items-center justify-center gap-2 rounded-full bg-[#EABF5C] px-5 text-sm font-bold text-[#201F1B] transition hover:bg-[#F3CF79] focus:outline-none focus:ring-4 focus:ring-white/25 sm:px-6"
        >
          <span className="hidden sm:inline">Sepeti görüntüle</span>
          <span className="sm:hidden">Sepet</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}

export default CartOverview;
