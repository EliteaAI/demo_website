import WaitlistForm from './WaitlistForm';

export default function BottomCTASection() {
  return (
    <section id="waitlist" aria-labelledby="bottom-cta-heading" className="relative bg-gray-900 py-32 overflow-hidden">
      <div className="absolute -top-20 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-orange-500 tracking-widest text-sm font-semibold uppercase mb-4">LIMITED EARLY ACCESS</div>
        <h2 id="bottom-cta-heading" className="font-display text-5xl lg:text-7xl text-white leading-tight mb-6">
          YOUR BEST TRAINING SEASON STARTS TONIGHT.
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Join 2,000+ athletes waiting for APEXLOOP. Early waitlist members get hardware at launch pricing.
        </p>
        <div className="max-w-md mx-auto">
          <WaitlistForm variant="cta" formId="bottom-cta-form" />
        </div>
        <p className="text-gray-600 text-sm mt-6">No spam. No credit card. Just your spot in line.</p>
      </div>
    </section>
  );
}
