import { Helmet } from 'react-helmet-async';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <div className="container-pad pb-20">
      <Helmet>
        <title>Projects · Akash Bajpai</title>
        <meta name="description" content="Detailed case studies and architectural breakdowns of key projects." />
      </Helmet>

      <section className="pb-12 pt-8">
        <p className="section-title">Projects</p>
        <h1 className="mt-3 text-3xl font-semibold text-ink-50">Case studies and impact stories</h1>
        <p className="mt-4 max-w-2xl text-sm text-ink-200">
          A closer look at backend-heavy platforms across procurement, billing, reconciliation, lead routing, content
          delivery, and performance engineering.
        </p>
      </section>

      <section className="grid gap-6 pb-16 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            summary={project.summary}
            category={project.category}
            highlights={project.highlights}
          />
        ))}
      </section>

      <section className="space-y-10">
        {projects.map((project) => (
          <article key={project.slug} className="project-detail rounded-3xl p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="section-title">{project.category}</p>
                <h2 className="mt-2 text-2xl font-semibold text-ink-50">{project.title}</h2>
                <p className="mt-2 text-sm text-ink-200">{project.summary}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-ink-300">
                {project.slug.replace(/-/g, ' ')}
              </div>
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-ink-300">Problem</h3>
                <p className="mt-2 text-sm text-ink-200">{project.problem}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-ink-300">Architecture</h3>
                <p className="mt-2 text-sm text-ink-200">{project.architecture}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-ink-300">Key Challenges</h3>
                <ul className="mt-2 space-y-2 text-sm text-ink-200">
                  {project.challenges.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-ink-400">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6 border-t border-white/10 pt-4 text-sm text-ink-100">
              <span className="text-ink-50">Results:</span> {project.impact}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
