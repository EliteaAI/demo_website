import WaitlistForm from './WaitlistForm'

export default function BottomCTASection() {
  return (
    <section className="bg-brand-dark py-32 relative overflow-hidden text-center">
      <div className="absolute w-96 h-96 bg-brand-yellow/10 blur-3xl rounded-full -top-20 right-0 pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <p className="text-brand-orange tracking-widest text-sm font-semibold uppercase mb-4">LIMITED EARLY ACCESS</p>
        <h2 className="font-display text-5xl lg:text-7xl text-white mb-6">YOUR BEST TRAINING SEASON STARTS TONIGHT.</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">Join 2,000+ athletes waiting for APEXLOOP. Early waitlist members get hardware at launch pricing.</p>
        <div className="max-w-md mx-auto"><WaitlistForm variant="cta" /></div>
        <p className="text-gray-600 text-sm mt-6">No spam. No credit card. Just your spot in line.</p>
      </div>
    </section>
  )
}
