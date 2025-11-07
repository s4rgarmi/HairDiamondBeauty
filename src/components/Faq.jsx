import { motion } from 'framer-motion'

const faqs = [
  {
    question: 'Welke diensten bieden jullie aan naast knippen en kleuren?',
    answer:
      'Naast precisieknip- en kleurtechnieken bieden we keratine en herstelbehandelingen, hoofdhuidverzorgingen en volledige bridal styling inclusief proefsessie en touch-up kit.',
  },
  {
    question: 'Hoe kan ik het snelst een afspraak boeken?',
    answer:
      'Klik op de knop “Boek nu” bovenaan de pagina om direct via Cal.com een afspraak in te plannen. Telefonisch reserveren kan via +32 470 77 62 20.',
  },
  {
    question: 'Werken jullie met natuurlijke of vegan producten?',
    answer:
      'Ja, we selecteren merken die cruelty free zijn en zoveel mogelijk natuurlijke ingrediënten gebruiken om de gezondheid en glans van je haar te behouden.',
  },
  {
    question: 'Kan ik een bruidsarrangement op maat laten samenstellen?',
    answer:
      'Zeker! Tijdens een kennismakingsgesprek bespreken we jouw dagplanning, gewenste stijl en eventuele extra services voor het bruidsfeest. We maken daarna een persoonlijk plan.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

const Faq = () => {
  return (
    <section className="bg-mink py-20 sm:py-24" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
            Veelgestelde vragen
          </span>
          <h2 id="faq-heading" className="mt-4 text-3xl font-semibold text-charcoal sm:text-4xl">
            Antwoorden voor jouw salonbezoek
          </h2>
          <p className="mt-4 text-base text-charcoal/70 sm:text-lg">
            Vind je geen antwoord op je vraag? Bel of mail ons team en we helpen je met plezier verder.
          </p>
        </motion.div>

        <div className="mt-12 space-y-6">
          {faqs.map((faq, index) => (
            <motion.article
              key={faq.question}
              className="rounded-3xl border border-black/10 bg-white/80 p-6 text-left shadow-[0_24px_50px_-32px_rgba(15,15,15,0.18)] sm:p-8"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <h3 className="text-xl font-semibold text-charcoal sm:text-2xl">{faq.question}</h3>
              <p className="mt-3 text-base text-charcoal/70 sm:text-lg">{faq.answer}</p>
            </motion.article>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  )
}

export default Faq
