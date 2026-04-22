import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../lib/animations'

const quotes = ['So convenient for travel.', 'Better than tissues.', 'Safe and discreet.']

export default function Testimonials() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-8 text-center"
      >
        <h2 className="text-3xl font-semibold text-slate-900">Loved by Everyday Users</h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-5 md:grid-cols-3"
      >
        {quotes.map((quote) => (
          <motion.article key={quote} variants={fadeUp} className="rounded-2xl bg-white p-6 shadow-soft">
            <p className="text-lg text-slate-700">"{quote}"</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
