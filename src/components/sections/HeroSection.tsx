import WaitlistForm from '../ui/WaitlistForm'

const HERO_IMAGE = `${import.meta.env.BASE_URL}images/slide-hero.png`

const HeroSection: React.FC = () => (
  <section
    id="hero"
    aria-labelledby="hero-heading"
    className="min-h-screen bg-apex-dark flex items-center px-6 py-24"
  >
    <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12">
      {/* Copy */}
      <div className="flex-1 text-white">
        <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-apex-orange border border-apex-orange rounded-full px-4 py-1">
          The Performance System Athletes Actually Finish
        </span>

        <h1
          id="hero-heading"
          className="font-display text-5xl md:text-7xl leading-tight mb-6"
        >
          Your Body Adapts Every{' '}
          <span className="text-apex-yellow">Night.</span>
          <br />
          Your Plan Should Too.
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
          APEXLOOP is the first system that reads your sleep and automatically
          adjusts today&apos;s workout intensity and nutrition macros &mdash; every
          single morning.
        </p>

        <div id="waitlist">
          <WaitlistForm
            formId="waitlist-form"
            inputId="hero-email"
            buttonLabel="Join the Waitlist"
            variant="hero"
          />
        </div>

        <p className="mt-4 text-sm text-gray-400">🔒 No spam. Early access pricing for subscribers.</p>
      </div>

      {/* Hero image */}
      <div className="flex-1 flex justify-center">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-apex-yellow/10 max-w-sm w-full">
          <img
            src={HERO_IMAGE}
            alt="APEXLOOP device on nightstand syncing sleep data to the mobile app"
            className="w-full h-auto object-cover"
            loading="eager"
          />
        </div>
      </div>
    </div>
  </section>
)

export default HeroSection
