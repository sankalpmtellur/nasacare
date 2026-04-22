import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'

export default function About() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <motion.div variants={fadeUp} initial="hidden" animate="show" className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">About NasaCare</h1>
        <p className="mt-5 text-lg text-slate-600">
          NasaCare makes nasal hygiene simple, safe, and discreet. Inspired by cotton buds, designed specifically for the nose.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-semibold text-slate-900">Mission</h2>
          <p className="mt-2 text-sm text-slate-600">Make hygiene simple.</p>
        </article>
        <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-semibold text-slate-900">Vision</h2>
          <p className="mt-2 text-sm text-slate-600">Portable everyday hygiene.</p>
        </article>
        <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-semibold text-slate-900">Values</h2>
          <p className="mt-2 text-sm text-slate-600">Safe, Gentle, Portable, Hygienic.</p>
        </article>
      </div>
    </section>
  )
}
