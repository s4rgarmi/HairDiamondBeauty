import { motion } from 'framer-motion'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <motion.footer
      className="bg-black/95 py-10 text-white/70"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-center text-sm text-white/60 sm:flex-row sm:text-left">
        <div className="space-y-1">
          <p>© {currentYear} Kapsalon - Diamond Hair Beauty. Alle rechten voorbehouden.</p>
          <p className="text-xs text-white/50">
            Website door
            <a
              href="mailto:bamdadsoh@gmail.com"
              className="ml-1 underline decoration-white/30 underline-offset-4 transition hover:text-gold"
            >
              Bamdad Sohrabipour
            </a>
          </p>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="https://www.instagram.com/kapsalondiamond/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/306242422569306?ref=pro_upsell_xav_ig_profile_page_web"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            Facebook
          </a>
          <a
            href="https://www.tiktok.com/@kapsalon_diamond?_t=ZG-90kDiQGjhZZ&_r=1"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            TikTok
          </a>
          <a
            href="/privacy.html"
            className="transition hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            Privacybeleid
          </a>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
