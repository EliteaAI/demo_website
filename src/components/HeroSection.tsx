import WaitlistForm from './WaitlistForm';

export default function HeroSection() {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="min-h-screen bg-gray-900 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="w-full lg:w-3/5 space-y-8">
            <div className="text-yellow-400 text-xs uppercase tracking-widest font-semibold">SLEEP · TRAIN · FUEL</div>
            <h1 id="hero-heading" className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-tight">
              YOUR SLEEP SCORE RUNS YOUR DAY.
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl">
              APEXLOOP connects your bedside sleep tracker to an adaptive training and nutrition system. Every morning, your plan updates.
            </p>
            <div className="max-w-2xl">
              <WaitlistForm variant="hero" formId="hero-form" />
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span aria-hidden="true">🔥</span>
              <span className="text-sm">2,000+ athletes already on the waitlist</span>
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <img
              src={`${import.meta.env.BASE_URL}images/hero-slide.png`}
              alt="APEXLOOP sleep tracker and mobile app interface"
              className="w-full h-auto object-contain rounded-2xl"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
