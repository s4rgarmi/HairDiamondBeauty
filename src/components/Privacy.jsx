import { motion } from 'framer-motion'

const privacyItems = [
  {
    title: 'Welke gegevens verzamelen we?',
    body:
      'We bewaren enkel gegevens die jij ons zelf doorgeeft tijdens het boeken of wanneer je contact opneemt, zoals naam, telefoonnummer, e-mailadres en eventuele notities over de behandeling.',
  },
  {
    title: 'Waarom verwerken we jouw gegevens?',
    body:
      'Gegevens worden gebruikt om afspraken te beheren, je te informeren over wijzigingen, betalingen te verwerken en – mits jouw toestemming – promoties of nieuws te versturen.',
  },
  {
    title: 'Met wie delen we jouw gegevens?',
    body:
      'We delen jouw gegevens niet met derden, behalve met dienstverleners die ons helpen bij het plannen van afspraken (Setmore) of bij de administratie. Zij verwerken gegevens volgens onze instructies.',
  },
  {
    title: 'Hoe lang bewaren we gegevens?',
    body:
      'We bewaren gegevens zolang nodig om onze diensten te leveren en te voldoen aan wettelijke verplichtingen. Je kan steeds vragen om jouw gegevens te laten verwijderen of aan te passen.',
  },
  {
    title: 'Jouw rechten',
    body:
      'Je hebt het recht om jouw gegevens in te zien, te corrigeren, te laten verwijderen, bezwaar te maken tegen verwerking en gegevens over te dragen. Neem contact op via het e-mailadres hieronder om deze rechten uit te oefenen.',
  },
  {
    title: 'Contact',
    body:
      'Heb je vragen over dit privacybeleid of wil je jouw rechten uitoefenen? Mail ons via simajasor73@gmail.com of bezoek ons in de salon: Frankrijklei 56, 2000 Antwerpen. We beantwoorden jouw verzoek zo snel mogelijk.',
  },
]

const Privacy = () => {
  return (
    <section
      id="privacy"
      className="relative overflow-hidden bg-porcelain py-24 sm:py-28"
      aria-labelledby="privacy-heading"
    >
      <span className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
            Privacybeleid
          </span>
          <h2 id="privacy-heading" className="mt-4 text-3xl font-semibold text-charcoal sm:text-4xl">
            Jouw privacy, onze zorg
          </h2>
          <p className="mt-4 text-base text-charcoal/70 sm:text-lg">
            Bij Kapsalon - Diamond Hair Beauty behandelen we persoonsgegevens met de grootste
            zorg. Hieronder lees je hoe we met jouw gegevens omgaan volgens de AVG/GDPR-richtlijnen.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {privacyItems.map((item, index) => (
            <motion.article
              key={item.title}
              className="rounded-3xl border border-gold/30 bg-white/85 p-8 shadow-[0_30px_60px_-45px_rgba(198,166,100,0.4)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_35px_60px_-40px_rgba(198,166,100,0.45)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <h3 className="text-lg font-semibold text-charcoal sm:text-xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70 sm:text-base">{item.body}</p>
            </motion.article>
          ))}
        </div>

        <motion.p
          className="mt-16 text-center text-sm text-charcoal/60 sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Laatste update: {new Date().toLocaleDateString('nl-BE', { day: '2-digit', month: 'long', year: 'numeric' })}
        </motion.p>
      </div>
    </section>
  )
}

export default Privacy
