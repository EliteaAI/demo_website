const PRODUCT_IMAGE = 'https://r.miro.com/6000000000/167223/346/226/1/original.png?response-content-disposition=attachment%3B%20filename%3D%22076b4863-161a-4dbe-909d-2774d211d1aa.png%22%3B%20filename%2A%3DUTF-8%27%27076b4863-161a-4dbe-909d-2774d211d1aa.png&Expires=1775145890&Signature=X~V9rWXFAM0ofMPzd0M0uoPFo72QkVs~gsjiK1nK6cFvo9-n37ypwmmpxhljuAfv2yynKdhhG23AZWQ7xP2XnnT182ttpytR4F-KLtVBYkTE4dqma540JbllpXwgM1XItgUdTAFN86HURkdbgzWZWtywV1nSitkvyEO90bLTiPbvN3-aW-GVjw9zaU9Z~ez~6e1ahQbUlOsXofOx~9Bnf0gnWVq3dA-4nEcF0b5GgHAl090rW5KHA21-i130uLYnyb6vdNvGadFOeEqWh8BhkSbS~AHQ7lw-skBji7qlBnSZ8Dma1xfbZQiC-QvKJEcnTP1saYG1Sy~lvtRfSMMiMw__&Key-Pair-Id=K2SFWAA7M8EHSK'

interface TriangleNode {
  icon: string
  label: string
  description: string
}

const TRIANGLE_NODES: TriangleNode[] = [
  {
    icon: '🌙',
    label: 'Sleep',
    description: 'Contactless bedside sensor scores your recovery nightly — no wearable needed.',
  },
  {
    icon: '💪',
    label: 'Train',
    description: 'Your workout intensity auto-adjusts to your readiness score every morning.',
  },
  {
    icon: '🥗',
    label: 'Fuel',
    description: 'Daily macros recalculate based on your recovery state and performance goals.',
  },
]

const SolutionSection: React.FC = () => (
  <section id="solution" className="py-24 px-6 bg-apex-yellow">
    <div className="max-w-6xl mx-auto">
      {/* Label */}
      <p className="text-center text-xs font-bold uppercase tracking-widest text-apex-dark/60 mb-4">
        The Solution
      </p>

      {/* Headline */}
      <h2 className="font-display text-4xl md:text-5xl text-center text-apex-dark mb-4">
        One System. Three Forces. Zero Guesswork.
      </h2>

      {/* Subheadline */}
      <p className="text-center text-apex-dark/70 text-lg max-w-2xl mx-auto mb-16">
        APEXLOOP connects your sleep data to your training and nutrition &mdash; automatically.
      </p>

      {/* Triangle nodes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {TRIANGLE_NODES.map((node) => (
          <div
            key={node.label}
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition text-center"
          >
            <div className="text-5xl mb-4">{node.icon}</div>
            <h3 className="font-display text-3xl text-apex-dark mb-2">{node.label}</h3>
            <p className="text-gray-600 leading-relaxed">{node.description}</p>
          </div>
        ))}
      </div>

      {/* Closing line */}
      <p className="text-center font-display text-2xl text-apex-dark mb-12">
        When all three work together &rarr; you peak on demand.
      </p>

      {/* Product image */}
      <div className="flex justify-center">
        <img
          src={PRODUCT_IMAGE}
          alt="APEXLOOP performance triangle system"
          className="max-w-sm w-full rounded-2xl shadow-lg"
          loading="lazy"
        />
      </div>
    </div>
  </section>
)

export default SolutionSection
