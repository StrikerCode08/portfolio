import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ProjectCard from '../components/ProjectCard';
import Experience from '../components/Experience';
import ImageCarousel from '../components/ImageCarousel';
import { profile } from '../data/profile';
import { projects } from '../data/projects';

const proofPoints = [
  { value: '40%', label: 'API latency reduction through MongoDB indexing and Redis caching' },
  { value: '70%', label: 'Faster environment setup with Terraform and Ansible automation' },
  { value: '10k+', label: 'Monthly financial transactions supported with traceable flows' },
];

const operatingModes = [
  'Backend services for procurement, billing, and analytics platforms',
  'Secure REST APIs, reconciliation workflows, and audit-ready systems',
  'Autoscaling, monitoring, and deployment reliability on AWS',
];

export default function Home() {
  return (
    <div >
      <Helmet>
        <title>Akash Bajpai — Senior Full Stack Engineer</title>
        <meta
          name="description"
          content="Senior Full Stack Engineer building resilient, high-performance web platforms with modern stacks."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: profile.name,
            jobTitle: profile.role,
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Gurugram',
              addressCountry: 'IN',
            },
            url: 'https://akashbajpai.dev',
            sameAs: [profile.github, profile.linkedin],
          })}
        </script>
      </Helmet>

      <div className="container-pad">
        <section className="grid min-h-[calc(100vh-6rem)] gap-10 pb-16 pt-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="space-y-6">
            <p className="section-title">Senior Full Stack Engineer</p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-ink-50 sm:text-6xl">
              {profile.name}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-ink-100">{profile.tagline}</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="rounded-full bg-glow-400 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-ink-900 shadow-glow transition hover:-translate-y-0.5 hover:bg-glow-300"
              >
                View Case Studies
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-ink-100 transition hover:-translate-y-0.5 hover:border-accent-400 hover:text-accent-400"
              >
                Let&apos;s Talk
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {proofPoints.map((item) => (
                <div key={item.value} className="metric-panel">
                  <p className="text-3xl font-semibold text-ink-50">{item.value}</p>
                  <p className="mt-2 text-xs leading-5 text-ink-200">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-portrait">
            <ImageCarousel />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-ink-900/80 p-5 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.28em] text-glow-300">BEYOND THE SCREEN</p>
              <p className="mt-2 text-sm leading-6 text-ink-200">
                Chasing sunsets, coffee, and ideas worth building.
              </p>
            </div>
          </div>
        </section>

        <Experience />

        <section className="pb-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-title">Engineering Focus</p>
              <h2 className="mt-2 text-3xl font-semibold text-ink-50">The work behind dependable products</h2>
            </div>
            <p className="text-sm text-ink-300">{profile.experience}</p>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {operatingModes.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="focus-panel"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-400">
                  0{index + 1}
                </span>
                <p className="mt-4 text-base leading-7 text-ink-100">{item}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="pb-16">
          <div className="flex items-center justify-between">
            <div>
              <p className="section-title">Selected Work</p>
              <h2 className="mt-2 text-3xl font-semibold text-ink-50">High-impact systems and platforms</h2>
            </div>
            <Link to="/projects" className="text-sm text-glow-400 hover:text-glow-300">
              View all
            </Link>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                summary={project.summary}
                category={project.category}
                highlights={project.highlights.slice(0, 2)}
              />
            ))}
          </div>
        </section>

        <section className="pb-16">
          <div className="cta-band flex flex-col items-start justify-between gap-6 rounded-3xl p-8 md:flex-row md:items-center">
            <div>
              <p className="section-title">Collaboration</p>
              <h2 className="mt-2 text-2xl font-semibold text-ink-50">Let&apos;s build the next reliable system</h2>
              <p className="mt-3 text-sm text-ink-200">
                I help teams launch secure, high-performance platforms and improve release velocity.
              </p>
            </div>
            <Link
              to="/contact"
              className="rounded-full bg-glow-400/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-glow-400"
            >
              Start a conversation
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
