import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Search, Upload, Sparkles } from 'lucide-react';

const HeroSection = ({ onStartSearch, onReportItem }) => {
  return (
    <section className="relative min-h-[75vh] w-full overflow-hidden bg-[#0b0f1a] text-white">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0f1a]/60 via-[#0b0f1a]/70 to-[#0b0f1a]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.18),transparent_35%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4 text-indigo-300" />
          <span className="text-sm text-indigo-200">University Lost & Found Portal</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05 }}
          className="font-heading bg-gradient-to-br from-white via-indigo-100 to-indigo-300 bg-clip-text text-4xl font-semibold text-transparent sm:text-5xl md:text-6xl"
        >
          Find what’s lost. Return what’s found.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mt-4 max-w-2xl text-base text-indigo-100/80 sm:text-lg"
        >
          A futuristic, student-friendly hub for reporting, tracking, and recovering items across campus.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <button
            onClick={onStartSearch}
            className="group inline-flex items-center gap-2 rounded-xl border border-indigo-400/30 bg-indigo-500/20 px-5 py-3 text-indigo-100 shadow-[0_0_0_1px_rgba(99,102,241,0.25)] transition hover:bg-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
          >
            <Search className="h-5 w-5 transition-transform group-hover:rotate-6" />
            Start Searching
          </button>
          <button
            onClick={onReportItem}
            className="group inline-flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-500/20 px-5 py-3 text-emerald-100 shadow-[0_0_0_1px_rgba(16,185,129,0.25)] transition hover:bg-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
          >
            <Upload className="h-5 w-5 transition-transform group-hover:-rotate-6" />
            Report an Item
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
