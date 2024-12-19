import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Shield, Video } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Heart className="h-8 w-8 text-pink-500" />,
      title: "Global Community",
      description: "Connect with like-minded individuals from around the world"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-pink-500" />,
      title: "Live Chat",
      description: "Engage in real-time conversations with other members"
    },
    {
      icon: <Shield className="h-8 w-8 text-pink-500" />,
      title: "Privacy & Security",
      description: "Your privacy is our top priority with end-to-end encryption"
    },
    {
      icon: <Video className="h-8 w-8 text-pink-500" />,
      title: "Video Chat",
      description: "Take your connections to the next level with video calls"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-16"
        >
          Why Choose <span className="text-pink-500">DesireHub</span>?
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-pink-500/50 transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-pink-500/0 to-pink-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative z-10">
                <div className="inline-block p-3 rounded-full bg-pink-500/10 mb-4 group-hover:bg-pink-500/20 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-500 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;