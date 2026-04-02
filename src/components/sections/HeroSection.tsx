import { useState } from 'react'

const HERO_IMAGE = 'https://r01.miro.com/b/cnRiLXByb2R1Y3Rpb24tZXUtMzA3NDQ1NzM0NTgyMTE0MDk0Ni11c2VycHVibGlj/6000000000/146713/356/167/1/original.png?r=eu-west-1&response-content-disposition=attachment%3B%20filename%3D%22image.png%22%3B%20filename%2A%3DUTF-8%27%27image.png&Expires=1775145909&Signature=lXI4hOz6ivAUMIFvDRUe7kovgDddg3cTiWcMGbOZTJfTswtu5t9G5ifa1TXqunpHCagF42So83EZLmineBeEvYaG-1hG~y4pZx0S5yM1C8751VocLLnCEY-qkymUpcLvuOkqJjdK9bm7BlfA6lVWasDyxa-xzccRoP00Lw5yYdM-ZA1ZGSVV0N9TVD5M37l~myyJ03vLF~iAhT0tDxiKO0PA5Mo67O7gUiT3f7e1MAKLb86dGtKOB9fkaskNgPNdeXXO8CxeTZu2Vtkz2ZoKldckkWfqrHiGdJ5naXudKNX3KMNAXR6VW6DTWYRuRLOBNcrGgYexT8AWTP~V4QsbfA__&Key-Pair-Id=K2SFWAA7M8EHSK'

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (email.trim()) {
      setIsSubmitted(true)
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen bg-apex-dark flex items-center px-6 py-24"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-12">
        {/* Copy */}
        <div className="flex-1 text-white">
          <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-apex-orange border border-apex-orange rounded-full px-4 py-1">
            The Performance System Athletes Actually Finish
          </span>

          <h1 className="font-display text-5xl md:text-7xl leading-tight mb-6">
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

          {isSubmitted ? (
            <div className="bg-apex-green/20 border border-apex-green text-apex-green rounded-xl px-6 py-4 text-lg font-semibold">
              You&apos;re on the list! 🎉 We&apos;ll be in touch with early access.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-apex-yellow transition"
              />
              <button
                type="submit"
                className="px-7 py-3 rounded-full bg-apex-orange hover:bg-apex-orange/90 text-white font-bold transition shadow-lg whitespace-nowrap"
              >
                Join the Waitlist
              </button>
            </form>
          )}

          <p className="mt-4 text-sm text-gray-400">🔒 No spam. Early access pricing for subscribers.</p>
        </div>

        {/* Hero image */}
        <div className="flex-1 flex justify-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-apex-yellow/10 max-w-sm w-full">
            <img
              src={HERO_IMAGE}
              alt="APEXLOOP system"
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
