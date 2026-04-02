import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [['#how-it-works','How It Works'],['#pricing','Pricing'],['#about','About']];

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 shadow" aria-label="Main navigation">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="font-display text-yellow-400 text-2xl hover:opacity-80 transition-opacity" aria-label="APEXLOOP home">APEXLOOP™</a>
          <div className="hidden md:flex items-center space-x-8">
            {links.map(([href,label]) => (
              <a key={href} href={href} className="text-white hover:text-yellow-400 transition-colors">{label}</a>
            ))}
            <a href="#waitlist" className="bg-orange-500 text-white rounded-full px-5 py-2 hover:bg-orange-600 transition-colors">Join Waitlist</a>
          </div>
          <button
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {open && (
          <div id="mobile-menu" className="absolute top-full left-0 right-0 bg-gray-900 md:hidden py-4 px-4 shadow-lg space-y-3">
            {links.map(([href,label]) => (
              <a key={href} href={href} className="block text-white hover:text-yellow-400 transition-colors py-1" onClick={() => setOpen(false)}>{label}</a>
            ))}
            <a href="#waitlist" className="block bg-orange-500 text-white rounded-full px-5 py-2 text-center hover:bg-orange-600 transition-colors" onClick={() => setOpen(false)}>Join Waitlist</a>
          </div>
        )}
      </div>
    </nav>
  );
}
