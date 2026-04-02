import { useState } from 'react'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface WaitlistFormState {
  email: string
  isSubmitting: boolean
  isSuccess: boolean
  error: string
}

interface WaitlistFormActions {
  setEmail: (email: string) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}

export function useWaitlistForm(): WaitlistFormState & WaitlistFormActions {
  const [email, setEmail] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    if (!email.trim()) {
      setError('Please enter your email address')
      return
    }

    if (!EMAIL_REGEX.test(email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)
    try {
      const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
      if (endpoint) {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        })
      } else {
        // No backend yet — log and simulate success
        console.log('[WaitlistForm] Email submitted:', email)
        await new Promise((resolve) => setTimeout(resolve, 400))
      }
      setIsSuccess(true)
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return { email, isSubmitting, isSuccess, error, setEmail, handleSubmit }
}
