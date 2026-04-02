import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
  ]
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-display text-brand-yellow text-2xl tracking-wide">APEXLOOP</a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.label} href={link.href} className="text-white hover:text-brand-yellow text-sm font-medium transition-colors">{link.label}</a>
            ))}
            <a href="#waitlist" className="bg-brand-orange text-white rounded-full px-5 py-2 text-sm font-semibold hover:bg-orange-600 transition-colors">Join Waitlist</a>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2" aria-label="Toggle menu">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-brand-dark border-t border-white/10 px-4 pb-4">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="block py-3 text-white hover:text-brand-yellow text-sm font-medium transition-colors">{link.label}</a>
          ))}
          <a href="#waitlist" onClick={() => setIsOpen(false)} className="block mt-2 bg-brand-orange text-white rounded-full px-5 py-2 text-sm font-semibold text-center hover:bg-orange-600 transition-colors">Join Waitlist</a>
        </div>
      )}
    </nav>
  )
}
