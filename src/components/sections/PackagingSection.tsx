import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import packagingImage from '../../assets/nasacare-packaging-box.webp'
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
    <section className="section-shell grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <div className="card-pro overflow-hidden rounded-[1.5rem] bg-surface-soft p-5">
          <img src={packagingImage} alt="NasaCare packaging" className="mx-auto max-h-[440px] w-full rounded-xl object-contain" />
        </div>
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <h2 className="section-title">{title}</h2>
        <ul className="mt-6 space-y-3">
          {bullets.map((item) => (
            <li key={item} className="card-pro flex items-center gap-3 px-4 py-3 text-sm font-semibold text-slate-700">
              <Check size={16} className="text-[#3f9f8e]" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
