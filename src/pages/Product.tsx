import { motion } from 'framer-motion'
import heroProduct from '../assets/nasacare-hero-product.png'
import PackagingSection from '../components/sections/PackagingSection'
import ProductShowcase from '../components/sections/ProductShowcase'
import { fadeUp } from '../lib/animations'

const highlights = ['Dual ended design', 'Soft silicone tips', 'Safety base', 'Anti slip grip', 'Disposable']

export default function Product() {
  return (
    <>
      <section className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            NasaCare Disposable Nasal Cleaning Stick
          </h1>
          <ul className="mt-6 space-y-3 text-slate-700">
            {highlights.map((item) => (
              <li key={item} className="rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-soft">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.12 }}
          className="rounded-[2rem] bg-mint-50 p-6 shadow-soft"
        >
          <img src={heroProduct} alt="NasaCare product" className="mx-auto w-full max-w-md" />
        </motion.div>
      </section>

      <ProductShowcase />
      <PackagingSection title="Box Contents" bullets={['20 sticks', 'Individual packs', 'Travel box']} />
    </>
  )
}
