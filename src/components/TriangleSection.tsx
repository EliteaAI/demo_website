interface TriangleNode {
  id: 'sleep' | 'train' | 'fuel';
  icon: string;
  label: string;
  description: string;
  color: string;
  borderColor: string;
}

export default function TriangleSection() {
  const pillars: TriangleNode[] = [
    { id: 'sleep', icon: '🌙', label: 'SLEEP', color: 'text-blue-400', borderColor: 'border-blue-400', description: 'Your nightly sleep score (1–100) is the input. Everything else adapts to it.' },
    { id: 'train', icon: '⚡', label: 'TRAIN', color: 'text-orange-500', borderColor: 'border-orange-500', description: 'Score >75? Progressive overload unlocked. Score <60? Recovery protocol — lower volume, active rest.' },
    { id: 'fuel', icon: '🥗', label: 'FUEL', color: 'text-green-500', borderColor: 'border-green-500', description: 'Macros recalculate daily. Your plate matches your recovery needs, not a static meal plan.' },
  ];

  return (
    <section id="solution" aria-labelledby="solution-heading" className="bg-gray-900 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 id="solution-heading" className="font-display text-4xl lg:text-5xl text-white max-w-4xl mx-auto">
            ONE SYSTEM. THREE LEVERS. CLOSED LOOP.
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Most fitness tools address one corner of the triangle. APEXLOOP works all three simultaneously.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar) => (
            <div key={pillar.id} className={`bg-white/5 rounded-2xl p-8 border-2 ${pillar.borderColor} flex flex-col items-start space-y-4`}>
              <div className={`text-5xl ${pillar.color}`} aria-hidden="true">{pillar.icon}</div>
              <h3 className={`font-bold text-2xl ${pillar.color} tracking-wide`}>{pillar.label}</h3>
              <p className="text-gray-300 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
