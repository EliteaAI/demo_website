export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-gray-900 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <button onClick={scrollToTop} className="font-display text-yellow-400 text-xl hover:opacity-80 transition-opacity" aria-label="Back to top">APEXLOOP™</button>
            <p className="text-gray-400 text-sm mt-4">Sleep Smarter. Train Harder. Fuel Right.</p>
          </div>
          <div>
            <h3 className="text-white text-xs tracking-widest uppercase font-semibold mb-4">PRODUCT</h3>
            <ul className="space-y-2">
              {[['#how-it-works','How It Works'],['#pricing','Pricing'],['#app','Download App']].map(([href,label]) => (
                <li key={href}><a href={href} className="text-gray-400 hover:text-white text-sm transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xs tracking-widest uppercase font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              {[['#about','About'],['#blog','Blog'],['#careers','Careers']].map(([href,label]) => (
                <li key={href}><a href={href} className="text-gray-400 hover:text-white text-sm transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xs tracking-widest uppercase font-semibold mb-4">LEGAL</h3>
            <ul className="space-y-2">
              {[['#privacy','Privacy Policy'],['#terms','Terms of Service'],['#cookies','Cookie Policy']].map(([href,label]) => (
                <li key={href}><a href={href} className="text-gray-400 hover:text-white text-sm transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <div>© 2025 APEXLOOP™. All rights reserved.</div>
          <div className="text-gray-600 text-xs italic">Testimonials are illustrative placeholders. Results may vary.</div>
        </div>
      </div>
    </footer>
  );
}
