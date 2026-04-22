import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../lib/animations'

const tiers = [
  { name: '20 sticks', price: '$9.99', featured: false },
  { name: '50 sticks', price: '$19.99', featured: true },
  { name: '100 sticks', price: '$34.99', featured: false },
]

export default function PricingCards() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8"
    >
      {tiers.map((tier) => (
        <motion.article
          key={tier.name}
          variants={fadeUp}
          whileHover={{ y: -6 }}
          className={`relative rounded-3xl border p-6 shadow-soft ${
            tier.featured ? 'border-mint-300 bg-mint-50' : 'border-slate-100 bg-white'
          }`}
        >
          {tier.featured ? (
            <span className="absolute -top-3 right-5 rounded-full bg-mint-600 px-3 py-1 text-xs font-semibold text-white">
              Best value
            </span>
          ) : null}
          <h3 className="text-xl font-semibold text-slate-900">{tier.name}</h3>
          <p className="mt-4 text-3xl font-bold text-slate-900">{tier.price}</p>
          <button
            type="button"
            className="mt-6 w-full rounded-full bg-mint-500 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-mint-600"
          >
            Buy Now
          </button>
        </motion.article>
      ))}
    </motion.section>
  )
}
