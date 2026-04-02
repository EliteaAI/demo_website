import WaitlistForm from './WaitlistForm'

export default function HeroSection() {
  return (
    <section id="waitlist" className="min-h-screen bg-brand-dark pt-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <p className="text-brand-yellow text-xs font-semibold tracking-widest uppercase mb-4">SLEEP . TRAIN . FUEL</p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6">YOUR SLEEP SCORE RUNS YOUR DAY.</h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl">APEXLOOP connects your bedside sleep tracker to an adaptive training and nutrition system. Every morning, your plan updates.</p>
            <div className="max-w-lg"><WaitlistForm variant="hero" /></div>
            <p className="mt-6 text-gray-500 text-sm">2000+ athletes already on the waitlist</p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <img src="https://r01.miro.com/b/cnRiLXByb2R1Y3Rpb24tZXUtMzA3NDQ1NzM0NTgyMTE0MDk0Ni11c2VycHVibGlj/6000000000/146713/356/167/1/original.png?r=eu-west-1&response-content-disposition=attachment%3B%20filename%3D%22image.png%22%3B%20filename%2A%3DUTF-8%27%27image.png&Expires=1775145909&Signature=lXI4hOz6ivAUMIFvDRUe7kovgDddg3cTiWcMGbOZTJfTswtu5t9G5ifa1TXqunpHCagF42So83EZLmineBeEvYaG-1hG~y4pZx0S5yM1C8751VocLLnCEY-qkymUpcLvuOkqJjdK9bm7BlfA6lVWasDyxa-xzccRoP00Lw5yYdM-ZA1ZGSVV0N9TVD5M37l~myyJ03vLF~iAhT0tDxiKO0PA5Mo67O7gUiT3f7e1MAKLb86dGtKOB9fkaskNgPNdeXXO8CxeTZu2Vtkz2ZoKldckkWfqrHiGdJ5naXudKNX3KMNAXR6VW6DTWYRuRLOBNcrGgYexT8AWTP~V4QsbfA__&Key-Pair-Id=K2SFWAA7M8EHSK" alt="APEXLOOP bedside sleep tracker" className="rounded-2xl shadow-2xl w-full object-cover" onError={e => { const t = e.currentTarget; t.style.display='none'; const fb = t.nextElementSibling as HTMLElement|null; if(fb) fb.style.display='flex' }} />
              <div style={{display:'none'}} className="rounded-2xl w-full aspect-video bg-gradient-to-br from-brand-yellow/20 to-brand-orange/20 flex items-center justify-center">
                <span className="font-display text-brand-yellow text-3xl">APEXLOOP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
