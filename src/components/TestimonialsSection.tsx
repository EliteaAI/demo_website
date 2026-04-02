export default function TestimonialsSection() {
  const quotes = [
    { text: 'I have used every tracker on the market. APEXLOOP is the first one that actually changed what I did in the gym.', name: 'Marcus T.', role: 'Competitive Cyclist' },
    { text: 'Dropped 4% body fat in 8 weeks without changing my training volume, just optimizing timing and macros from my sleep data.', name: 'Priya S.', role: 'CrossFit Coach' },
    { text: 'Finally, a system that tells me when NOT to train hard. That has been the missing piece for years.', name: 'Jordan K.', role: 'Marathon Runner' },
  ]
  return (
    <section className="bg-brand-yellow py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl lg:text-5xl text-brand-dark text-center mb-16">BUILT FOR ATHLETES WHO MEASURE EVERYTHING.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quotes.map(q => (
            <div key={q.name} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col">
              <span className="font-display text-6xl text-brand-yellow leading-none mb-4" aria-hidden="true">&#8220;</span>
              <p className="text-gray-700 italic text-lg leading-relaxed flex-1 mb-6">{q.text}</p>
              <div>
                <p className="font-semibold text-brand-dark">{q.name}</p>
                <p className="text-gray-500 text-sm">{q.role} <span className="text-gray-400">[PLACEHOLDER]</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
