import React from 'react';
import { Headphones, MessageCircle, RefreshCw, Globe2 } from 'lucide-react';

const Support = () => {
  const supportFeatures = [
    { icon: Headphones, title: 'Expert Guidance', description: 'Expert guidance for code deployment and integration' },
    { icon: MessageCircle, title: 'Fast Support', description: 'Fast, reliable support for technical challenges' },
    { icon: RefreshCw, title: 'Continuous Improvement', description: 'Continuous improvement through feedback and collaboration' },
  ];

  return (
    <section id="support" className="section-padding bg-[#111111]/30 border-y border-[#2a2a2a]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#00ff88]/10 px-4 py-2 rounded-full mb-4">
            <Globe2 className="w-5 h-5 text-[#00ff88]" />
            <span className="text-sm font-medium">24/7 Support</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dedicated Support Available in <span className="text-gradient">Every Language</span>
          </h2>
          <p className="text-[#b0b0b0] max-w-2xl mx-auto">
            Dedicated experts available 24/7 for clear communication, quick assistance, 
            and outstanding worldwide experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {supportFeatures.map((feature, index) => (
            <div key={index} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 text-center hover:border-[#00ff88]/30 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-[#00ff88]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-[#00ff88]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-[#b0b0b0] text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
