export default function Footer() {
  const columns = [
    { heading: 'PRODUCT', links: ['How It Works', 'Pricing', 'Download App'] },
    { heading: 'COMPANY', links: ['About', 'Blog', 'Careers'] },
    { heading: 'LEGAL', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'] },
  ]
  return (
    <footer className="bg-brand-dark border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <p className="font-display text-brand-yellow text-xl">APEXLOOP</p>
            <p className="text-gray-400 text-sm mt-2">Sleep Smarter. Train Harder. Fuel Right.</p>
          </div>
          {columns.map(col => (
            <div key={col.heading}>
              <p className="text-white text-xs tracking-widest uppercase mb-4">{col.heading}</p>
              {col.links.map(link => (<a key={link} href="#" className="text-gray-400 hover:text-white text-sm block mb-2 transition-colors">{link}</a>))}
            </div>
          ))}
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">2025 APEXLOOP. All rights reserved.</p>
          <p className="text-gray-600 text-xs italic">Testimonials are illustrative placeholders. Results may vary.</p>
        </div>
      </div>
    </footer>
  )
}
