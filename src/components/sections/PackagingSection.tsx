import { motion } from 'framer-motion'
import packagingImage from '../../assets/nasacare-packaging-box.png'
import { fadeUp } from '../../lib/animations'

type PackagingSectionProps = {
  title?: string
  bullets?: string[]
}

const defaultBullets = ['Individually wrapped', 'Travel friendly', 'Pocket size', 'Disposable hygienic']

export default function PackagingSection({
  title = 'Hygienic & Portable',
  bullets = defaultBullets,
}: PackagingSectionProps) {
  return (
    <section className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:px-8">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="rounded-[2rem] bg-slate-50 p-6 shadow-soft"
      >
        <img src={packagingImage} alt="NasaCare packaging box" className="mx-auto w-full max-w-md rounded-2xl object-contain" />
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <h2 className="text-3xl font-semibold text-slate-900">{title}</h2>
        <ul className="mt-5 space-y-3">
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
