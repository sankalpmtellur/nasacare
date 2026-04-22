import PricingCards from '../components/sections/PricingCards'

export default function Pricing() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Choose Your Pack</h1>
        <p className="mt-4 text-slate-600">Simple options for everyday use, travel, or family stock-up.</p>
      </div>
      <PricingCards />
    </section>
  )
}
