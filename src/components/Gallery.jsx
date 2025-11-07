import { motion } from 'framer-motion'

const menGallery = [
  {
    id: 'men-1',
    title: 'Gentlemen fade',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
    tag: 'Barber artistry',
    blurb: 'Strakke fade met hot-towel finish en matte styling voor langdurige hold.',
  },
  {
    id: 'men-2',
    title: 'Classic barber finish',
    image:
      'https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=1200&q=80',
    tag: 'Classic trim',
    blurb: 'Traditionele barber cut met scherpe zijscheiding en verzorgde afwerking.',
  },
  {
    id: 'men-3',
    title: 'Textured crop',
    image:
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80',
    tag: 'Texture detail',
    blurb: 'Gegradueerde crop met extra volume, structuurpoeder en natuurlijke beweging.',
  },
]

const womenGallery = [
  {
    id: 'women-1',
    title: 'Soft balayage blend',
    image:
      'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=1200&q=80',
    tag: 'Balayage luxe',
    blurb: 'Naadloze balayagekleur met warme caramel reflecties en zijdeglans.',
  },
  {
    id: 'women-2',
    title: 'Elegant bridal updo',
    image:
      'https://images.unsplash.com/photo-1520854221050-0f4caff449fb?auto=format&fit=crop&w=1200&q=80',
    tag: 'Bridal couture',
    blurb: 'Romantische bruidsknot met parel details, zachte lokken en langdurige fixatie.',
  },
  {
    id: 'women-3',
    title: 'Platinum wave finish',
    image:
      'https://images.unsplash.com/photo-1464621922360-27f3bf0eca75?auto=format&fit=crop&w=1200&q=80',
    tag: 'Platinum gloss',
    blurb: 'Glanzende platinum waves met Hollywood styling en spiegelende topgloss.',
  },
]

const Gallery = () => {
  return (
    <section className="relative overflow-hidden bg-pearl py-24 sm:py-28" aria-labelledby="gallery-heading">
      <span className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
      <span className="pointer-events-none absolute bottom-0 right-0 hidden h-64 w-64 translate-x-1/3 translate-y-1/3 rounded-full bg-gold/15 blur-3xl sm:block" />
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[...menGallery, ...womenGallery].map((item, index) => (
            <motion.div
              key={item.id}
              className="overflow-hidden rounded-[2.5rem] border border-white/40 bg-white/70 shadow-[0_40px_80px_-48px_rgba(15,15,15,0.35)] transition hover:-translate-y-2 hover:shadow-[0_45px_80px_-40px_rgba(198,166,100,0.35)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <img
                src={item.image}
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
