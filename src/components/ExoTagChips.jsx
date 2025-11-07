import React from 'react';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';

const chipVariants = {
  initial: { y: 10, opacity: 0 },
  animate: (i) => ({ y: 0, opacity: 1, transition: { delay: 0.05 * i, duration: 0.4 } }),
};

const ExoTagChips = ({ tags = [], onSelect }) => {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-3 flex items-center gap-2 text-indigo-200">
        <Tag className="h-4 w-4" />
        <span className="text-sm uppercase tracking-widest">Quick Filters</span>
      </div>
      <div className="flex flex-wrap gap-3">
        {tags.map((t, i) => (
          <motion.button
            key={t}
            custom={i}
            variants={chipVariants}
            initial="initial"
            animate="animate"
            onClick={() => onSelect?.(t)}
            className="group relative inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-indigo-100 backdrop-blur-sm transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/40"
          >
            <span className="relative z-10">{t}</span>
            <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-indigo-400/20" />
            <span className="pointer-events-none absolute inset-0 -z-0 rounded-xl bg-gradient-to-r from-indigo-500/10 to-emerald-500/10 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ExoTagChips;
