interface PainPointCard {
  icon: string;
  headline: string;
  body: string;
}

export default function ProblemSection() {
  const problems: PainPointCard[] = [
    { icon: '🔗', headline: "Your Apps Don't Talk", body: "Strava, MyFitnessPal, Oura — they track in silos. No app connects sleep quality to what you do next." },
    { icon: '📋', headline: "Generic Plans Ignore Recovery", body: "Cookie-cutter programs push max effort on your worst days. Overtraining isn't discipline — it's injury waiting to happen." },
    { icon: '🎲', headline: "You're Guessing Your Macros", body: "Calorie targets that don't change when your body's demands do. Recovery days need different fuel than PR days." },
  ];

  return (
    <section id="problem" aria-labelledby="problem-heading" className="bg-yellow-400 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="problem-heading" className="font-display text-4xl lg:text-5xl text-gray-900 text-center mb-16 max-w-4xl mx-auto">
          YOU'RE TRAINING HARD. THE RESULTS DON'T MATCH.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 flex flex-col items-start space-y-4">
              <div className="text-5xl" aria-hidden="true">{problem.icon}</div>
              <h3 className="font-bold text-xl text-gray-900">{problem.headline}</h3>
              <p className="text-gray-700 leading-relaxed">{problem.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
