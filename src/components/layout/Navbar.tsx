import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/product', label: 'Product' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-4 py-2 text-sm font-semibold transition ${isActive ? 'bg-[#e8f5f2] text-[#2f8c7d]' : 'text-slate-700 hover:bg-slate-100'
  }`

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#deeaeb] bg-white/95 backdrop-blur">
      <nav className="container-shell flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3" aria-label="NasaCare Home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#e4f4f1] text-sm font-bold text-[#2f8c7d]">
            N
          </span>
          <div>
            <p className="text-[1.05rem] font-extrabold tracking-tight text-slate-900">NasaCare</p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          <Link to="/pricing" className="btn-primary ml-2">
            Buy Now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex rounded-xl border border-[#d6e4e5] bg-white p-2 text-slate-700 lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="container-shell pb-4 lg:hidden">
          <div className="card-pro p-3">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 text-sm font-semibold ${isActive ? 'bg-[#e8f5f2] text-[#2f8c7d]' : 'text-slate-700 hover:bg-slate-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link to="/pricing" onClick={() => setIsOpen(false)} className="btn-primary mt-2">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
