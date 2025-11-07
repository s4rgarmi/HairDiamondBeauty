import { motion } from 'framer-motion'

const openingHours = [
  { day: 'Maandag', schemaDay: 'Monday', hours: '10:00 – 18:00', opens: '10:00', closes: '18:00' },
  { day: 'Dinsdag', schemaDay: 'Tuesday', hours: '10:00 – 18:00', opens: '10:00', closes: '18:00' },
  { day: 'Woensdag', schemaDay: 'Wednesday', hours: '10:00 – 18:00', opens: '10:00', closes: '18:00' },
  { day: 'Donderdag', schemaDay: 'Thursday', hours: '10:00 – 18:00', opens: '10:00', closes: '18:00' },
  { day: 'Vrijdag', schemaDay: 'Friday', hours: '10:00 – 18:00', opens: '10:00', closes: '18:00' },
  { day: 'Zaterdag', schemaDay: 'Saturday', hours: '10:00 – 18:00', opens: '10:00', closes: '18:00' },
  { day: 'Zondag', schemaDay: 'Sunday', hours: 'Gesloten', opens: null, closes: null },
]

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-stone py-20 sm:py-24"
      aria-labelledby="contact-heading"
      itemScope
      itemType="https://schema.org/HairSalon"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
            Contact
          </span>
          <h2 id="contact-heading" className="mt-4 text-3xl font-semibold text-charcoal sm:text-4xl" itemProp="name">
            Plan je bezoek of stel je vraag
          </h2>
          <p className="mt-4 text-base text-charcoal/70 sm:text-lg">
            Bel, mail of plan meteen een{' '}
            <a
              href="#home"
              className="text-gold underline decoration-gold/60 underline-offset-4 transition hover:text-charcoal"
            >
              afspraak
            </a>
            . Ons team staat klaar om je te begeleiden naar jouw perfecte haardag.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="rounded-3xl border border-black/10 bg-ash p-8" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <ul className="space-y-4 text-charcoal/80">
                <li>
                  <span className="block text-xs uppercase tracking-[0.3em] text-slate">
                    Adres
                  </span>
                  <p className="mt-1 text-lg text-charcoal">
                    <span itemProp="streetAddress">Frankrijklei 56</span>,{' '}
                    <span itemProp="postalCode">2000</span>{' '}
                    <span itemProp="addressLocality">Antwerpen</span>, België
                  </p>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-[0.3em] text-slate">
                    Telefoon
                  </span>
                  <a className="mt-1 text-lg text-gold transition hover:text-charcoal" href="tel:+32470776220" itemProp="telephone">
                    +32 470 77 62 20
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-[0.3em] text-slate">
                    E-mail
                  </span>
                  <a
                    className="mt-1 text-lg text-gold transition hover:text-charcoal"
                    href="mailto:simajasor73@gmail.com"
                    itemProp="email"
                  >
                    simajasor73@gmail.com
                  </a>
                </li>
                <li>
                  <span className="block text-xs uppercase tracking-[0.3em] text-slate">BTW</span>
                  <p className="mt-1 text-lg text-charcoal" itemProp="taxID">BE 1021.725.744</p>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-black/10 bg-ash p-8">
              <h3 className="text-lg font-semibold text-charcoal">Openingsuren</h3>
              <ul className="mt-4 space-y-3 text-sm text-charcoal/70">
                {openingHours.map((item) => (
                  <li
                    key={item.day}
                    className="flex justify-between gap-6"
                    itemProp={item.opens ? 'openingHoursSpecification' : undefined}
                    itemScope={item.opens ? true : undefined}
                    itemType={item.opens ? 'https://schema.org/OpeningHoursSpecification' : undefined}
                  >
                    <span
                      itemProp={item.opens ? 'dayOfWeek' : undefined}
                      content={item.opens ? item.schemaDay : undefined}
                    >
                      {item.day}
                    </span>
                    <span className="text-charcoal">
                      {item.opens && item.closes && (
                        <>
                          <meta itemProp="opens" content={item.opens} />
                          <meta itemProp="closes" content={item.closes} />
                        </>
                      )}
                      {item.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="relative min-h-[360px] overflow-hidden rounded-3xl border border-black/10 shadow-xl shadow-black/20"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <iframe
              title="Kapsalon - Diamond Hair Beauty locatie op Google Maps"
              src="https://www.google.com/maps?q=Frankrijklei+56,+2000+Antwerpen&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
