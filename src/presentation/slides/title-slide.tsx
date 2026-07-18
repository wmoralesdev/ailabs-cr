export function TitleSlide() {
  return (
    <section className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-graphite px-[6%] py-[7%] text-on-dark">
      <div
        aria-hidden
        className="main-grid-dots main-grid-dots-glow pointer-events-none absolute inset-0 opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[12%] -top-[30%] size-[52%] rounded-full bg-purple/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[35%] -left-[10%] size-[48%] rounded-full bg-lavender/10 blur-3xl"
      />

      <header className="relative z-10">
        <img
          src="/brand/ailabs-light.svg"
          alt="AI Labs"
          className="h-10 w-auto md:h-12"
        />
      </header>

      <div className="relative z-10 max-w-[18ch]">
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.95] font-semibold tracking-tight text-balance">
          Event presentation
        </h1>
        <p className="mt-5 max-w-[28ch] font-sans text-[clamp(1rem,1.6vw,1.35rem)] leading-relaxed text-white/70">
          One slide shell in 16:9. Add each next slide as its own TSX file.
        </p>
      </div>

      <footer className="relative z-10 flex items-end justify-between gap-6 font-sans text-sm text-white/45">
        <span>16:9 deck</span>
        <span>↑↓ to move</span>
      </footer>
    </section>
  )
}
