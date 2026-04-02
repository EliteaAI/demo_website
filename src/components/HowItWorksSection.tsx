export default function HowItWorksSection() {
  const steps = [
    { number: '01', title: 'TRACK', bg: 'bg-gray-900', text: 'text-yellow-400', description: 'Place the APEXLOOP device bedside. No wearables. 60GHz radar tracks your sleep architecture automatically.' },
    { number: '02', title: 'SCORE', bg: 'bg-orange-500', text: 'text-white', description: 'Each morning, APEXLOOP calculates your Sleep Score (1–100) measuring deep sleep, REM cycles, and recovery quality.' },
    { number: '03', title: 'ADAPT', bg: 'bg-green-500', text: 'text-white', description: 'Your app updates: workout intensity, exercise selection, macro targets — all calibrated to last night\'s score.' },
  ];

  return (
    <section id="how-it-works" aria-labelledby="how-it-works-heading" className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="how-it-works-heading" className="font-display text-4xl lg:text-5xl text-gray-900 text-center mb-16 max-w-4xl mx-auto">
          SET IT ON YOUR NIGHTSTAND. WAKE UP WITH A PLAN.
        </h2>
        <div className="flex flex-col md:flex-row items-start justify-center gap-8 mb-16 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="flex flex-col items-center text-center space-y-4 max-w-xs">
                <div className={`${step.bg} ${step.text} w-20 h-20 rounded-full flex items-center justify-center font-bold text-2xl`}>{step.number}</div>
                <h3 className="font-bold text-xl text-gray-900 tracking-wide">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block text-4xl text-gray-300 mx-4 mt-6" aria-hidden="true">→</div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <img
            src={`${import.meta.env.BASE_URL}images/product-triangle.png`}
            alt="APEXLOOP system diagram"
            className="max-w-2xl w-full rounded-xl shadow-xl"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </div>
      </div>
    </section>
  );
}
