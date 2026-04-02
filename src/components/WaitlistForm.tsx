import { useState, type FormEvent } from 'react'

// TODO: Replace REPLACE_ME with your real Formspree form ID from https://formspree.io
const FORMSPREE_URL = 'https://formspree.io/f/REPLACE_ME'

type FormState = 'idle' | 'loading' | 'success' | 'error'
interface WaitlistFormProps { variant?: 'hero' | 'cta' }

export default function WaitlistForm({ variant = 'hero' }: WaitlistFormProps) {
  const [email, setEmail]   = useState('')
  const [status, setStatus] = useState<FormState>('idle')
  const [errMsg, setErrMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email || !email.includes('@')) { setErrMsg('Please enter a valid email.'); setStatus('error'); return }
    setStatus('loading'); setErrMsg('')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) { setStatus('success'); setEmail('') }
      else throw new Error('Server error')
    } catch { setStatus('error'); setErrMsg('Something went wrong. Please try again.') }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl bg-brand-green/20 border border-brand-green px-6 py-4 text-brand-green font-medium">
        You are in! We will notify you the moment hardware ships with early-access pricing.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`flex gap-3 w-full ${variant === 'hero' ? 'flex-col sm:flex-row' : 'flex-col'}`}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" required disabled={status === 'loading'} className="flex-1 rounded-lg border-2 border-gray-300 focus:border-brand-orange focus:outline-none px-4 py-3 text-gray-900 placeholder-gray-400 disabled:opacity-60" />
      <button type="submit" disabled={status === 'loading'} className="bg-brand-orange text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-60 whitespace-nowrap">
        {status === 'loading' ? 'Joining...' : 'Claim My Spot'}
      </button>
      {status === 'error' && <p className="text-red-500 text-sm mt-1">{errMsg}</p>}
    </form>
  )
}
