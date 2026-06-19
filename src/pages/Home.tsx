import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ProjectCard from "../components/ProjectCard";
import Experience from "../components/Experience";
import ImageCarousel from "../components/ImageCarousel";
import { profile } from "../data/profile";
import { projects } from "../data/projects";

const proofPoints = [
  {
    value: "40%",
    label: "API latency reduction through MongoDB indexing and Redis caching",
  },
  {
    value: "70%",
    label: "Faster environment setup with Terraform and Ansible automation",
  },
  {
    value: "10k+",
    label: "Monthly financial transactions supported with traceable flows",
  },
];

const operatingModes = [
  "Backend services for procurement, billing, and analytics platforms",
  "Secure REST APIs, reconciliation workflows, and audit-ready systems",
  "Autoscaling, monitoring, and deployment reliability on AWS",
];

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Akash Bajpai — Senior Full Stack Engineer</title>
        <meta
          name="description"
          content="Senior Full Stack Engineer building resilient, high-performance web platforms with modern stacks."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: profile.name,
            jobTitle: profile.role,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Gurugram",
              addressCountry: "IN",
            },
            url: "https://akashbajpai.dev",
            sameAs: [profile.github, profile.linkedin],
          })}
        </script>
      </Helmet>

      <div className="container-pad">
        <section className="grid min-h-[calc(100vh-6rem)] gap-10 pb-16 pt-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="space-y-5">
            <p className="font-mono text-sm text-ink-300">Hi, my name is,</p>
            <h1 className="max-w-xl text-xl font-semibold leading-tight text-ink-50 sm:text-xl">
              {profile.name}, I am a {profile.role}.
            </h1>
            <p className="max-w-2xl text-xl leading-8 text-ink-100">
              I build backend systems, distributed workflows, and
              high-performance web applications.
            </p>
            <p className="max-w-2xl text-base leading-7 text-ink-200">
              Currently focused on procurement, billing, analytics platforms,
              and infrastructure that keeps teams moving with confidence.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="font-mono text-sm text-ink-100 underline underline-offset-4 hover:text-ink-50"
              >
                View case studies
              </Link>
              <Link
                to="/contact"
                className="font-mono text-sm text-ink-300 underline underline-offset-4 hover:text-ink-50"
              >
                Let&apos;s talk
              </Link>
            </div>
            <div className="grid gap-3 border-y border-white/10 py-5 sm:grid-cols-3">
              {proofPoints.map((item) => (
                <div key={item.value} className="metric-panel">
                  <p className="font-mono text-2xl font-semibold text-ink-50">
                    {item.value}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-ink-200">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-portrait">
            <ImageCarousel />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-ink-900/80 p-5">
              <p className="font-mono text-xs lowercase text-ink-200">
                beyond the screen
              </p>
              <p className="mt-2 text-sm leading-6 text-ink-200">
                Chasing sunsets, coffee, and ideas worth building.
              </p>
            </div>
          </div>
        </section>

        <Experience />

        <section className="border-t border-white/10 py-12">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-title">Engineering Focus</p>
              <h2 className="mt-2 text-2xl font-semibold text-ink-50">
                The work behind dependable products
              </h2>
            </div>
            <p className="text-sm text-ink-300">{profile.experience}</p>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {operatingModes.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="focus-panel"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-ink-300">
                  0{index + 1}
                </span>
                <p className="mt-4 text-sm leading-7 text-ink-100">{item}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 py-12">
          <div className="flex items-center justify-between">
            <div>
              <p className="section-title">Selected Work</p>
              <h2 className="mt-2 text-2xl font-semibold text-ink-50">
                High-impact systems and platforms
              </h2>
            </div>
            <Link
              to="/projects"
              className="text-sm text-ink-200 hover:text-ink-50"
            >
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

        <section className="border-t border-white/10 py-12">
          <div className="cta-band flex flex-col items-start justify-between gap-6 rounded-md p-6 md:flex-row md:items-center">
            <div>
              <p className="section-title">Collaboration</p>
              <h2 className="mt-2 text-2xl font-semibold text-ink-50">
                Let&apos;s build the next reliable system
              </h2>
              <p className="mt-3 text-sm text-ink-200">
                I help teams launch secure, high-performance platforms and
                improve release velocity.
              </p>
            </div>
            <Link
              to="/contact"
              className="font-mono text-sm text-ink-100 underline underline-offset-4 hover:text-ink-50"
            >
              Start a conversation
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
