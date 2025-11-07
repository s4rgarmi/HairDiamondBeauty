import { motion, useScroll, useTransform } from 'framer-motion'
import { useCallback, useRef } from 'react'

const heroBackground = '/images/IMG_4747.png'

const Hero = () => {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.65])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35])

  const handleBooking = useCallback(() => {
    if (typeof window !== 'undefined' && window.SetmoreWidget) {
      window.SetmoreWidget.loadPopupEmbed('https://diamondhairbeauty.setmore.com/layla')
      return
    }

    window.open('https://diamondhairbeauty.setmore.com/layla', '_blank', 'noopener,noreferrer')
  }, [])

  return (
    <motion.section
      ref={heroRef}
      id="home"
      className="relative overflow-hidden bg-charcoal text-white"
      aria-labelledby="hero-heading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(15, 15, 15, 0.92), rgba(26, 26, 26, 0.7)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          scale: backgroundScale,
          opacity: backgroundOpacity,
        }}
      />

      <motion.div
        className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-start justify-center px-6 py-32 sm:px-10 lg:px-12"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.span
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.4em] text-white/80 backdrop-blur"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Elegance in every detail
        </motion.span>

        <motion.h1
          id="hero-heading"
          className="text-left text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[4.25rem]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
        >
          Kapsalon - Diamond Hair Beauty
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg text-white/80 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Luxe kapsalon in het hart van België. Laat je verwennen door toonaangevende stylisten en geniet
          van een ervaring die straalt in stijl, service en vertrouwen.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
        >
          <button
            onClick={handleBooking}
            className="group rounded-full bg-gold px-8 py-3 text-sm font-semibold uppercase tracking-wide text-charcoal shadow-glow transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            type="button"
            aria-label="Plan een afspraak bij Kapsalon - Diamond Hair Beauty"
          >
            Boek nu
          </button>
          <p className="text-sm text-white/60">
            Open de planner en reserveer jouw plek in enkele seconden.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Hero
