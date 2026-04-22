import FAQAccordion from '../components/sections/FAQAccordion'

export default function FAQ() {
  return (
    <section className="py-14 md:py-16">
      <div className="container-shell text-center">
        <p className="inline-flex rounded-full bg-[#e7f5f2] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#2f8c7d]">
          FAQ
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">Questions answered clearly</h1>
      </div>
      <FAQAccordion />
    </section>
  )
}
