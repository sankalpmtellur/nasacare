import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp } from '../../lib/animations'

export default function CTASection() {
  return (
    <section className="section-shell">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="card-pro rounded-[1.6rem] bg-gradient-to-r from-[#68c2b0] to-[#4ca393] px-6 py-10 text-center text-white md:px-10 md:py-12">
        <h2 className="text-3xl font-extrabold tracking-tight">Try NasaCare Today</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/90 md:text-base">
          Upgrade your daily routine with a hygienic, portable, and comfort-first nasal care solution.
        </p>
        <Link to="/pricing" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-[#2f8c7d] transition hover:brightness-95">
          Buy Now
        </Link>
      </motion.div>
    </section>
  )
}
