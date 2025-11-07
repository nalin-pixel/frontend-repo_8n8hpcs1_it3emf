import React, { useRef, useState } from 'react';
import HeroSection from './components/HeroSection';
import ExoTagChips from './components/ExoTagChips';
import InteractiveCards from './components/InteractiveCards';
import ReportModal from './components/ReportModal';

function App() {
  const [reportOpen, setReportOpen] = useState(false);
  const tagsRef = useRef(null);

  const handleStartSearch = () => {
    tagsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleReportItem = () => setReportOpen(true);

  const handleTagSelect = (tag) => {
    // In a full app, this would filter results via backend.
    // Here we simply provide a subtle acknowledgement.
    if (typeof window !== 'undefined') {
      const toast = document.createElement('div');
      toast.textContent = `Filter applied: ${tag}`;
      toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md z-50';
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 1600);
    }
  };

  const handleSubmitReport = (data) => {
    // Demo submit flow: show a quick client-side confirmation
    setReportOpen(false);
    if (typeof window !== 'undefined') {
      const toast = document.createElement('div');
      toast.innerHTML = `Reported: <b>${data.title || 'Item'}</b>`;
      toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 rounded-xl border border-emerald-400/30 bg-emerald-500/20 px-4 py-2 text-sm text-emerald-100 backdrop-blur-md z-50';
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 1800);
    }
  };

  const quickTags = [
    'Backpacks',
    'Electronics',
    'ID Cards',
    'Keys',
    'Water Bottles',
    'Headphones',
  ];

  return (
    <div className="min-h-screen bg-[#0b0f1a]">
      <HeroSection onStartSearch={handleStartSearch} onReportItem={handleReportItem} />

      <div ref={tagsRef}>
        <ExoTagChips tags={quickTags} onSelect={handleTagSelect} />
      </div>

      <InteractiveCards />

      <ReportModal open={reportOpen} onClose={() => setReportOpen(false)} onSubmit={handleSubmitReport} />
    </div>
  );
}

export default App;
