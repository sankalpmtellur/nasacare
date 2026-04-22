import ContactForm from '../components/sections/ContactForm'

export default function Contact() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Contact</h1>
      </div>
      <ContactForm />
    </section>
  )
}
