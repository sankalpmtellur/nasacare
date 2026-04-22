import { motion } from 'framer-motion'
import { CircleDot, ShieldCheck, Sparkles, Syringe } from 'lucide-react'
import { fadeUp, staggerContainer } from '../../lib/animations'

const features = [
  {
    icon: CircleDot,
    title: 'Dual Ended',
    text: 'Designed for practical two-side use while maintaining disposable hygiene.',
  },
  {
    icon: Sparkles,
    title: 'Soft Silicone Tips',
    text: 'Comfortable tip texture for a gentle cleaning experience.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety Stopper',
    text: 'Balanced structure supports safer handling and controlled use.',
  },
  {
    icon: Syringe,
    title: 'Hygienic Disposable',
    text: 'Single-use format for reliable freshness and convenience.',
  },
]

export default function FeatureGrid() {
  return (
    <section className="section-shell">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mx-auto mb-9 max-w-2xl text-center">
        <h2 className="section-title">Built for comfort, designed for safety</h2>
        <p className="section-copy">Every detail is shaped for a cleaner, more confident daily hygiene routine.</p>
      </motion.div>

      <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => (
          <motion.article key={feature.title} variants={fadeUp} className="card-pro p-6">
            <feature.icon className="h-8 w-8 text-[#45a090]" />
            <h3 className="mt-4 text-lg font-bold text-slate-900">{feature.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{feature.text}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
