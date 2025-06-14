'use client';

import { motion } from 'framer-motion';
import { FadeIn, FloatingElement } from './animations';

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  delay?: number;
}

export const FeatureCard = ({ title, description, icon, iconBg, delay = 0 }: FeatureProps) => {
  return (
    <FadeIn delay={delay} className="w-full">
      <motion.div 
        whileHover={{ y: -5 }}
        className="h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
      >
        <div className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center mb-4`}>
          <span className="text-2xl">{icon}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </motion.div>
    </FadeIn>
  );
};

export default function FeatureHighlight() {
  const features = [
    {
      title: "Enterprise-Grade Privacy",
      description: "End-to-end encryption with complete data isolation ensuring your information never leaves your secure environment.",
      icon: "🔒",
      iconBg: "bg-purple-900/50",
      delay: 0.1
    },
    {
      title: "State-of-the-Art AI Models",
      description: "Leverage the latest advancements in large language models and retrieval techniques for accurate, contextual responses.",
      icon: "🧠",
      iconBg: "bg-blue-900/50",
      delay: 0.2
    },
    {
      title: "Multi-Source Knowledge",
      description: "Connect to multiple data sources including documents, wikis, databases, and API endpoints for comprehensive answers.",
      icon: "📚",
      iconBg: "bg-green-900/50",
      delay: 0.3
    },
    {
      title: "Seamless Integration",
      description: "Easily integrate with your existing tools and workflows through our extensive API and pre-built connectors.",
      icon: "🔄",
      iconBg: "bg-yellow-900/50",
      delay: 0.4
    },
    {
      title: "Custom Training",
      description: "Fine-tune responses based on your organization's tone, terminology, and specific knowledge requirements.",
      icon: "📝",
      iconBg: "bg-red-900/50",
      delay: 0.5
    },
    {
      title: "Analytics Dashboard",
      description: "Gain insights into usage patterns, popular queries, and knowledge gaps to continuously improve your knowledge base.",
      icon: "📊",
      iconBg: "bg-teal-900/50",
      delay: 0.6
    }
  ];

  return (
    <div className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <FloatingElement amplitude={6} duration={4}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all py-3 px-8 rounded-full font-medium text-white shadow-lg shadow-blue-700/20"
          >
            Schedule a Demo
          </motion.button>
        </FloatingElement>
      </div>
    </div>
  );
}
