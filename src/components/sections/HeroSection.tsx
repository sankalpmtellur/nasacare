import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroProduct from '../../assets/nasacare-hero-product.png'
import { fadeUp } from '../../lib/animations'

export default function HeroSection() {
  return (
    <section className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8">
      <motion.div variants={fadeUp} initial="hidden" animate="show">
        <p className="inline-flex rounded-full bg-mint-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-mint-700">
          Everyday Nasal Hygiene
        </p>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          NasaCare
          <span className="block text-mint-700">Gentle. Safe. Everyday Nasal Hygiene.</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg text-slate-600">
          Disposable nasal cleaning sticks designed for safe, hygienic, everyday use.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/pricing"
            className="rounded-full bg-mint-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:scale-[1.03] hover:bg-mint-600"
          >
            Shop Now
          </Link>
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-mint-300 hover:text-mint-700"
          >
            How It Works <ArrowRight size={16} />
          </Link>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.12 }}
        className="rounded-[2rem] bg-mint-50 p-6 shadow-soft"
      >
        <img src={heroProduct} alt="NasaCare product" className="mx-auto w-full max-w-md object-contain" />
      </motion.div>
    </section>
  )
}
