import { useState, FormEvent } from 'react';

interface UseWaitlistFormReturn {
  email: string;
  setEmail: (value: string) => void;
  status: 'idle' | 'loading' | 'success' | 'error';
  errorMessage: string | null;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwkgvqpd';

export function useWaitlistForm(): UseWaitlistFormReturn {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Email address is required.');
      return;
    }
    if (!EMAIL_REGEX.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    setErrorMessage(null);
    setStatus('loading');
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Waitlist form error:', error);
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return { email, setEmail, status, errorMessage, handleSubmit };
}
