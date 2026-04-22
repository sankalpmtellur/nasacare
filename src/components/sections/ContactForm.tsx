import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/animations'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 lg:px-8">
      <motion.form
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        onSubmit={handleSubmit}
        className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft"
      >
        <h2 className="text-2xl font-semibold text-slate-900">Contact Us</h2>
        <div className="mt-5 space-y-4">
          <input
            required
            type="text"
            placeholder="Name"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-mint-400 focus:ring"
          />
          <input
            required
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-mint-400 focus:ring"
          />
          <textarea
            required
            rows={5}
            placeholder="Message"
            className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-mint-400 focus:ring"
          />
        </div>
        <button
          type="submit"
          className="mt-5 rounded-full bg-mint-500 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-mint-600"
        >
          Send message
        </button>
        {submitted ? <p className="mt-3 text-sm text-mint-700">Thanks. We will get back to you soon.</p> : null}
      </motion.form>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="rounded-3xl bg-mint-50 p-6"
      >
        <h3 className="text-xl font-semibold text-slate-900">Reach us directly</h3>
        <p className="mt-4 text-sm text-slate-600">Email: hello@nasacare.com</p>
        <p className="mt-2 text-sm text-slate-600">Phone: +1 (555) 123-4567</p>
      </motion.div>
    </section>
  )
}
