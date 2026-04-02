interface Card { tier: string; price: string; sub?: string; features: string[]; cta: string; cardClass: string; ctaClass: string; tierClass: string; priceClass: string }

export default function PricingSection() {
  const cards: Card[] = [
    { tier: 'FREE', price: 'Free', features: ['Sleep score (1-100)', 'Basic trend charts', 'Manual workout logging', '7-day history'], cta: 'Download App', cardClass: 'bg-white/10 text-white border border-white/20', ctaClass: 'border-2 border-white text-white hover:bg-white hover:text-brand-dark', tierClass: 'text-gray-300', priceClass: 'text-white' },
    { tier: 'PREMIUM', price: '$14.99/mo', sub: 'or $119/yr, save 34%', features: ['Everything in Free', 'AI workout adaptation', 'Dynamic macro targets', '12-week goal programs', 'Social accountability', 'Priority support'], cta: 'Start Free Trial', cardClass: 'bg-brand-orange text-white md:scale-105 shadow-2xl', ctaClass: 'bg-white text-brand-orange hover:bg-gray-100 font-bold', tierClass: 'text-orange-200', priceClass: 'text-white' },
    { tier: 'HARDWARE', price: '$149', sub: 'One-time purchase', features: ['APEXLOOP bedside unit', '60GHz radar sensor', 'WiFi 6 + Bluetooth', '3-day battery backup', '3 months Premium included'], cta: 'Join Hardware Waitlist', cardClass: 'bg-brand-yellow text-brand-dark border border-yellow-300', ctaClass: 'bg-brand-dark text-brand-yellow hover:bg-gray-900', tierClass: 'text-yellow-700', priceClass: 'text-brand-dark' },
  ]
  return (
    <section id="pricing" className="bg-brand-dark py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-6xl text-white mb-4">HARDWARE ONCE. INSIGHTS DAILY.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {cards.map(card => (
            <div key={card.tier} className={`rounded-2xl p-8 ${card.cardClass}`}>
              <p className={`text-xs font-semibold tracking-widest uppercase mb-2 ${card.tierClass}`}>{card.tier}</p>
              <p className={`font-display text-5xl mb-1 ${card.priceClass}`}>{card.price}</p>
              {card.sub && <p className="text-sm opacity-75 mb-6">{card.sub}</p>}
              <ul className="space-y-3 mb-8">
                {card.features.map(f => (<li key={f} className="flex items-start gap-2 text-sm"><span className="mt-0.5">✓</span><span>{f}</span></li>))}
              </ul>
              <a href="#waitlist" className={`block w-full text-center rounded-lg px-6 py-3 font-semibold transition-colors ${card.ctaClass}`}>{card.cta}</a>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm mt-10">Hardware available Q3 2025. App available now.</p>
      </div>
    </section>
  )
}
