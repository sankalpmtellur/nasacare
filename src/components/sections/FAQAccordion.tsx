import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { fadeUp } from '../../lib/animations'

const faqs = [
  { q: 'Is NasaCare safe?', a: 'Yes. NasaCare is designed for gentle and controlled everyday use.' },
  { q: 'Is it reusable?', a: 'No. It is a disposable product intended for single-use hygiene.' },
  { q: 'Can I carry it in public?', a: 'Yes. The packaging is compact, discreet, and travel-friendly.' },
  { q: 'Is the tip soft?', a: 'Yes. The silicone tip is designed for comfort-first cleaning.' },
]

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="container-shell py-10 md:py-14">
      <div className="mx-auto max-w-4xl">
        <h2 className="section-title text-center">Frequently Asked Questions</h2>
        <p className="section-copy text-center">Everything you need to know before you buy.</p>

        <div className="mt-8 space-y-3">
          {faqs.map((faq, index) => {
            const open = openIndex === index
            return (
              <motion.article key={faq.q} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="card-pro overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex((prev) => (prev === index ? null : index))}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-base font-bold text-slate-900">{faq.q}</span>
                  <ChevronDown size={18} className={`shrink-0 text-slate-500 transition ${open ? 'rotate-180 text-[#3f9f8e]' : ''}`} />
                </button>
                {open ? <p className="border-t border-[#deeaeb] px-5 py-4 text-sm text-slate-600">{faq.a}</p> : null}
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
