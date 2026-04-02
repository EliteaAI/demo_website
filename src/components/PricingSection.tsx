import WaitlistForm from './WaitlistForm';

export default function PricingSection() {
  const pricingCards = [
    {
      name: 'FREE',
      subtitle: 'Basic Tracking',
      price: 'Free',
      priceSubtext: null,
      features: ['Sleep score (1-100)', 'Basic trend charts', 'Manual workout logging', '7-day history'],
      cta: 'Download App',
      ctaStyle: 'outline',
      cardStyle: 'bg-white/10 text-white',
      featured: false,
      showButton: true,
    },
    {
      name: 'PREMIUM',
      subtitle: 'Full Adaptive System',
      price: '$14.99/mo',
      priceSubtext: 'or $119/yr — save 34%',
      features: ['Everything in Free', 'AI workout adaptation', 'Dynamic macro targets', '12-week goal programs', 'Social accountability', 'Priority support'],
      cta: 'Start Free Trial →',
      ctaStyle: 'premium',
      cardStyle: 'bg-brand-orange text-white',
      featured: true,
      showButton: true,
    },
    {
      name: 'HARDWARE',
      subtitle: 'The Device',
      price: '$149',
      priceSubtext: 'One-time purchase',
      features: ['APEXLOOP™ bedside unit', '60GHz radar sensor', 'WiFi 6 + Bluetooth', '3-day battery backup', 'Free app subscription included (3 months)'],
      cta: null,
      ctaStyle: 'hardware',
      cardStyle: 'bg-brand-yellow text-brand-dark',
      featured: false,
      showButton: false,
    },
  ];

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="bg-brand-dark py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="pricing-heading" className="font-display text-4xl lg:text-5xl text-white text-center mb-16 max-w-4xl mx-auto">
          HARDWARE ONCE. INSIGHTS DAILY.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          {pricingCards.map((card, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 flex flex-col ${card.cardStyle} ${card.featured ? 'shadow-2xl md:scale-105 transform transition-transform' : 'shadow-lg'}`}
            >
              <div className="text-sm font-bold tracking-widest mb-2 uppercase">{card.name}</div>
              <h3 className="text-2xl font-bold mb-6">{card.subtitle}</h3>
              <div className="mb-2"><span className="text-4xl font-bold">{card.price}</span></div>
              {card.priceSubtext
                ? <div className="text-sm opacity-90 mb-6">{card.priceSubtext}</div>
                : <div className="mb-6" />}
              <ul className="space-y-3 mb-8 flex-grow" aria-label={`${card.name} plan features`}>
                {card.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    <span className="text-lg mt-0.5" aria-hidden="true">✓</span>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              {card.showButton ? (
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    card.ctaStyle === 'outline'
                      ? 'border-2 border-white hover:bg-white hover:text-brand-dark'
                      : 'bg-white text-brand-orange hover:bg-gray-100'
                  }`}
                >
                  {card.cta}
                </button>
              ) : (
                <WaitlistForm variant="cta" formId="pricing-hardware-waitlist" />
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-sm">Hardware available Q3 2025. App available now.</p>
      </div>
    </section>
  );
}
