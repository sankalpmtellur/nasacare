import { motion } from 'framer-motion'
import lifestyleImage from '../../assets/nasacare-usage-lifestyle.png'
import { fadeUp } from '../../lib/animations'

export default function LifestyleSection() {
  return (
    <section className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:px-8">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <h2 className="text-3xl font-semibold text-slate-900">Simple care. Real comfort.</h2>
        <p className="mt-4 max-w-lg text-lg text-slate-600">
          Clean your nose gently anytime, anywhere.
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="rounded-[2rem] bg-mint-50 p-5 shadow-soft"
      >
        <img src={lifestyleImage} alt="Lifestyle usage" className="w-full rounded-2xl object-cover" />
      </motion.div>
    </section>
  )
}
