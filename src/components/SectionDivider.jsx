const SectionDivider = () => {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-12">
      <div className="flex items-center gap-4 py-10 sm:gap-6">
        <span className="h-px flex-1 bg-divider-gold" />
        <img
          src="/images/logo-kapsalon-diamond-hair-beauty.png"
          alt="Logo Kapsalon - Diamond Hair Beauty"
          className="h-16 w-auto object-contain drop-shadow-[0_18px_30px_-24px_rgba(0,0,0,0.35)] sm:h-20"
          loading="lazy"
        />
        <span className="h-px flex-1 bg-divider-gold" />
      </div>
    </div>
  )
}

export default SectionDivider
