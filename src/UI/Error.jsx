import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";
function Error() {
  const error = useRouteError();

  return (
    <section className="page-shell flex min-h-[60vh] items-center justify-center">
      <div className="surface-card max-w-xl px-6 py-10 text-center sm:px-12 sm:py-14">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#A83422]/10 text-[#A83422]" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current" strokeWidth="1.8">
            <path d="M12 8v5m0 3.5v.01" strokeLinecap="round" />
            <circle cx="12" cy="12" r="9" />
          </svg>
        </span>
        <p className="eyebrow mt-6">Beklenmedik bir duraklama</p>
        <h1 className="display-title mt-3 text-3xl sm:text-4xl">Bir şeyler ters gitti.</h1>
        <p role="alert" className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#746F68] sm:text-base">
          {error?.data || error?.message || "İsteğin şu anda tamamlanamadı."}
        </p>
        <div className="mt-6">
          <LinkButton to={-1}>&larr; Önceki sayfaya dön</LinkButton>
        </div>
      </div>
    </section>
  );
}

export default Error;
