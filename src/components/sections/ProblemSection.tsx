interface PainCard {
  icon: string
  title: string
  description: string
}

const PAIN_CARDS: PainCard[] = [
  {
    icon: '🛌',
    title: 'Ignoring Recovery Signals',
    description: "You train hard but miss what last night's sleep is telling you about today's capacity.",
  },
  {
    icon: '📱',
    title: "Apps That Don't Communicate",
    description: 'Strava, MyFitnessPal, Oura — siloed data, no shared intelligence, no unified picture.',
  },
  {
    icon: '📋',
    title: 'Generic Programs',
    description: "Static plans that never adjust for your body's daily readiness or weekly recovery state.",
  },
]

const ProblemSection: React.FC = () => (
  <section id="problem" className="py-24 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      {/* Label */}
      <p className="text-center text-xs font-bold uppercase tracking-widest text-apex-orange mb-4">
        The Problem
      </p>

      {/* Headline */}
      <h2 className="font-display text-4xl md:text-5xl text-center text-gray-900 mb-4">
        Your Fitness Tools Are Lying To Each Other
      </h2>

      {/* Subheadline */}
      <p className="text-center text-gray-500 text-lg max-w-2xl mx-auto mb-16">
        60% of active individuals overtrain when sleep-deprived &mdash; because
        their apps don&apos;t communicate.
      </p>

      {/* Pain cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PAIN_CARDS.map((card) => (
          <div
            key={card.title}
            className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
          >
            <div className="text-4xl mb-4">{card.icon}</div>
            <h3 className="font-display text-2xl text-gray-900 mb-2">{card.title}</h3>
            <p className="text-gray-600 leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default ProblemSection
