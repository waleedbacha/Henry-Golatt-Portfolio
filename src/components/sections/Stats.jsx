import React from 'react';

const Stats = () => {
  const stats = [
    {
      number: '15+',
      label: 'Years of Experience',
      description: 'In inclusive economic development',
    },
    {
      number: '40+',
      label: 'Board Positions',
      description: 'Across public, private & nonprofit sectors',
    },
    {
      number: '50+',
      label: 'Organizations Served',
      description: 'Universities, cities, foundations & nonprofits',
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#111111]/30 border-y border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-[#00ff88] mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-[#b0b0b0] text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;