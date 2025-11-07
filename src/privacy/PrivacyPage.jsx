import { motion } from 'framer-motion'
import Footer from '../components/Footer.jsx'
import Privacy from '../components/Privacy.jsx'

const PrivacyHeader = () => (
  <header className="border-b border-gold/20 bg-black/80 py-5 text-white backdrop-blur">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-12">
      <a href="/" className="flex items-center gap-3 text-white no-underline transition hover:text-gold">
        <img
          src="/images/logo-kapsalon-diamond-hair-beauty.png"
          alt="Logo Kapsalon - Diamond Hair Beauty"
          className="h-12 w-auto drop-shadow-[0_18px_30px_-24px_rgba(0,0,0,0.55)]"
          loading="lazy"
        />
        <span className="text-sm font-semibold uppercase tracking-[0.3em] sm:text-base">
          Kapsalon - Diamond Hair Beauty
        </span>
      </a>
      <a
        href="/#home"
        className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70 transition hover:text-gold"
      >
        Terug naar website
      </a>
    </div>
  </header>
)

const PrivacyPage = () => {
  return (
    <div className="bg-porcelain text-charcoal">
      <PrivacyHeader />
      <main className="min-h-screen pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Privacy />
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

export default PrivacyPage
