import { motion } from 'framer-motion'
import lifestyleImage from '../../assets/nasacare-usage-lifestyle.webp'
import { fadeUp } from '../../lib/animations'

export default function LifestyleSection() {
  return (
    <section className="section-shell grid items-center gap-8 lg:grid-cols-[1fr_1.08fr] lg:gap-12">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <h2 className="section-title">Simple care. Real comfort.</h2>
        <p className="section-copy max-w-lg">Clean your nose gently anytime, anywhere with a discreet and hygienic routine you can trust.</p>
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <div className="card-pro overflow-hidden rounded-[1.5rem] p-3">
          <img src={lifestyleImage} alt="Person using NasaCare lifestyle image" className="h-full w-full rounded-xl object-cover" />
        </div>
      </motion.div>
    </section>
  )
}
