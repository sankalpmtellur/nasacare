import { motion } from 'framer-motion'
import usageImage from '../assets/nasacare-usage-lifestyle.png'
import HowItWorksSteps from '../components/sections/HowItWorksSteps'
import { fadeUp } from '../lib/animations'

export default function HowItWorks() {
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="overflow-hidden rounded-[2rem] bg-mint-50 p-4 shadow-soft"
        >
          <img src={usageImage} alt="How NasaCare is used" className="h-auto w-full rounded-2xl object-cover" />
        </motion.div>
      </section>

      <HowItWorksSteps steps={['Hold middle', 'Insert gently', 'Rotate', 'Flip', 'Dispose']} />

      <section className="mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-mint-200 bg-mint-50 p-6">
          <h2 className="text-xl font-semibold text-slate-900">Safety Note</h2>
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
