import { motion, useScroll, useTransform } from 'framer-motion'

const navItems = [
  { label: 'Over ons', href: '#about' },
  { label: 'Diensten', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

const Header = () => {
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(scrollY, [0, 140], ['rgba(0,0,0,0.35)', 'rgba(0,0,0,0.85)'])
  const shadow = useTransform(scrollY, [0, 140], ['0 0 0 rgba(0,0,0,0)', '0 20px 45px -28px rgba(0,0,0,0.6)'])
  const borderColor = useTransform(scrollY, [0, 140], ['rgba(198,166,100,0)', 'rgba(198,166,100,0.25)'])

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-30 border-b border-transparent bg-black/50 py-4 backdrop-blur"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundColor,
        boxShadow: shadow,
        borderColor,
        backdropFilter: 'blur(18px)',
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-12">
        <a
          href="#home"
          className="flex items-center gap-3 text-white no-underline transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          <img
            src="/images/logo-kapsalon-diamond-hair-beauty.png"
            alt="Logo Kapsalon - Diamond Hair Beauty"
            className="h-12 w-auto drop-shadow-[0_18px_30px_-24px_rgba(0,0,0,0.55)] sm:h-14"
            loading="lazy"
          />
          <span className="text-sm font-semibold uppercase tracking-[0.3em] sm:text-base">
            Kapsalon - Diamond Hair Beauty
          </span>
        </a>
        <nav
          aria-label="Hoofdmenu"
          className="hidden items-center gap-8 text-sm uppercase tracking-[0.3em] text-white/70 md:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}

export default Header
