import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ContactForm';
import { profile, socials } from '../data/profile';

export default function Contact() {
  return (
    <div className="container-pad pb-20">
      <Helmet>
        <title>Contact · Akash Bajpai</title>
        <meta name="description" content="Connect with Akash Bajpai for engineering collaborations." />
      </Helmet>

      <section className="pb-12 pt-8">
        <p className="section-title">Contact</p>
        <h1 className="mt-3 text-3xl font-semibold text-ink-50">Let&apos;s build something resilient</h1>
        <p className="mt-4 max-w-2xl text-sm text-ink-200">
          Share your product context, technical goals, or a challenge you want solved. I reply within 24-48 hours.
        </p>
      </section>

      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <ContactForm />

        <div className="space-y-6">
          <div className="glass rounded-3xl p-8">
            <p className="section-title">Direct</p>
            <h2 className="mt-2 text-xl font-semibold text-ink-50">Reach me instantly</h2>
            <p className="mt-3 text-sm text-ink-200">{profile.email}</p>
            <div className="mt-4 space-y-2 text-sm text-ink-300">
              {socials.map((item) => (
                <a key={item.label} href={item.href} className="block hover:text-ink-50">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="glass rounded-3xl p-8">
            <p className="section-title">Availability</p>
            <p className="mt-3 text-sm text-ink-200">
              Open to senior full-stack or platform engineering roles, consulting, and advisory work for high-growth teams.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
