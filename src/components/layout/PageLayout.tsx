import type { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

type PageLayoutProps = {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen text-slate-900">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
