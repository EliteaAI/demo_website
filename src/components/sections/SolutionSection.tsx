const PRODUCT_IMAGE = `${import.meta.env.BASE_URL}images/product-device.png`

interface TriangleNode {
  id: 'sleep' | 'train' | 'fuel'
  icon: string
  label: string
  description: string
  color: string
}

const TRIANGLE_NODES: TriangleNode[] = [
  {
    id: 'sleep',
    icon: '🌙',
    label: 'Sleep',
    description: 'Contactless bedside sensor scores your recovery nightly — no wearable needed.',
    color: 'text-apex-green',
  },
  {
    id: 'train',
    icon: '💪',
    label: 'Train',
    description: 'Your workout intensity auto-adjusts to your readiness score every morning.',
    color: 'text-apex-orange',
  },
  {
    id: 'fuel',
    icon: '🥗',
    label: 'Fuel',
    description: 'Daily macros recalculate based on your recovery state and performance goals.',
    color: 'text-apex-yellow',
  },
]

const SolutionSection: React.FC = () => (
  <section id="solution" aria-labelledby="solution-heading" className="py-24 px-6 bg-apex-yellow">
    <div className="max-w-6xl mx-auto">
      <p className="text-center text-xs font-bold uppercase tracking-widest text-apex-dark/60 mb-4">
        The Solution
      </p>

      <h2
        id="solution-heading"
        className="font-display text-4xl md:text-5xl text-center text-apex-dark mb-4"
      >
        One System. Three Forces. Zero Guesswork.
      </h2>

      <p className="text-center text-apex-dark/70 text-lg max-w-2xl mx-auto mb-16">
        APEXLOOP connects your sleep data to your training and nutrition &mdash; automatically.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {TRIANGLE_NODES.map((node) => (
          <div
            key={node.id}
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
          >
            <div className="text-5xl mb-4" aria-hidden="true">{node.icon}</div>
            <h3 className={`font-display text-3xl mb-2 ${node.color}`}>{node.label}</h3>
            <p className="text-gray-600 leading-relaxed">{node.description}</p>
          </div>
        ))}
      </div>

      <p className="text-center font-display text-2xl text-apex-dark mb-12">
        When all three work together &rarr; you peak on demand.
      </p>

      <div className="flex justify-center">
        <img
          src={PRODUCT_IMAGE}
          alt="APEXLOOP performance triangle — Sleep, Train, Fuel system working together"
          className="max-w-sm w-full rounded-2xl shadow-lg"
          loading="lazy"
        />
      </div>
    </div>
  </section>
)

export default SolutionSection
