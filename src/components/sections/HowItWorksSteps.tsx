import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../lib/animations'

type HowItWorksStepsProps = {
  steps?: string[]
  title?: string
}

const defaultSteps = ['Hold middle', 'Insert gently', 'Rotate slightly', 'Flip', 'Use second side', 'Dispose']

export default function HowItWorksSteps({
  steps = defaultSteps,
  title = 'How It Works',
}: HowItWorksStepsProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-8 text-center"
      >
        <h2 className="text-3xl font-semibold text-slate-900">{title}</h2>
      </motion.div>

      <motion.ol
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {steps.map((step, index) => (
          <motion.li
            key={step}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-slate-100 bg-white p-5 shadow-soft"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-mint-700">Step {index + 1}</p>
            <p className="mt-2 text-lg font-semibold text-slate-900">{step}</p>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  )
}
