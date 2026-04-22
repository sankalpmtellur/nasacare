import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { fadeUp, staggerContainer } from '../../lib/animations'

const quotes = [
  'So convenient for travel.',
  'Better than tissues.',
  'Safe and discreet.',
]

export default function Testimonials() {
  return (
    <section className="section-shell">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mx-auto mb-8 max-w-2xl text-center">
        <h2 className="section-title">Trusted by busy people every day</h2>
      </motion.div>

      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-4 md:grid-cols-3">
        {quotes.map((quote) => (
          <motion.article key={quote} variants={fadeUp} className="card-pro p-6">
            <Quote size={18} className="text-[#4ca393]" />
            <p className="mt-3 text-base font-semibold text-slate-700">"{quote}"</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
