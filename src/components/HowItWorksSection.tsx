export default function HowItWorksSection() {
  const steps = [
    { number: '01', bgClass: 'bg-brand-dark border-2 border-brand-yellow', textClass: 'text-brand-yellow', title: 'TRACK', body: 'Place the APEXLOOP device on your nightstand. No wearables. No setup rituals. 60GHz radar tracks your sleep architecture automatically.' },
    { number: '02', bgClass: 'bg-brand-orange', textClass: 'text-white', title: 'SCORE', body: 'Each morning, APEXLOOP calculates your Sleep Score (1-100) measuring deep sleep, REM cycles, and recovery quality.' },
    { number: '03', bgClass: 'bg-brand-green', textClass: 'text-white', title: 'ADAPT', body: 'Your app updates: workout intensity, exercise selection, macro targets, and meal timing, all calibrated to last night score.' },
  ]
  return (
    <section id="how-it-works" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl text-brand-dark mb-4">SET IT ON YOUR NIGHTSTAND. WAKE UP WITH A PLAN.</h2>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
          {steps.map(step => (
            <div key={step.number} className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <div className={`w-16 h-16 rounded-full ${step.bgClass} flex items-center justify-center mb-6`}>
                <span className={`font-display text-xl ${step.textClass}`}>{step.number}</span>
              </div>
              <h3 className="font-display text-2xl text-brand-dark mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <img src="https://r.miro.com/6000000000/167222/362/275/1/original.png" alt="APEXLOOP system diagram" className="rounded-xl shadow-lg max-w-2xl w-full object-contain" onError={e => { e.currentTarget.style.display='none' }} />
        </div>
      </div>
    </section>
  )
}
