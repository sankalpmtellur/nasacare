import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { FaXTwitter } from 'react-icons/fa6'

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/product', label: 'Product' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#deeaeb] bg-white">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-xl font-extrabold text-slate-900">NasaCare</p>
          <p className="mt-3 max-w-sm text-sm text-slate-600">
            Professional, gentle and hygienic nasal care designed for daily comfort at home and on the go.
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-slate-900">Company</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-slate-600">
            {footerLinks.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-[#2f8c7d]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-slate-900">Follow</p>
          <div className="mt-4 flex items-center gap-3">
            <a href="#" className="card-pro rounded-full p-2.5 text-slate-600 hover:text-[#2f8c7d]" aria-label="Instagram">
              <FaInstagram size={15} />
            </a>
            <a href="#" className="card-pro rounded-full p-2.5 text-slate-600 hover:text-[#2f8c7d]" aria-label="Facebook">
              <FaFacebookF size={15} />
            </a>
            <a href="#" className="card-pro rounded-full p-2.5 text-slate-600 hover:text-[#2f8c7d]" aria-label="Twitter">
              <FaXTwitter size={15} />
            </a>
            <a href="#" className="card-pro rounded-full p-2.5 text-slate-600 hover:text-[#2f8c7d]" aria-label="LinkedIn">
              <FaLinkedinIn size={15} />
            </a>
            <a href="#" className="card-pro rounded-full p-2.5 text-slate-600 hover:text-[#2f8c7d]" aria-label="YouTube">
              <FaYoutube size={15} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#deeaeb]">
        <p className="container-shell py-4 text-xs text-slate-500">Copyright {new Date().getFullYear()} NasaCare. All rights reserved.</p>
      </div>
    </footer>
  )
}
