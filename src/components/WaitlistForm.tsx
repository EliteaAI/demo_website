import { useWaitlistForm } from '../hooks/useWaitlistForm';

interface WaitlistFormProps {
  variant?: 'hero' | 'cta';
  formId?: string;
}

export default function WaitlistForm({ variant = 'hero', formId = 'waitlist-form' }: WaitlistFormProps) {
  const { email, setEmail, status, errorMessage, handleSubmit } = useWaitlistForm();
  const inputId = `${formId}-email`;
  const errorId = `${formId}-error`;

  if (status === 'success') {
    return (
      <div role="status" aria-live="polite" className="text-white bg-green-500/20 border-2 border-green-500 rounded-lg p-4">
        <p className="font-semibold">You are in! We will notify you the moment hardware ships with early-access pricing.</p>
      </div>
    );
  }

  return (
    <form
      id={formId}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Join the APEXLOOP waitlist"
      className={`flex gap-3 ${variant === 'hero' ? 'flex-col md:flex-row' : 'flex-col'}`}
    >
      <label htmlFor={inputId} className="sr-only">Email address</label>
      <input
        id={inputId}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        autoComplete="email"
        aria-required="true"
        aria-describedby={status === 'error' ? errorId : undefined}
        aria-invalid={status === 'error' ? 'true' : undefined}
        disabled={status === 'loading'}
        className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg text-gray-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 whitespace-nowrap"
      >
        {status === 'loading' ? 'Joining...' : 'Claim My Spot'}
      </button>
      {status === 'error' && errorMessage && (
        <div id={errorId} role="alert" aria-live="assertive" className="text-red-400 text-sm">
          {errorMessage}
        </div>
      )}
    </form>
  );
}
