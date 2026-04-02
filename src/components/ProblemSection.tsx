export default function ProblemSection() {
  const problems = [
    { icon: '🔗', title: "Your Apps Don't Talk", body: 'Strava, MyFitnessPal, Oura they track in silos. No app connects sleep quality to what you do next.' },
    { icon: '📋', title: 'Generic Plans Ignore Recovery', body: 'Cookie-cutter programs push max effort on your worst days. Overtraining is not discipline, it is injury waiting to happen.' },
    { icon: '🎲', title: "You're Guessing Your Macros", body: 'Calorie targets that do not change when your body demands change. Recovery days need different fuel than PR days.' },
  ]
  return (
    <section className="bg-brand-yellow py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl lg:text-5xl text-brand-dark text-center mb-16">YOU ARE TRAINING HARD. THE RESULTS DO NOT MATCH.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map(p => (
            <div key={p.title} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="font-display text-2xl text-brand-dark mb-3">{p.title}</h3>
              <p className="text-gray-600 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
