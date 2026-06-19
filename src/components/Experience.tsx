import React from 'react';
import { motion } from 'framer-motion';
import { timeline } from '../data/profile';

export default function Experience() {
  return (
    <section className="border-t border-white/10 py-12">
      <div className="flex items-center justify-between">
        <div>
          <p className="section-title">Experience</p>
          <h2 className="mt-2 text-2xl font-semibold text-ink-50">Professional experience</h2>
        </div>
      </div>

      <div className="mt-8 grid gap-5">
        {timeline.map((item, idx) => (
          <motion.div
            key={item.title + idx}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.06 }}
            viewport={{ once: true }}
            className="project-detail rounded-md p-5"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-mono text-xs lowercase text-ink-300">{item.year}</p>
                <h3 className="mt-2 text-lg font-semibold text-ink-50">{item.title}</h3>
                <p className="mt-3 text-sm text-ink-200">{item.summary}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
