import { motion } from 'framer-motion'

const galleryImages = [
  '/images/haarfoto1.jpeg',
  '/images/haarfoto2.jpeg',
  '/images/haarfoto3.jpeg',
  '/images/haarfoto4.jpeg',
  '/images/haarfoto5.jpeg',
  '/images/haarfoto6.jpeg',
]

const Gallery = () => {
  return (
    <section className="relative overflow-hidden bg-pearl py-24 sm:py-28" aria-labelledby="gallery-heading">
      <span className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
      <span className="pointer-events-none absolute bottom-0 right-0 hidden h-64 w-64 translate-x-1/3 translate-y-1/3 rounded-full bg-gold/15 blur-3xl sm:block" />
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((src, index) => (
            <motion.div
              key={src}
              className="overflow-hidden rounded-[2.5rem] border border-white/40 bg-white/70 shadow-[0_40px_80px_-48px_rgba(15,15,15,0.35)] transition hover:-translate-y-2 hover:shadow-[0_45px_80px_-40px_rgba(198,166,100,0.35)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <img
                src={src}
                alt=""
                className="h-[320px] w-full object-cover transition duration-500 hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
