export default function Navbar() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-apex-dark h-16">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-full">
        <span className="text-apex-yellow font-black text-xl tracking-tight">APEXLOOP™</span>
        <button
          onClick={scrollToWaitlist}
          className="bg-apex-orange hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-lg transition-colors"
        >
          Get Early Access
        </button>
      </div>
    </header>
  )
}
