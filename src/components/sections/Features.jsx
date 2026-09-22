import React from 'react';
import {
  Target,
  GraduationCap,
  Building2,
  Users,
  Code,
  TrendingUp,
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Target,
      title: 'Inclusive Economic Development',
      description: 'Building ecosystems that create equitable opportunities for minority and women entrepreneurs.',
    },
    {
      icon: GraduationCap,
      title: 'HBCU Partnerships',
      description: 'Linking historically black colleges to economic development and commercialization opportunities.',
    },
    {
      icon: Building2,
      title: 'Small Business Strategy',
      description: 'Designing programs that support entrepreneurs across the full business lifecycle.',
    },
    {
      icon: Users,
      title: 'Community Engagement',
      description: 'Connecting local governments, universities, and community leaders to build sustainable growth.',
    },
    {
      icon: Code,
      title: 'Technology Commercialization',
      description: 'Bridging university research to market through strategic commercialization pathways.',
    },
    {
      icon: TrendingUp,
      title: 'Policy & Advocacy',
      description: 'Advising on policies that advance economic inclusion at federal, state, and local levels.',
    },
  ];

  return (
    <section id="features" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What <span className="text-gradient">We Do</span>
          </h2>
          <p className="text-[#b0b0b0] max-w-2xl mx-auto">
            HG Consulting helps cities, universities, and organizations build thriving
            ecosystems for minority and women entrepreneurs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#00ff88]/50 transition-all duration-300 group hover:scale-105"
            >
              <div className="w-14 h-14 bg-[#00ff88]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#00ff88]/20 transition">
                <feature.icon className="w-7 h-7 text-[#00ff88]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-[#b0b0b0] text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;