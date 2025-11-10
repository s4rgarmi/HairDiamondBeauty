import { useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const services = {
  women: [
    {
      title: 'Brushing',
      description: 'Styling met volume en glans afgestemd op jouw coupe.',
      price: 'vanaf €20',
      badge: 'Styling',
    },
    {
      title: 'Knippen + wassen + verzorging + droging',
      description: 'Complete verzorging van wassen tot afwerking voor gezond haar.',
      price: '€30',
      badge: 'Complete service',
    },
    {
      title: 'Knippen & brushing',
      description: 'Precisieknip gecombineerd met een gepersonaliseerde blow-out.',
      price: 'vanaf €40',
      badge: 'Signature cut',
    },
    {
      title: 'Knippen meisjes tot 12 jaar',
      description: 'Speelse kapsels met zachte producten voor jonge dames.',
      price: '€18',
      badge: 'Kids',
    },
    {
      title: 'Volledig kleuren',
      description: 'Egaal kleurresultaat met beschermende verzorging.',
      price: 'vanaf €40',
      badge: 'Kleuren',
    },
    {
      title: 'Uitgroei kleuren',
      description: 'Touch-up van je uitgroei voor een naadloze overgang.',
      price: '€35',
      badge: 'Kleuren',
    },
    {
      title: 'Ombré',
      description: 'Diepe kleurverloop van donker naar licht voor extra dimensie.',
      price: 'vanaf €60',
      badge: 'Balayage',
    },
    {
      title: 'Halve balayage',
      description: 'Accent highlightings voor een natuurlijke, zonnige look.',
      price: 'vanaf €50',
      badge: 'Balayage',
    },
    {
      title: 'Volledige balayage',
      description: 'All-over balayage voor maximale helderheid en diepte.',
      price: 'vanaf €60',
      badge: 'Balayage',
    },
    {
      title: 'Olaplex herstel',
      description: 'Beschermt en herstelt de haarstructuur tijdens kleur of styling.',
      price: '€25',
      badge: 'Herstel',
    },
    {
      title: 'Toner',
      description: 'Verfijnt je kleur en neutraliseert ongewenste tinten.',
      price: 'vanaf €25',
      badge: 'Finishing',
    },
    {
      title: 'Permanent',
      description: 'Langdurige krullen of volume op maat van je stijl.',
      price: 'vanaf €60',
      badge: 'Textuur',
    },
    {
      title: 'Proteïne botox behandeling',
      description: 'Regenererende boost voor sterk, glad en glanzend haar.',
      price: 'vanaf €70',
      badge: 'Herstel',
    },
    {
      title: 'Braziliaanse keratine',
      description: 'Intens gladmakende keratinebehandeling tegen pluis.',
      price: 'vanaf €80',
      badge: 'Smoothing',
    },
    {
      title: 'Wenkbrauwen epileren',
      description: 'Perfect gevormde wenkbrauwen met strakke afwerking.',
      price: 'vanaf €10',
      badge: 'Brows',
    },
    {
      title: 'Gezicht epileren',
      description: 'Zachte ontharing van het gezicht voor een egale huid.',
      price: '€10',
      badge: 'Beauty',
    },
    {
      title: 'Wenkbrauwen kleuren',
      description: 'Intense kleur en definitie voor je wenkbrauwen.',
      price: '€10',
      badge: 'Brows',
    },
    {
      title: 'Bruidsstyling',
      description: 'Proefsessie + styling op de grote dag met aandacht voor elk detail.',
      price: '€250 – €300',
      badge: 'Bridal',
    },
  ],
}

const categories = [{ id: 'women', label: 'Vrouwen' }]

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('women')
  const activeServices = services[activeCategory]
  const handleBooking = useCallback(() => {
    if (typeof window !== 'undefined' && window.SetmoreWidget) {
      window.SetmoreWidget.loadPopupEmbed('https://diamondhairbeauty.setmore.com/layla')
      return
    }

    window.open('https://diamondhairbeauty.setmore.com/layla', '_blank', 'noopener,noreferrer')
  }, [])

  return (
    <section id="services" className="bg-porcelain py-20 sm:py-24" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
            Diensten & prijzen
          </span>
          <h2 id="services-heading" className="mt-4 text-3xl font-semibold text-charcoal sm:text-4xl">
            Verzorging op maat voor elke gelegenheid
          </h2>
          <p className="mt-4 text-base text-charcoal/70 sm:text-lg">
            Kies uit een selectie van onze meest geliefde behandelingen. Alle diensten zijn inclusief
            persoonlijke consultatie en stylingadvies.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {categories.map((category) => {
            const isActive = activeCategory === category.id
            return (
              <motion.button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`relative inline-flex w-[13rem] max-w-full items-center justify-center overflow-hidden rounded-full border px-8 py-3 text-center text-sm font-semibold uppercase tracking-[0.28em] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-porcelain sm:w-[14rem] sm:px-10 ${
                  isActive
                    ? 'border-gold bg-gold text-charcoal shadow-[0_18px_35px_rgba(0,0,0,0.18)]'
                    : 'border-charcoal/10 text-charcoal/60 bg-porcelain hover:border-gold/60 hover:text-charcoal'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">{category.label}</span>
                {isActive && (
                  <motion.span
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-gold/90 via-amber-300 to-gold/80"
                    layoutId="categoryHighlight"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {activeServices.map((service) => (
              <motion.article
                key={service.title}
                className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-gold/40 bg-linen p-9 shadow-[0_26px_36px_-30px_rgba(198,166,100,0.35)] transition duration-300 xl:p-10"
                whileHover={{ y: -12, transition: { duration: 0.22, ease: 'easeOut', delay: 0 } }}
              >
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold text-charcoal sm:text-2xl">{service.title}</h3>
                    {service.badge && (
                      <span className="rounded-full border border-gold/40 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-charcoal">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed text-charcoal/70 sm:text-base">
                    {service.description}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-6">
                  <span className="text-lg font-semibold text-gold">{service.price}</span>
                  <button
                    type="button"
                    onClick={handleBooking}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-charcoal/60 transition hover:text-gold"
                  >
                    Boek
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-3.5 w-3.5"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Services
