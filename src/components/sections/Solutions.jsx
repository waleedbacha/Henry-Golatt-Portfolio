import React from 'react';
import { Code2, ShieldCheck, Zap, Lock, Rocket, GitBranch } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    { icon: Code2, title: 'Programming Solutions', description: 'Tailored software solutions for performance and scalability.' },
    { icon: ShieldCheck, title: 'Secure Infrastructure', description: 'Ensure stability, reliability, and data security across systems.' },
    { icon: Zap, title: "Powerful API's", description: 'Build smarter systems using robust, well-documented APIs that simplify integrations.' },
    { icon: Lock, title: 'Secure & Isolated', description: 'Maintain complete control with isolated infrastructure designed to safeguard sensitive information.' },
    { icon: Rocket, title: 'Ready for Scale', description: 'Scale your applications seamlessly with architecture optimized for speed and reliability.' },
    { icon: GitBranch, title: 'Ongoing Context', description: 'Maintain seamless continuity with real-time context that persists across sessions.' },
  ];

  return (
    <section id="solutions" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Turning Complex Code into <span className="text-gradient">Powerful Solutions</span>
          </h2>
          <p className="text-[#b0b0b0] max-w-2xl mx-auto">
            From APIs to full-stack apps, build scalable, secure, and high-performing 
            products crafted with precision and innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#00ff88]/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#00ff88]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#00ff88]/20 transition">
                <solution.icon className="w-6 h-6 text-[#00ff88]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
              <p className="text-[#b0b0b0] text-sm">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
