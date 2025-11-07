import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, MapPin, Clock, CheckCircle2, AlertTriangle } from 'lucide-react';

const Card = ({ item }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="group relative h-64 w-full cursor-pointer [perspective:1000px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((v) => !v)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-white/5" />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
      <div className="absolute inset-px rounded-[15px] bg-[#0b0f1a]/70 backdrop-blur-md" />

      {/* 3D Flip container */}
      <div
        className="absolute inset-0 [transform-style:preserve-3d]"
        style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)', transition: 'transform 600ms cubic-bezier(0.22, 1, 0.36, 1)' }}
      >
        {/* Front */}
        <div className="absolute inset-0 grid grid-rows-[1fr_auto] p-5 [backface-visibility:hidden]">
          <div className="flex items-start justify-between">
            <div>
              <div className="mb-1 text-sm text-indigo-200/80">{item.category}</div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            </div>
            <div className="rounded-lg bg-indigo-500/10 p-2 text-indigo-300 ring-1 ring-inset ring-indigo-400/20">
              {item.status === 'found' ? <CheckCircle2 className="h-5 w-5" /> : <AlertTriangle className="h-5 w-5 text-amber-300" />}
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-indigo-200/80">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {item.location}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> {item.time}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100" style={{ boxShadow: 'inset 0 0 0 1px rgba(99,102,241,0.25), 0 10px 40px -10px rgba(99,102,241,0.35)' }} />
        </div>

        {/* Back */}
        <div className="absolute inset-0 rotate-y-180 p-5 [backface-visibility:hidden]">
          <p className="mb-4 text-sm text-indigo-100/90">{item.description}</p>
          <button className="inline-flex items-center gap-2 rounded-xl border border-indigo-400/30 bg-indigo-500/20 px-4 py-2 text-indigo-100 transition hover:bg-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-indigo-400/50">
            View Details <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const InteractiveCards = () => {
  const items = [
    {
      title: 'Black Lenovo Backpack',
      category: 'Found Item',
      status: 'found',
      location: 'Library - 2nd Floor',
      time: '2h ago',
      description: 'Contains notebooks and a silver water bottle. Picked up by campus security.'
    },
    {
      title: 'AirPods Pro (Left)',
      category: 'Lost Item',
      status: 'lost',
      location: 'Engineering Block C',
      time: 'Yesterday',
      description: 'Lost during lab changeover around 3pm. White case with sticker.'
    },
    {
      title: 'Blue ID Card',
      category: 'Found Item',
      status: 'found',
      location: 'Cafeteria',
      time: '3 days ago',
      description: 'Student ID card ending with 4821. Verified at helpdesk.'
    },
  ];

  return (
    <section className="bg-[#0b0f1a] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Live Activity</h2>
            <p className="text-sm text-indigo-200/80">Interactive exo-cards with depth and motion</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <Card key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveCards;
