import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Image as ImageIcon, MapPin, Hash } from 'lucide-react';

const ReportModal = ({ open, onClose, onSubmit }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f1a] p-6 text-indigo-100 shadow-2xl"
          >
            <button onClick={onClose} className="absolute right-3 top-3 rounded-md p-2 text-indigo-200/80 transition hover:bg-white/5">
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white">Report an Item</h3>
              <p className="text-sm text-indigo-200/80">Share details to help the owner find it quickly.</p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = Object.fromEntries(new FormData(e.currentTarget));
                onSubmit?.(data);
              }}
              className="space-y-4"
            >
              <div>
                <label className="mb-2 block text-sm">Title</label>
                <div className="relative">
                  <input name="title" required className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none ring-indigo-400/30 placeholder:text-indigo-200/50 focus:ring-2" placeholder="e.g., Black Lenovo Backpack" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm">Location</label>
                  <div className="relative">
                    <MapPin className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-indigo-300" />
                    <input name="location" required className="w-full rounded-xl border border-white/10 bg-white/5 p-3 pl-9 text-white outline-none ring-indigo-400/30 placeholder:text-indigo-200/50 focus:ring-2" placeholder="Library, Cafeteria..." />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm">Category</label>
                  <div className="relative">
                    <Hash className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-indigo-300" />
                    <input name="category" required className="w-full rounded-xl border border-white/10 bg-white/5 p-3 pl-9 text-white outline-none ring-indigo-400/30 placeholder:text-indigo-200/50 focus:ring-2" placeholder="Lost / Found + type" />
                  </div>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm">Description</label>
                <textarea name="description" rows={4} className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white outline-none ring-indigo-400/30 placeholder:text-indigo-200/50 focus:ring-2" placeholder="Add important details..." />
              </div>

              <div>
                <label className="mb-2 block text-sm">Upload Photo (optional)</label>
                <div className="flex items-center gap-3">
                  <button type="button" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-indigo-100 hover:bg-white/10">
                    <ImageIcon className="h-4 w-4" /> Add Image
                  </button>
                  <span className="text-xs text-indigo-200/60">Drag & drop coming soon</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button type="button" onClick={onClose} className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-indigo-100 hover:bg-white/10">Cancel</button>
                <button type="submit" className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-500/20 px-4 py-2 text-emerald-100 hover:bg-emerald-500/30">
                  <Upload className="h-4 w-4" /> Submit Report
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReportModal;
