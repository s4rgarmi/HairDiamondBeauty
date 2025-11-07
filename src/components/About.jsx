import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="relative bg-linen py-20 sm:py-24" aria-labelledby="about-heading">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 sm:px-10 lg:flex-row lg:items-center lg:px-12">
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">
            Over ons
          </span>
          <h2 id="about-heading" className="text-3xl font-semibold text-charcoal sm:text-4xl">
            Vakmanschap, zorg en een persoonlijke aanpak
          </h2>
          <p className="text-base leading-relaxed text-charcoal/70 sm:text-lg">
            Kapsalon - Diamond Hair Beauty is een boutique kapsalon dat luxe haarverzorging combineert met
            ongeëvenaarde service. Van precisieknipbeurten en balayage tot keratinebehandelingen – ons
            team creëert looks die jouw persoonlijkheid laten schitteren. Onze missie? Jouw natuurlijke
            schoonheid versterken met een ervaring die zowel ontspannend als inspirerend is.
          </p>
          <p className="text-base leading-relaxed text-charcoal/70 sm:text-lg">
            We werken uitsluitend met hoogwaardige producten, nemen de tijd voor een uitgebreid
            consult en begeleiden je naar het kapsel dat het beste bij jou past. Je bent van harte welkom
            voor zowel een snelle touch-up als een volledige make-over.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5 text-xs font-semibold uppercase tracking-[0.35em] text-charcoal/70">
            <span className="text-slate">Volg ons</span>
            <a
              href="https://www.instagram.com/kapsalondiamond/"
              target="_blank"
              rel="noreferrer"
              className="text-charcoal/70 transition hover:text-gold"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/306242422569306?ref=pro_upsell_xav_ig_profile_page_web"
              target="_blank"
              rel="noreferrer"
              className="text-charcoal/70 transition hover:text-gold"
            >
              Facebook
            </a>
            <a
              href="https://www.tiktok.com/@kapsalon_diamond?_t=ZG-90kDiQGjhZZ&_r=1"
              target="_blank"
              rel="noreferrer"
              className="text-charcoal/70 transition hover:text-gold"
            >
              TikTok
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-ash shadow-lg shadow-black/5">
            <img
              src="/images/7a63d4c9-35f1-4af4-b617-7c3ef0936961.jpg"
              alt="Eigenaresse van Diamond Beauty salon"
              className="h-full w-full object-cover brightness-[0.95]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-black/10 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
