import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import featuresImage from '../../assets/nasacare-features-diagram.webp'
import { fadeUp } from '../../lib/animations'

const bullets = ['Soft Spiral Tips', 'Safety Base', 'Anti-slip Grip', 'Dual Ended Design']

export default function ProductShowcase() {
  return (
    <section className="section-shell grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <div className="card-pro overflow-hidden rounded-[1.4rem] bg-surface-soft p-5">
          <img src={featuresImage} alt="NasaCare product feature diagram" className="mx-auto max-h-[440px] w-full object-contain" />
        </div>
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <h2 className="section-title">Thoughtful design that works every day</h2>
        <p className="section-copy">
          NasaCare combines safety-first geometry with soft-touch cleaning to support daily nasal hygiene in a simple and dependable way.
        </p>
        <ul className="mt-6 space-y-3">
          {bullets.map((item) => (
            <li key={item} className="card-pro flex items-center gap-3 px-4 py-3 text-sm font-semibold text-slate-700">
              <CheckCircle2 size={18} className="text-[#45a090]" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
