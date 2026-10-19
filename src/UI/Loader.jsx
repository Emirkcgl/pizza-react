function Loader() {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF7F2]/80 px-4 backdrop-blur-md"
      role="status"
      aria-live="polite"
    >
      <div className="surface-card flex min-w-48 flex-col items-center gap-4 px-8 py-7 text-center">
        <div className="loader" aria-hidden="true"></div>
        <div>
          <p className="font-display text-lg font-semibold text-[#201F1B]">Fırın ısınıyor</p>
          <p className="mt-1 text-xs font-medium text-[#746F68]">Birazdan hazır.</p>
        </div>
      </div>
    </div>
  );
}

export default Loader;
