import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
function Header() {
  return (
    <header className="relative z-30 border-b border-[#ECE3D7] bg-[#FAF7F2]/95 backdrop-blur-xl">
      <div className="mx-auto grid min-h-[72px] max-w-7xl grid-cols-[auto_1fr] items-center gap-x-3 gap-y-3 px-4 py-3 sm:px-6 md:grid-cols-[auto_minmax(260px,420px)_auto] md:gap-6 lg:px-8">
        <Link
          to="/"
          aria-label="Fast React Pizza Co. ana sayfa"
          className="group inline-flex min-w-0 items-center gap-2.5 rounded-lg text-[#201F1B]"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#A83422] text-white shadow-[0_8px_24px_rgba(168,52,34,0.22)] transition-transform duration-200 group-hover:-rotate-6">
            <svg viewBox="0 0 32 32" aria-hidden="true" className="h-6 w-6 fill-none stroke-current">
              <path d="M7 24.5 16 6l9 18.5c-5.6 2.2-12.4 2.2-18 0Z" strokeWidth="2" strokeLinejoin="round" />
              <path d="M8.8 20.8c4.7 1.8 9.7 1.8 14.4 0" strokeWidth="2" strokeLinecap="round" />
              <circle cx="14" cy="15" r="1.5" fill="currentColor" stroke="none" />
              <circle cx="19" cy="18" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </span>
          <span className="min-w-0 leading-none">
            <span className="block truncate font-display text-lg font-bold tracking-[-0.03em] sm:text-xl">Fast React</span>
            <span className="mt-1 block text-[0.58rem] font-bold uppercase tracking-[0.26em] text-[#746F68]">Pizza Co.</span>
          </span>
        </Link>

        <div className="col-span-2 row-start-2 md:col-span-1 md:col-start-2 md:row-start-1">
          <SearchOrder />
        </div>

        <div className="hidden justify-self-end md:block">
          <Username />
        </div>
      </div>
    </header>
  );
}

export default Header;
