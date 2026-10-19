import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <Form onSubmit={handleSubmit} role="search" aria-label="Sipariş ara" className="w-full">
      <label htmlFor="order-search" className="sr-only">Sipariş numarası</label>
      <div className="relative">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 fill-none stroke-[#746F68]"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="6.5" />
          <path d="m16 16 4 4" strokeLinecap="round" />
        </svg>
        <input
          id="order-search"
          inputMode="search"
          aria-label="Sipariş numarası ara"
          placeholder="Sipariş numaranı ara"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="min-h-[2.75rem] w-full rounded-full border border-[#E1D7CA] bg-white py-2.5 pl-10 pr-4 text-sm text-[#201F1B] shadow-sm transition duration-200 placeholder:text-[#918A82] hover:border-[#C6BAAC] focus:border-[#A83422] focus:outline-none focus:ring-4 focus:ring-[#A83422]/10"
        />
      </div>
    </Form>
  );
}

export default SearchOrder;
