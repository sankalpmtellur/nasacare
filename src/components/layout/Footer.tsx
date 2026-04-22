import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/product', label: 'Product' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-100 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="text-xl font-semibold text-slate-900">NasaCare</p>
          <p className="mt-3 max-w-xs text-sm text-slate-600">
            Gentle daily nasal hygiene designed for comfort, safety, and confidence.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-900">Quick Links</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
            {footerLinks.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-mint-700">
                {link.label}
              </Link>
            ))}
            <a href="#" className="hover:text-mint-700">
              Privacy Policy
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-900">Social</p>
          <div className="mt-3 flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="rounded-full bg-white p-2 shadow-soft hover:text-mint-700">
              <FaInstagram size={16} />
            </a>
            <a href="#" aria-label="Facebook" className="rounded-full bg-white p-2 shadow-soft hover:text-mint-700">
              <FaFacebookF size={16} />
            </a>
            <a href="#" aria-label="LinkedIn" className="rounded-full bg-white p-2 shadow-soft hover:text-mint-700">
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <p className="mx-auto max-w-7xl px-4 py-4 text-xs text-slate-500 sm:px-6 lg:px-8">
          Copyright {new Date().getFullYear()} NasaCare. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
