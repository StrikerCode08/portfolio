import { Helmet } from 'react-helmet-async';
import SkillBadge from '../components/SkillBadge';
import Timeline from '../components/Timeline';
import { profile, skills, timeline } from '../data/profile';

export default function About() {
  return (
    <div className="container-pad pb-20">
      <Helmet>
        <title>About · Akash Bajpai</title>
        <meta name="description" content="Professional story, skills, and journey of Akash Bajpai." />
      </Helmet>

      <section className="pb-12 pt-8">
        <p className="section-title">About</p>
        <h1 className="mt-3 text-3xl font-semibold text-ink-50">Engineering for clarity and scale</h1>
        <p className="mt-4 max-w-2xl text-sm text-ink-200">
          I am {profile.role} based in {profile.location}. Over the last {profile.experience}, I have focused on building
          dependable web platforms for fintech and SaaS teams. I specialize in high-throughput backends, real-time
          collaboration workflows, and cloud-native delivery.
        </p>
        <p className="mt-4 max-w-2xl text-sm text-ink-200">
          My approach blends product thinking with rigorous engineering: I care deeply about observability, fast feedback
          loops, and infrastructure that can adapt as businesses grow.
        </p>
      </section>

      <section className="grid gap-8 pb-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div>
            <p className="section-title">Core Skills</p>
            <h2 className="mt-2 text-2xl font-semibold text-ink-50">Full-stack breadth with platform depth</h2>
          </div>
          <div className="space-y-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="glass rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-ink-300">{category}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <SkillBadge key={item} label={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="section-title">Timeline</p>
          <h2 className="mt-2 text-2xl font-semibold text-ink-50">Experience and growth</h2>
          <div className="mt-6">
            <Timeline items={timeline} />
          </div>
        </div>
      </section>
    </div>
  );
}
