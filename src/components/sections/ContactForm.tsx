import { motion } from 'framer-motion'
import type { FormEvent } from 'react'
import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { fadeUp } from '../../lib/animations'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="container-shell grid gap-6 py-10 md:grid-cols-[1.15fr_0.85fr] md:py-14">
      <motion.form variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} onSubmit={handleSubmit} className="card-pro p-6 md:p-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">Send us a message</h2>
        <p className="mt-2 text-sm text-slate-600">Our team usually replies within one business day.</p>

        <div className="mt-6 space-y-4">
          <input required type="text" placeholder="Name" className="w-full rounded-xl border border-[#dbe7e8] bg-white px-4 py-3 text-sm outline-none focus:soft-ring" />
          <input required type="email" placeholder="Email" className="w-full rounded-xl border border-[#dbe7e8] bg-white px-4 py-3 text-sm outline-none focus:soft-ring" />
          <textarea required rows={5} placeholder="Message" className="w-full resize-none rounded-xl border border-[#dbe7e8] bg-white px-4 py-3 text-sm outline-none focus:soft-ring" />
        </div>

        <button type="submit" className="btn-primary mt-5">
          Send Message
        </button>
        {submitted ? <p className="mt-3 text-sm font-semibold text-[#2f8c7d]">Thanks. We will get back to you soon.</p> : null}
      </motion.form>

      <motion.aside variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="card-pro bg-surface-soft p-6 md:p-8">
        <h3 className="text-xl font-extrabold tracking-tight text-slate-900">Contact Details</h3>
        <div className="mt-5 space-y-4 text-sm text-slate-700">
          <p className="flex items-center gap-3"><Mail size={16} className="text-[#3f9f8e]" />contact@nasacare.com</p>
          <p className="flex items-center gap-3"><Phone size={16} className="text-[#3f9f8e]" />+91 6363002342</p>
          <p className="flex items-center gap-3"><MapPin size={16} className="text-[#3f9f8e]" />Rishihood University, Delhi NCR, India</p>
        </div>
      </motion.aside>
    </section>
  )
}
