import WaitlistForm from './WaitlistForm';

export default function PricingSection() {
  const cards = [
    {
      name: 'FREE', subtitle: 'Basic Tracking', price: 'Free', note: null, featured: false,
      features: ['Sleep score (1-100)', 'Basic trend charts', 'Manual workout logging', '7-day history'],
      cta: { label: 'Download App', style: 'border-2 border-white text-white hover:bg-white hover:text-gray-900' },
      card: 'bg-white/10 text-white',
    },
    {
      name: 'PREMIUM', subtitle: 'Full Adaptive System', price: '$14.99/mo', note: 'or $119/yr — save 34%', featured: true,
      features: ['Everything in Free', 'AI workout adaptation', 'Dynamic macro targets', '12-week programs', 'Social accountability', 'Priority support'],
      cta: { label: 'Start Free Trial', style: 'bg-white text-orange-500 hover:bg-gray-100' },
      card: 'bg-orange-500 text-white',
    },
    {
      name: 'HARDWARE', subtitle: 'The Device', price: '$149', note: 'One-time purchase', featured: false,
      features: ['APEXLOOP bedside unit', '60GHz radar sensor', 'WiFi 6 + Bluetooth', '3-day battery backup', '3 months free app included'],
      cta: null,
      card: 'bg-yellow-400 text-gray-900',
    },
  ];

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="bg-gray-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="pricing-heading" className="font-display text-4xl lg:text-5xl text-white text-center mb-16 max-w-4xl mx-auto">
          HARDWARE ONCE. INSIGHTS DAILY.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          {cards.map((card, index) => (
            <div key={index} className={`rounded-2xl p-8 flex flex-col ${card.card} ${card.featured ? 'shadow-2xl md:scale-105' : 'shadow-lg'}`}>
              <div className="text-sm font-bold tracking-widest mb-2 uppercase opacity-70">{card.name}</div>
              <h3 className="text-2xl font-bold mb-4">{card.subtitle}</h3>
              <div className="text-4xl font-bold mb-1">{card.price}</div>
              {card.note && <div className="text-sm opacity-80 mb-6">{card.note}</div>}
              {!card.note && <div className="mb-6" />}
              <ul className="space-y-3 mb-8 flex-grow" aria-label={`${card.name} plan features`}>
                {card.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2">
                    <span aria-hidden="true">✓</span>
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              {card.cta ? (
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${card.cta.style}`}>{card.cta.label}</button>
              ) : (
                <WaitlistForm variant="cta" formId={`pricing-waitlist-${index}`} />
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-sm">Hardware available Q3 2025. App available now.</p>
      </div>
    </section>
  );
}
