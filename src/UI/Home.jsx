import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <section className="page-shell flex min-h-[calc(100dvh-172px)] items-center py-6 sm:py-10 lg:py-12">
      <div className="grid w-full items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E4D8CA] bg-white/80 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#2F593C] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#2F593C]" aria-hidden="true"></span>
            Modern İtalyan lezzeti
          </div>

          <h1 className="display-title text-[clamp(3.1rem,9.5vw,6.8rem)] leading-[0.88]">
            En iyi
            <span className="relative block text-[#A83422]">
              pizza.
              <svg className="absolute -bottom-3 left-1 h-4 w-[70%] text-[#EABF5C]" viewBox="0 0 300 20" fill="none" aria-hidden="true">
                <path d="M4 14C70 3 182 3 296 9" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-9 max-w-lg text-lg leading-8 text-[#746F68] sm:text-xl">
            Fırından çıkar çıkmaz, doğruca size. Siparişinizi birkaç adımda hazırlayın.
          </p>

          <div className="mt-8 max-w-xl">
            <CreateUser />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[580px] lg:mx-0">
          <div className="absolute -left-5 top-10 h-24 w-24 rounded-full bg-[#EABF5C]/30 blur-2xl" aria-hidden="true"></div>
          <div className="absolute -right-3 bottom-10 h-32 w-32 rounded-full bg-[#2F593C]/20 blur-3xl" aria-hidden="true"></div>
          <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-[#E5D9CB] bg-[#EFE3D2] p-[8%] shadow-[0_30px_80px_rgba(59,42,26,0.14)] sm:rounded-[3.5rem]">
            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(#A83422 0.8px, transparent 0.8px)", backgroundSize: "18px 18px" }} aria-hidden="true"></div>
            <svg viewBox="0 0 500 500" className="relative h-full w-full drop-shadow-[0_30px_22px_rgba(67,42,19,0.25)]" role="img" aria-label="İllüstrasyon pizza">
              <defs>
                <radialGradient id="crust" cx="40%" cy="35%">
                  <stop offset="0" stopColor="#F6D995" />
                  <stop offset="0.8" stopColor="#D99D42" />
                  <stop offset="1" stopColor="#B96E2D" />
                </radialGradient>
                <radialGradient id="cheese" cx="44%" cy="36%">
                  <stop offset="0" stopColor="#FFE17A" />
                  <stop offset="1" stopColor="#EABF5C" />
                </radialGradient>
              </defs>
              <circle cx="250" cy="250" r="215" fill="url(#crust)" />
              <circle cx="250" cy="250" r="184" fill="#A83422" />
              <circle cx="250" cy="250" r="170" fill="url(#cheese)" />
              <g fill="#B53B28">
                <circle cx="180" cy="150" r="29" /><circle cx="322" cy="160" r="31" />
                <circle cx="147" cy="294" r="31" /><circle cx="306" cy="326" r="32" />
                <circle cx="251" cy="234" r="26" />
              </g>
              <g fill="#2F593C">
                <path d="M224 125c28 5 34 29 24 51-27-6-36-29-24-51Z" />
                <path d="M347 239c-6 28-30 34-51 23 7-27 29-35 51-23Z" />
                <path d="M225 352c-27-8-31-32-18-52 26 9 32 31 18 52Z" />
                <path d="M128 213c25-13 45 2 50 25-25 12-44-2-50-25Z" />
              </g>
              <g fill="#FFF7E5" opacity="0.92">
                <circle cx="276" cy="118" r="13" /><circle cx="374" cy="286" r="12" />
                <circle cx="212" cy="286" r="11" /><circle cx="116" cy="340" r="12" />
              </g>
            </svg>
            <div className="absolute bottom-5 left-5 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm sm:bottom-8 sm:left-8 sm:px-5">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#A83422]">Fast React</p>
              <p className="mt-0.5 font-display text-lg font-semibold text-[#201F1B] sm:text-xl">Pizza Co.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
