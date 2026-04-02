export default function TestimonialsSection() {
  const testimonials = [
    { quote: "I've used every tracker on the market. APEXLOOP is the first one that actually changed what I did in the gym.", name: 'Marcus T.', role: 'Competitive Cyclist' },
    { quote: "Dropped 4% body fat in 8 weeks without changing training volume — just optimizing timing and macros from sleep data.", name: 'Priya S.', role: 'CrossFit Coach' },
    { quote: "Finally, a system that tells me when NOT to train hard. That's been the missing piece for years.", name: 'Jordan K.', role: 'Marathon Runner' },
  ];

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="bg-yellow-400 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="testimonials-heading" className="font-display text-4xl lg:text-5xl text-gray-900 text-center mb-16 max-w-4xl mx-auto">
          BUILT FOR ATHLETES WHO MEASURE EVERYTHING.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <figure key={index} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col space-y-4">
              <div className="text-6xl text-yellow-400 leading-none" aria-hidden="true">&ldquo;</div>
              <blockquote><p className="text-gray-800 italic leading-relaxed">{t.quote}</p></blockquote>
              <figcaption className="pt-4 border-t border-gray-200">
                <div className="font-bold text-gray-900">{t.name}</div>
                <div className="text-gray-500 text-sm">{t.role}</div>
                <div className="text-gray-400 text-xs mt-1">[Illustrative placeholder]</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
