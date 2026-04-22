import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp } from '../../lib/animations'

export default function CTASection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="rounded-[2rem] bg-gradient-to-r from-mint-500 to-teal-500 px-6 py-10 text-center text-white shadow-soft sm:px-10"
      >
        <h2 className="text-3xl font-semibold">Try NasaCare Today</h2>
        <p className="mt-3 text-white/90">A simple upgrade for cleaner, more comfortable daily hygiene.</p>
        <Link
          to="/pricing"
          className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-mint-700 transition hover:scale-[1.03]"
        >
          Buy Now
        </Link>
      </motion.div>
    </section>
  )
}
