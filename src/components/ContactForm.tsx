import { useState } from 'react';
import { profile } from '../data/profile';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const mailto = `mailto:${profile.email}?subject=Project%20Inquiry%20from%20${encodeURIComponent(
      String(name)
    )}&body=${encodeURIComponent(`Email: ${email}\n\n${message}`)}`;

    window.location.href = mailto;
    setStatus('success');
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="glass space-y-4 rounded-3xl p-8">
      <div>
        <label className="text-xs uppercase tracking-[0.3em] text-ink-300">Name</label>
        <input
          name="name"
          required
          className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink-50"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="text-xs uppercase tracking-[0.3em] text-ink-300">Email</label>
        <input
          name="email"
          required
          type="email"
          className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink-50"
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label className="text-xs uppercase tracking-[0.3em] text-ink-300">Message</label>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink-50"
          placeholder="What are you building?"
        />
      </div>
      <button
        type="submit"
        className="rounded-full border border-white/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-ink-100 hover:border-white/35 hover:text-ink-50"
      >
        Send message
      </button>
      {status === 'success' && (
        <p className="text-sm text-ink-200">Thanks! Your mail client should open now.</p>
      )}
    </form>
  );
}
