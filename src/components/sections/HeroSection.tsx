import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroProduct from '../../assets/nasacare-hero-product.webp'
import { fadeUp } from '../../lib/animations'

export default function HeroSection() {
  return (
    <section className="section-shell grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
      <motion.div variants={fadeUp} initial="hidden" animate="show">
        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
          Gentle, safe, and hygienic
          <span className="mt-1 block text-mint">nasal cleaning for everyday life.</span>
        </h1>
        <p className="mt-5 max-w-xl text-base text-slate-600 md:text-lg">
          NasaCare disposable nasal cleaning sticks are designed for clean handling, comfort-first use, and reliable hygiene at home or while traveling.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/pricing" className="btn-primary">
            Shop Now
          </Link>
          <Link to="/how-it-works" className="btn-secondary gap-2">
            How It Works <ArrowRight size={16} />
          </Link>
        </div>
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.08 }}>
        <div className="card-pro overflow-hidden rounded-[1.6rem] bg-[#eff8f6] p-5 md:p-7">
          <img src={heroProduct} alt="NasaCare disposable nasal cleaning stick" className="mx-auto max-h-[520px] w-full object-contain" />
        </div>
      </motion.div>
    </section>
  )
}
