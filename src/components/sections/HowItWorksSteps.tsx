import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../lib/animations'

type HowItWorksStepsProps = {
  steps?: string[]
  title?: string
  subtitle?: string
}

const defaultSteps = ['Hold middle', 'Insert gently', 'Rotate slightly', 'Flip', 'Use second side', 'Dispose']

export default function HowItWorksSteps({
  steps = defaultSteps,
  title = 'How It Works',
  subtitle = 'A clean routine in a few easy steps.',
}: HowItWorksStepsProps) {
  return (
    <section className="section-shell">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mx-auto mb-8 max-w-2xl text-center">
        <h2 className="section-title">{title}</h2>
        <p className="section-copy">{subtitle}</p>
      </motion.div>

      <motion.ol variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
        {steps.map((step, index) => (
          <motion.li key={step} variants={fadeUp} className="card-pro p-4 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.11em] text-[#3f9f8e]">Step {index + 1}</p>
            <p className="mt-2 text-sm font-semibold text-slate-900">{step}</p>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  )
}
