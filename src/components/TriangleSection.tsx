export default function TriangleSection() {
  const pillars = [
    { icon: '🌙', title: 'SLEEP', borderClass: 'border-blue-400', titleClass: 'text-blue-400', body: 'Your nightly sleep score (1-100) is the input. Everything else adapts to it.' },
    { icon: '⚡', title: 'TRAIN', borderClass: 'border-brand-orange', titleClass: 'text-brand-orange', body: 'Score above 75? Progressive overload unlocked. Score below 60? Recovery protocol with lower volume and active rest.' },
    { icon: '🥗', title: 'FUEL', borderClass: 'border-brand-green', titleClass: 'text-brand-green', body: 'Macros recalculate daily from the FDA nutrition database. Your plate matches your recovery needs, not a static meal plan.' },
  ]
  return (
    <section className="bg-brand-dark py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-6xl text-white mb-4">ONE SYSTEM. THREE LEVERS. CLOSED LOOP.</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Most fitness tools address one corner of the triangle. APEXLOOP works all three simultaneously.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map(p => (
            <div key={p.title} className={`bg-white/5 backdrop-blur rounded-2xl p-8 border-2 ${p.borderClass}`}>
              <div className="text-5xl mb-4">{p.icon}</div>
              <h3 className={`font-display text-3xl mb-3 ${p.titleClass}`}>{p.title}</h3>
              <p className="text-gray-300 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
