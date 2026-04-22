import ContactForm from '../components/sections/ContactForm'

export default function Contact() {
  return (
    <section className="py-14 md:py-16">
      <div className="container-shell text-center">
        <p className="inline-flex rounded-full bg-[#e7f5f2] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#2f8c7d]">
          Contact
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">We are here to help</h1>
        <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 md:text-lg">
          Reach out for product details, partnership inquiries, or customer support.
        </p>
      </div>
      <ContactForm />
    </section>
  )
}
