import { motion } from 'framer-motion'
import featuresImage from '../../assets/nasacare-features-diagram.png'
import { fadeUp } from '../../lib/animations'

const bullets = ['Soft Spiral Tips', 'Safety Base', 'Anti-slip Grip', 'Dual Ended Design']

export default function ProductShowcase() {
  return (
    <section className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:px-8">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="rounded-[2rem] bg-slate-50 p-6 shadow-soft"
      >
        <img src={featuresImage} alt="NasaCare features diagram" className="mx-auto w-full max-w-md object-contain" />
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <h2 className="text-3xl font-semibold text-slate-900">Product Showcase</h2>
        <p className="mt-3 text-slate-600">
          A practical design built to keep everyday nasal hygiene simple, clean, and comfortable.
        </p>
        <ul className="mt-6 space-y-3">
          {bullets.map((item) => (
            <li key={item} className="rounded-xl border border-slate-100 bg-white px-4 py-3 text-sm text-slate-700 shadow-soft">
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
