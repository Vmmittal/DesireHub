import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Shield, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-bold mb-6"
          >
            Where <span className="text-pink-500">Fantasies</span> Meet Reality
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Join our global community and explore meaningful connections in a safe, secure environment.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/register" className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition">
              Start Free Trial
            </Link>
            <Link to="/plans" className="bg-transparent border-2 border-white px-8 py-3 rounded-full hover:bg-white/10 transition">
              View Plans
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose DesireHub?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Feature 
              icon={<Heart className="h-8 w-8 text-pink-500" />}
              title="Global Community"
              description="Connect with like-minded individuals from around the world"
            />
            <Feature 
              icon={<MessageCircle className="h-8 w-8 text-pink-500" />}
              title="Live Chat"
              description="Engage in real-time conversations with other members"
            />
            <Feature 
              icon={<Shield className="h-8 w-8 text-pink-500" />}
              title="Privacy & Security"
              description="Your privacy is our top priority with end-to-end encryption"
            />
            <Feature 
              icon={<Video className="h-8 w-8 text-pink-500" />}
              title="Video Chat"
              description="Take your connections to the next level with video calls"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pink-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get 7 days free trial and 10 free messages to explore our platform.
          </p>
          <Link to="/register" className="inline-block bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition">
            Join Now
          </Link>
        </div>
      </section>
    </div>
  );
};

const Feature = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center p-6 rounded-lg bg-white/5 backdrop-blur-sm"
  >
    <div className="inline-block p-3 rounded-full bg-pink-500/10 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

export default Home;