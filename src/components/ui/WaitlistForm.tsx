import { useWaitlistForm } from '../../hooks/useWaitlistForm'

interface WaitlistFormProps {
  formId?: string
  inputId?: string
  buttonLabel?: string
  variant?: 'hero' | 'cta'
  onSuccess?: () => void
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({
  formId = 'waitlist-form',
  inputId = 'waitlist-email',
  buttonLabel = 'Join the Waitlist',
  variant = 'hero',
  onSuccess,
}) => {
  const { email, isSubmitting, isSuccess, error, setEmail, handleSubmit } = useWaitlistForm()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await handleSubmit(e)
    if (!error && onSuccess) onSuccess()
  }

  if (isSuccess) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="bg-apex-green/20 border border-apex-green text-apex-green rounded-xl px-6 py-4 text-lg font-semibold"
      >
        You&apos;re on the list! 🎉 We&apos;ll be in touch with early access.
      </div>
    )
  }

  return (
    <form
      id={formId}
      onSubmit={onSubmit}
      noValidate
      className={variant === 'hero' ? 'flex flex-col sm:flex-row gap-3 max-w-md' : 'flex flex-col gap-3 max-w-lg w-full'}
    >
      <div className="flex-1">
        <label
          htmlFor={inputId}
          className="sr-only"
        >
          Email address
        </label>
        <input
          id={inputId}
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          aria-describedby={error ? `${inputId}-error` : undefined}
          aria-invalid={!!error}
          disabled={isSubmitting}
          className="w-full px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-apex-yellow focus:ring-2 focus:ring-apex-yellow/30 transition disabled:opacity-60"
        />
        {error && (
          <p
            id={`${inputId}-error`}
            role="alert"
            aria-live="polite"
            className="mt-2 text-sm text-red-400"
          >
            {error}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-7 py-3 rounded-full bg-apex-orange hover:bg-apex-orange/90 text-white font-bold transition shadow-lg whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting…' : buttonLabel}
      </button>
    </form>
  )
}

export default WaitlistForm
