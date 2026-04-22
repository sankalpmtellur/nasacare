import { motion } from 'framer-motion'
import usageImage from '../assets/nasacare-usage-lifestyle.webp'
import HowItWorksSteps from '../components/sections/HowItWorksSteps'
import { fadeUp } from '../lib/animations'

export default function HowItWorks() {
  return (
    <>
      <section className="section-shell">
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="card-pro overflow-hidden rounded-[1.5rem] p-3">
          <img src={usageImage} alt="NasaCare usage" className="h-auto w-full rounded-xl object-cover" />
        </motion.div>
      </section>

      <HowItWorksSteps
        steps={['Hold middle', 'Insert gently', 'Rotate slightly', 'Flip', 'Use second side', 'Dispose']}
        subtitle="Follow each step gently for safe and hygienic use."
      />

      <section className="container-shell pb-14 md:pb-16">
        <div className="card-pro rounded-2xl border-[#bfe3dc] bg-[#f0faf8] p-6">
          <h2 className="text-lg font-extrabold text-slate-900">Safety Note</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>Do not insert deep.</li>
            <li>Use gently.</li>
            <li>Disposable only.</li>
          </ul>
        </div>
      </section>
    </>
  )
}
