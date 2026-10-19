import { formatCurrency } from "../../utils/helpers";
import Button from "../../UI/Button";
function MenuItem({ pizza }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className={`group flex min-w-0 flex-col overflow-hidden rounded-[1.5rem] border bg-white transition duration-300 ${soldOut ? "border-[#E3DBD1]" : "border-[#ECE3D7] hover:-translate-y-1 hover:border-[#D7C5B4] hover:shadow-[0_24px_55px_rgba(59,42,26,0.11)]"}`}>
      <div className="relative aspect-[4/3] overflow-hidden bg-[#EFE6DA]">
        <div className="absolute inset-0 grid place-items-center text-[#A83422]/30" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="h-14 w-14 fill-none stroke-current" strokeWidth="1.2">
            <circle cx="12" cy="12" r="9" /><circle cx="9" cy="9" r="1" /><circle cx="15" cy="13" r="1" /><path d="M5 14c4 1.6 9.6 2 14-.4" />
          </svg>
        </div>
        <img
          src={imageUrl}
          alt={`${name} pizza`}
          loading="lazy"
          decoding="async"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
          className={`relative h-full w-full object-cover transition duration-500 group-hover:scale-[1.025] ${soldOut ? "grayscale" : ""}`}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent" aria-hidden="true"></div>
        {soldOut && (
          <div className="absolute inset-0 grid place-items-center bg-[#201F1B]/50 backdrop-blur-[1px]">
            <span className="status-badge bg-white text-[#201F1B]">Tükendi</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-display text-2xl font-semibold leading-tight tracking-[-0.025em] text-[#201F1B]">{name}</h2>
          {!soldOut && <p className="shrink-0 pt-1 text-sm font-bold text-[#A83422]">{formatCurrency(unitPrice)}</p>}
        </div>

        <p className="mt-3 text-sm leading-6 text-[#746F68]">{ingredients.join(", ")}</p>

        <div className="mt-auto flex items-end justify-between gap-3 pt-6">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#2F593C]">
            {soldOut ? "Şu an mevcut değil" : "Siparişe hazır"}
          </span>
          <Button
            type="small"
            disabled={soldOut}
            aria-label={soldOut ? `${name} tükendi` : `${name} sepete ekle`}
            className={soldOut ? "!bg-[#D9D1C7] !text-[#746F68] !shadow-none" : ""}
          >
            {soldOut ? "Tükendi" : "Sepete ekle"}
          </Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
