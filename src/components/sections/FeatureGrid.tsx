import { motion } from 'framer-motion'
import { CircleDot, ShieldCheck, Sparkles, Syringe } from 'lucide-react'
import { fadeUp, staggerContainer } from '../../lib/animations'

const features = [
  {
    icon: CircleDot,
    title: 'Dual Ended',
    text: 'Two usable sides for practical, single-use care whenever needed.',
  },
  {
    icon: Sparkles,
    title: 'Soft Silicone Tips',
    text: 'Comfort-first tips designed for a gentle and smooth cleaning experience.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety Stopper',
    text: 'Thoughtful shape helps promote safer, more controlled usage every time.',
  },
  {
    icon: Syringe,
    title: 'Hygienic Disposable',
    text: 'Use once and dispose for clean, worry-free daily hygiene routines.',
  },
]

export default function FeatureGrid() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto mb-8 max-w-2xl text-center"
      >
        <h2 className="text-3xl font-semibold text-slate-900">Why NasaCare</h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {features.map((feature) => (
          <motion.article
            key={feature.title}
            variants={fadeUp}
            whileHover={{ y: -5 }}
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft"
          >
            <feature.icon className="h-8 w-8 text-mint-600" />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{feature.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{feature.text}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
