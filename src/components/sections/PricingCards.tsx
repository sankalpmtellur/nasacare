import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../lib/animations'

const tiers = [
  { name: '20 sticks', price: '₹599', note: 'Good for first-time users', featured: false },
  { name: '50 sticks', price: '₹999', note: 'Most popular for monthly use', featured: true },
  { name: '100 sticks', price: '₹1,499', note: 'Best for family stock-up', featured: false },
]

export default function PricingCards() {
  return (
    <motion.section variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="container-shell grid gap-5 py-10 md:grid-cols-3">
      {tiers.map((tier) => (
        <motion.article key={tier.name} variants={fadeUp} className={`relative rounded-2xl border p-6 ${tier.featured ? 'border-[#95d4c9] bg-[#eff8f6] shadow-[0_18px_34px_rgba(41,122,107,0.15)]' : 'border-[#deeaeb] bg-white shadow-[0_14px_30px_rgba(19,32,39,0.06)]'}`}>
          {tier.featured ? (
            <span className="absolute -top-3 left-6 rounded-full bg-[#3f9f8e] px-3 py-1 text-xs font-bold text-white">Best value</span>
          ) : null}
          <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
          <p className="mt-1 text-sm text-slate-600">{tier.note}</p>
          <p className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900">{tier.price}</p>
          <button type="button" className="btn-primary mt-6 w-full">
            Buy Now
          </button>
        </motion.article>
      ))}
    </motion.section>
  )
}
