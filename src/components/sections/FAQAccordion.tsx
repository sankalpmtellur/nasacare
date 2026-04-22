import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/animations'

const faqs = [
  { q: 'Is NasaCare safe?', a: 'Yes, it is designed for gentle and safe everyday use.' },
  { q: 'Is it reusable?', a: 'No. Each stick is disposable for hygiene and convenience.' },
  { q: 'Can I carry it in public?', a: 'Yes, the packaging is travel-friendly and discreet.' },
  { q: 'Is the tip soft?', a: 'Yes, it uses soft silicone tips for comfort.' },
]

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl font-semibold text-slate-900">Frequently Asked Questions</h2>
      <div className="mt-8 space-y-3">
        {faqs.map((faq, index) => {
          const open = openIndex === index
          return (
            <motion.article
              key={faq.q}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft"
            >
              <button
                type="button"
                onClick={() => setOpenIndex((prev) => (prev === index ? null : index))}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >
                <span className="font-medium text-slate-900">{faq.q}</span>
                <ChevronDown className={`transition ${open ? 'rotate-180 text-mint-700' : 'text-slate-500'}`} size={18} />
              </button>
              {open ? <p className="border-t border-slate-100 px-5 py-4 text-sm text-slate-600">{faq.a}</p> : null}
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
