import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bars = new Array(6).fill(0);

const LoadingExo = ({ active = false, label = 'Synchronizing campus grid…' }) => {
  const [show, setShow] = useState(active);

  useEffect(() => {
    setShow(active);
  }, [active]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-[#0b0f1a]/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-indigo-100 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
          >
            <div className="mb-5 flex items-end justify-center gap-1">
              {bars.map((_, i) => (
                <motion.span
                  key={i}
                  className="block h-8 w-1.5 rounded-full bg-gradient-to-b from-indigo-400 to-emerald-400"
                  animate={{ height: [18, 38, 18] }}
                  transition={{ repeat: Infinity, duration: 1, delay: i * 0.08, ease: 'easeInOut' }}
                />
              ))}
            </div>
            <div className="text-sm text-indigo-200/80">{label}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingExo;
