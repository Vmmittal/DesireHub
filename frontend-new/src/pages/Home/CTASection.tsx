import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0">
        <Particles />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="h-12 w-12 text-pink-500 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Get 7 days free trial and 10 free messages to explore our platform.
          </p>
          
          <Link 
            to="/register" 
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]"
          >
            <span className="relative z-10">Join Now</span>
            <Sparkles className="h-5 w-5" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const Particles = () => {
  const particles = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 5 + 10
  }));

  return (
    <>
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          initial={{ 
            y: '100vh',
            x: `${particle.left}vw`,
            opacity: 0,
            scale: 0
          }}
          animate={{ 
            y: '-100vh',
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: `calc(${particle.left}vw + ${Math.sin(particle.id) * 50}px)`
          }}
          transition={{ 
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute w-1 h-1 rounded-full bg-pink-500/30"
          style={{ width: particle.size, height: particle.size }}
        />
      ))}
    </>
  );
};

export default CTASection;