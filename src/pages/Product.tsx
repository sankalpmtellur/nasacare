import { motion } from 'framer-motion'
import heroProduct from '../assets/nasacare-hero-product.webp'
import PackagingSection from '../components/sections/PackagingSection'
import ProductShowcase from '../components/sections/ProductShowcase'
import { fadeUp } from '../lib/animations'

const highlights = ['Dual ended design', 'Soft silicone tips', 'Safety base & Disposable', 'Anti-slip grip']

export default function Product() {
  return (
    <>
      <section className="section-shell grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <p className="inline-flex rounded-full bg-[#e7f5f2] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#2f8c7d]">
            Product Overview
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            NasaCare Disposable Nasal Cleaning Stick
          </h1>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="card-pro px-4 py-3 text-sm font-semibold text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.08 }}>
          <div className="card-pro overflow-hidden rounded-[1.5rem] bg-[#eff8f6] p-6">
            <img src={heroProduct} alt="NasaCare product" className="mx-auto max-h-[500px] w-full object-contain" />
          </div>
        </motion.div>
      </section>

      <ProductShowcase />
      <PackagingSection title="Box Contents" bullets={['50 sticks', 'Individual packs', 'Travel box']} />
    </>
  )
}
